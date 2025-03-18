import { Client } from "https://deno.land/x/postgres/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Parse the request body
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  // Destructure parameters and provide a default connection string if none is provided
  const {
    dbConnectionString,
    repo,
    directory,
    admin_email,
    admin_password,
    project_url,
  } = body;

  if (!repo || !directory) {
    return new Response(
      JSON.stringify({ error: "Missing required parameters: repo and directory" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  // For seed scripts, ensure the additional parameters are provided.
  if (directory === "scripts/seed") {
    if (!admin_email || !admin_password || !project_url) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required parameters for seed: admin_email, admin_password, project_url",
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
  }

  // Parse the PostgreSQL connection string
  let dbUrl: URL;
  try {
    dbUrl = new URL(dbConnectionString);
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid database connection string" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  // Create the Postgres client with TLS enabled (required for Supabase connections)
  const client = new Client({
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), // removes the leading '/'
    hostname: dbUrl.hostname,
    port: parseInt(dbUrl.port),
    tls: { rejectUnauthorized: false },
  });

  // Helper function to recursively process directories and execute SQL files.
  async function processDirectory(dir: string) {
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${dir}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch directory ${dir}`);
    }
    const items = await response.json();

    for (const item of items) {
      if (item.type === "dir") {
        // Recursively process child directories.
        await processDirectory(`${dir}/${item.name}`);
      } else if (item.type === "file" && item.name.endsWith(".sql") && item.download_url) {
        console.log(`Executing ${dir}/${item.name} ...`);
        const fileResponse = await fetch(item.download_url);
        if (!fileResponse.ok) {
          console.error(`Failed to download ${dir}/${item.name}`);
          continue;
        }
        const sql = await fileResponse.text();
        await client.queryObject(sql);
      }
    }
  }

  try {
    await client.connect();
    console.log("Connected to the database.");

    // If the seed scripts are being run, call the extra SQL functions.
    if (directory === "scripts/seed") {
      try {
        // Only call seed_org_with_admin if both admin_email and admin_password are provided and non-empty.
        if (admin_email && admin_password) {
          console.log("Executing seed_org_with_admin...");
          const seedQuery = `SELECT seed_org_with_admin('${admin_email}', '${admin_password}')`;
          await client.queryObject(seedQuery);
        } else {
          console.log("Skipping seed_org_with_admin due to missing admin_email or admin_password.");
        }

        console.log("Executing setup_triggers...");
        const triggerQuery = `SELECT setup_triggers('${project_url}')`;
        await client.queryObject(triggerQuery);

        console.log("Executing setup_crons...");
        const cronQuery = `SELECT setup_crons('${project_url}')`;
        await client.queryObject(cronQuery);
      } catch (err) {
        console.error("Error executing seed functions:", err);
        return new Response(
          JSON.stringify({
            error: "Error executing seed functions",
            details: err.toString(),
          }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: 500,
          }
        );
      }
    }

    // Recursively process the specified directory and its subdirectories.
    try {
      await processDirectory(directory);
    } catch (err) {
      console.error("Error processing directories:", err);
      return new Response(
        JSON.stringify({
          error: "Failed to process SQL files",
          details: err.toString(),
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Upgrade operation completed successfully.",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({
        error: "Unexpected error occurred",
        details: error.toString(),
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  } finally {
    await client.end();
  }
});
