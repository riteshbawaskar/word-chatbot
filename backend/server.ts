import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import uploadRoute from './routes/upload.js';
import chatRoute from './routes/chat.js';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

// ✅ Enable CORS for all origins
await fastify.register(cors, {
  origin: true
});

await fastify.register(multipart);
await fastify.register(uploadRoute);
await fastify.register(chatRoute);

fastify.listen({ port: 3001 }, err => {
  if (err) throw err;
  console.log('Server running at http://localhost:3001');
});