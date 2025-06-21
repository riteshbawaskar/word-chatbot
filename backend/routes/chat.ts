import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });

export default async function chatRoute(fastify:any) {
  fastify.post('/chat', async (req:any, reply:any) => {
    const { message } = await req.body;
    const context = fastify.storedDoc?.() || 'No document uploaded.';

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Answer based on the given document context only.' },
        { role: 'user', content: `Document: ${context}\n\nQuestion: ${message}` }
      ]
    });

    reply.send({ response: completion.choices[0].message.content });
  });
}