import { extractText } from '../utils/docxParser.js';

let storedDoc = '';

export default async function uploadRoute(fastify: any) {
  fastify.post('/upload', async (req:any, reply:any) => {
    const data = await req.file();
    const buffer = await data.toBuffer();
    const text = await extractText(buffer);
    storedDoc = text;
    reply.send({ message: 'Document uploaded successfully' });
  });

  fastify.decorate('storedDoc', () => storedDoc);
}