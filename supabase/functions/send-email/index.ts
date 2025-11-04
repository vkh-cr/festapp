import { sendEmailWithSubs } from "../_shared/emailClient.ts";
import { supabaseAdmin, getEmailTemplateAndWrapper } from "../_shared/supabaseUtil.ts";
import { getTicketOrderStornoTemplate } from "./getTicketOrderStornoTemplate.ts";
import { getTicketOrderUpdateTemplate } from "./getTicketOrderUpdateTemplate.ts";
import { getTicketOrderReminderTemplate } from "./getTicketOrderReminderTemplate.ts";
import { AuthError } from "../_shared/auth.ts";

const _DEFAULT_EMAIL = Deno.env.get("DEFAULT_EMAIL")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const templateHandlers = {
  "TICKET_ORDER_STORNO": getTicketOrderStornoTemplate,
  "TICKET_ORDER_UPDATE": getTicketOrderUpdateTemplate,
  "TICKET_ORDER_REMINDER": getTicketOrderReminderTemplate,
};

/**
 * Processes a single email sending task using the Strategy Pattern.
 * This function encapsulates the logic for fetching template data, sending the email,
 * logging, and performing post-send actions. It throws an error on failure.
 * @param taskData - The data for the specific email task, including templateCode.
 * @param authorization - The authorization header string.
 * @returns A promise that resolves to a result object indicating success.
 */
async function processEmailTask(taskData: any, authorization: string | null) {
  const { code } = taskData;

  if (!code) {
    throw new Error("Template code is required for each task.");
  }

  console.log(`Processing task for template: ${code}`);

  // --- Template Data Gathering using Strategy Pattern ---
  const handler = templateHandlers[code];
  if (!handler) {
    throw new Error(`Unsupported template code: ${code}`);
  }

  const { subs, sender, receiver, context, attachments = [], reply_to } = await handler(taskData, authorization!);

  // --- Email Template Fetching ---
  const templateAndWrapper: any = await getEmailTemplateAndWrapper(code, context);
  if (!templateAndWrapper || !templateAndWrapper.template) {
    throw new Error(`Template not found for code ${code}`);
  }

  // --- Email Sending ---
  console.log(`Sending email to ${receiver} with ${attachments.length} attachments.`);
  await sendEmailWithSubs({
    to: receiver,
    subject: templateAndWrapper.template.subject,
    content: templateAndWrapper.template.html,
    subs,
    from: `${sender || "Festapp"} | Festapp <${_DEFAULT_EMAIL}>`,
    wrapper: templateAndWrapper.wrapper ? templateAndWrapper.wrapper.html : null,
    attachments,
    replyTo: reply_to,
  });
  console.log(`Email for template ${code} sent successfully to ${receiver}.`);

  // --- Logging ---
  await supabaseAdmin.from("log_emails").insert({
    from: _DEFAULT_EMAIL,
    to: receiver,
    template: templateAndWrapper.template.id,
    organization: context.organization,
    occasion: context.occasion,
  });

  // --- Post-Action ---
  if ((code === "TICKET_ORDER_UPDATE" || code === "TICKET_ORDER_REMINDER") && context?.orderHistoryId) {
    console.log(`Flagging order history record as sent: ${context.orderHistoryId}`);
    await supabaseAdmin.rpc('add_sent_to_customer_flag', { history_id: context.orderHistoryId });

    if (code === "TICKET_ORDER_REMINDER") {
      console.log(`Marking reminder as sent on payment_info: ${context.paymentInfoId}`);
      await supabaseAdmin.rpc('mark_payment_reminder_sent', { p_payment_info_id: context.paymentInfoId });
    }
  }

  return { success: true, code, message: "Email sent successfully." };
}


/**
 * Handles the processing of a batch of email tasks fetched from the queue.
 * @param tasks - An array of task objects to process.
 * @param authorization - The authorization header string.
 * @param requestSecret - A secret passed in the request for validation or other purposes.
 * @returns A Response object with the results of the batch operation.
 */
async function handleBatchProcessing(tasks: any[], authorization: string | null, requestSecret: string | null) {
    const startTime = Date.now();
    const timeLimit = 60000; // 60 seconds
    const safetyMargin = 10000; // 10 seconds to spare

    const results = [];
    let tasksAttempted = 0;

    console.log(`Starting batch processing for ${tasks.length} tasks.`);

    for (const task of tasks) {
      tasksAttempted++;
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > timeLimit - safetyMargin) {
        console.warn(`Time limit approaching. Stopping batch processing after ${tasksAttempted - 1} tasks to avoid timeout.`);
        results.push({
          success: false,
          taskId: task.id,
          code: task.code,
          error: "Skipped due to time limit."
        });
        continue;
      }

      try {

        task.data.orderId = task.data.order_id;
        task.data.code = task.code;
        task.data.requestSecret = requestSecret;
        const result = await processEmailTask(task, authorization);
        results.push({ ...result, taskId: task.id });
      } catch (error) {
        const isAuthError = error instanceof AuthError;
        const status = isAuthError ? error.status : 500;
        const message = error.message || "An unexpected error occurred during task processing";
        console.error(`Error processing task for template ${task.code} [${status}]: ${message}`, isAuthError ? '' : error);
        results.push({ success: false, taskId: task.id, code: task.code, error: message });
      } finally {
        if (task.id) {
          console.log(`Removing task ${task.id} from the queue.`);
          const { error: rpcError } = await supabaseAdmin.rpc('remove_from_queue_emails', {
            task_id: task.id
          });

          if (rpcError) {
            console.error(`CRITICAL: Failed to remove task ${task.id} from queue:`, rpcError.message);
          } else {
            console.log(`Successfully removed task ${task.id} from the queue.`);
          }
        } else {
          console.warn(`Task missing 'id' field, cannot remove from queue. Task data:`, task);
        }
      }
    }

    console.log(`Batch processing finished. Attempted ${tasksAttempted} of ${tasks.length} tasks.`);

    return new Response(JSON.stringify({
        message: `Batch processing complete. Attempted ${tasksAttempted} of ${tasks.length} tasks.`,
        results,
    }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
    });
}


// --- Main Server Handler ---
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const requestBody = await req.json();
    const authorization = req.headers.get("Authorization");
    const { requestSecret } = requestBody;

    // --- QUEUE PROCESSING LOGIC ---
    if (requestBody.processQueue === true) {
        console.log("Processing queue flag detected. Fetching due tasks from database.");
        const { data: tasks, error } = await supabaseAdmin.rpc('get_due_queue_emails');

        if (error) {
            throw new Error(`Failed to fetch email queue: ${error.message}`);
        }

        if (!tasks || tasks.length === 0) {
            return new Response(JSON.stringify({ message: "No due email tasks to process." }), {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
                status: 200,
            });
        }

        return await handleBatchProcessing(tasks, authorization, requestSecret);
    }
    // --- SINGLE TASK LOGIC ---
    else {
      // If not processing a queue, assume it's a single, ad-hoc email task.
      const result = await processEmailTask(requestBody, authorization);
      return new Response(JSON.stringify({ message: result.message }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }
  } catch (error) {
    // Catches errors from req.json(), task processing, or other top-level issues
    const isAuthError = error instanceof AuthError;
    const status = isAuthError ? error.status : 500;
    const message = error.message || "An unexpected error occurred";

    console.error(`A top-level error occurred [${status}]: ${message}`, isAuthError ? '' : error);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: status,
    });
  }
});