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
    dbConnectionString = "postgresql://postgres.kjdpmixlnhntmxjedpxh:somepassword@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
    repo,
    directory,
    admin_email,
    admin_password,
    supabase_instance_id,
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
    if (!admin_email || !admin_password || !supabase_instance_id) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required parameters for seed: admin_email, admin_password, supabase_instance_id",
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
    tls: { rejectUnauthorized: false }, // adjust as needed for your security requirements
  });

  try {
    await client.connect();
    console.log("Connected to the database.");

    // If the seed scripts are being run, call the extra SQL functions.
    if (directory === "scripts/seed") {
      try {
        console.log("Executing seed_org_with_admin...");
        // You might want to use SELECT * FROM ... if you need the returned values.
        await client.query("SELECT seed_org_with_admin($1, $2)", [
          admin_email,
          admin_password,
        ]);

        console.log("Executing setup_triggers...");
        await client.query("SELECT setup_triggers($1)", [supabase_instance_id]);
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

    // Fetch the list of files from the GitHub repository directory
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${directory}`;
    const githubResponse = await fetch(apiUrl);
    if (!githubResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch files from GitHub" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }
    const files = await githubResponse.json();

    // Process each SQL file found in the directory
    for (const file of files) {
      if (file.name.endsWith(".sql") && file.download_url) {
        const fileResponse = await fetch(file.download_url);
        if (!fileResponse.ok) {
          console.error(`Failed to download ${file.name}`);
          continue;
        }
        const sql = await fileResponse.text();

        try {
          console.log(`Executing ${file.name} ...`);
          await client.query(sql);
        } catch (sqlError) {
          console.error(`Error executing ${file.name}:`, sqlError);
          // Optionally: abort further processing or simply continue with the next file.
        }
      }
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
