import type { Env } from './types';
import { handleCors, addCorsHeaders } from './cors';
import { handleUpload } from './upload';
import { handlePublicServe } from './serve-public';
import { handlePrivate } from './serve-private';
import { handlePresign } from './presigned';
import { handleDelete } from './delete';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // CORS preflight
      if (request.method === 'OPTIONS') {
        return handleCors();
      }

      const url = new URL(request.url);

      // Route by path prefix
      let response: Response;

      if (url.pathname.startsWith('/upload')) {
        response = await handleUpload(request, env);
      } else if (url.pathname.startsWith('/private/')) {
        response = await handlePrivate(request, env);
      } else if (url.pathname.startsWith('/delete')) {
        response = await handleDelete(request, env);
      } else if (url.pathname.startsWith('/presign/')) {
        response = await handlePresign(request, env);
      } else {
        response = await handlePublicServe(request, env);
      }

      return addCorsHeaders(response);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Internal server error';
      return addCorsHeaders(
        new Response(message, { status: 500 })
      );
    }
  },
};
