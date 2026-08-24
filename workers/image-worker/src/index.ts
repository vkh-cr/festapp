import type { Env } from './types';
import { handleCors, addCorsHeaders } from './cors';
import { handleUpload } from './upload';
import { handlePublicServe } from './serve-public';
import { handlePrivate } from './serve-private';
import { handlePresign } from './presigned';
import { handleDelete } from './delete';
import { errorResponse } from './responses';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // CORS preflight
      if (request.method === 'OPTIONS') {
        return handleCors(request, env);
      }

      const url = new URL(request.url);

      // Route by path prefix
      let response: Response;

      const isControlHost = url.hostname === 'image-api.festapp.net';
      if (url.pathname === '/upload') {
        response = await handleUpload(request, env);
      } else if (url.pathname.startsWith('/private/')) {
        response = await handlePrivate(request, env);
      } else if (url.pathname === '/delete') {
        response = await handleDelete(request, env);
      } else if (url.pathname.startsWith('/presign/')) {
        response = await handlePresign(request, env);
      } else if (!isControlHost) {
        response = await handlePublicServe(request, env);
      } else {
        response = new Response(JSON.stringify({ error: { code: 'CONTROL_ROUTE_NOT_FOUND', message: 'Control route not found', retryable: false } }), {
          status: 404, headers: { 'Content-Type': 'application/json' },
        });
      }

      return addCorsHeaders(request, env, response);
    } catch (error) {
      console.error('image_control_error', {
        status: 'internal_error',
        name: error instanceof Error ? error.name : 'UnknownError',
      });
      return addCorsHeaders(request, env,
        errorResponse(500, 'INTERNAL_ERROR', 'Internal server error', true)
      );
    }
  },
};
