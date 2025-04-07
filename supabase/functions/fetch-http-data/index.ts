import { encode as base64Encode } from "https://deno.land/std@0.170.0/encoding/base64.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    const { targetUrl } = await req.json();

    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "Missing targetUrl" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // Fetch the image from the target URL.
    const apiResponse = await fetch(targetUrl);
    if (!apiResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch data", status: apiResponse.status }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: apiResponse.status,
        }
      );
    }

    const contentType = apiResponse.headers.get("content-type") || "application/octet-stream";
    const imageData = await apiResponse.arrayBuffer();

    // Encode the binary image data as a base64 string.
    const base64Data = base64Encode(new Uint8Array(imageData));

    // Return the data as JSON.
    return new Response(
      JSON.stringify({ data: base64Data, contentType }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Unexpected error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
