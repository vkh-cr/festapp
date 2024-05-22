import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const _SMTP_HOSTNAME = Deno.env.get('SMTP_HOSTNAME')!
const _SMTP_USER_NAME = Deno.env.get('SMTP_USER_NAME')!
const _SMTP_USER_PASSWORD = Deno.env.get('SMTP_USER_PASSWORD')!

const _DEFAULT_URL = Deno.env.get('DEFAULT_URL')!
const _DEFAULT_EMAIL = Deno.env.get('DEFAULT_EMAIL')!
const _APP_NAME = Deno.env.get('APP_NAME')!


const _supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const corsHeaders = { 'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type', };


Deno.serve(async (req) => {
    // This is needed if you're planning to invoke your function from a browser.
    if (req.method === 'OPTIONS') {
      return new Response('ok', { headers: corsHeaders })
    }

    const reqData = await req.json();
    console.log(reqData);

    const userEmail = reqData.email;
    console.log(userEmail);

    const userData = await _supabase
          .from("user_info")
          .select()
          .eq("email_readonly", userEmail)
          .maybeSingle();

    if(userData.data != null) {
        return new Response(JSON.stringify({"email":userEmail}), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        });
    }

//     const result = await _supabase.rpc("process_token_register",
//                          { params: {'data': reqData}});

//     if(result.code != 200){
//         return new Response(JSON.stringify({"code":result.code}), {
//           headers: { ...corsHeaders, 'Content-Type': 'application/json' },
//           status: 200,
//         })
//     }

    const { data } = await _supabase.rpc("create_user",
            {oc: 1, email: userEmail, password: "88888888"});
    console.log(data);
    await _supabase.rpc("update_user",
                    {
                      usr: data,
                      oc: 1,
                      data: reqData
                    });

    const userId = data;

    const token = crypto.randomUUID();

    console.log(token);
    await _supabase
          .from("user_reset_token")
          .delete()
          .eq("user", userId);

    await _supabase
      .from("user_reset_token")
      .insert({
        "user":userId,
        "token":token,
    });

    const template = await _supabase
      .from("email_templates")
      .select()
      .eq("id", "RESET_PASSWORD")
      .single();

    console.log(template);
    let html = template.data.html;
    html = html.replace(`{{.ResetPasswordLink}}`, _DEFAULT_URL+"/#/resetPassword?token="+token);

    const client = new SMTPClient({
      connection: {
        hostname: _SMTP_HOSTNAME,
        port: 465,
        tls: true,
        auth: {
          username: _SMTP_USER_NAME,
          password: _SMTP_USER_PASSWORD,
        },
      },
    });

    await client.send({
      from: _APP_NAME + " | Festapp" + "<" + _DEFAULT_EMAIL + ">",
      to: userEmail,
      subject: template.data.subject,
      html: html,
    });

    await client.close();

    await _supabase
      .from("log_emails")
      .insert({
        "from":_DEFAULT_EMAIL,
        "to":userEmail,
        "template":template.data.id
    });

    return new Response(JSON.stringify({"email":userEmail, "code":200}), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
})