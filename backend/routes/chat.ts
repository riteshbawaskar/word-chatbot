import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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',
 baseURL: 'https://openrouter.ai/api/v1' });


export default async function chatRoute(fastify:any) {
  fastify.post('/chat', async (req:any, reply:any) => {
    const { message } = await req.body;
    const context = fastify.storedDoc?.() || 'No document uploaded.';

    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-7b-instruct',
      messages: [
        { role: 'system', content: 'Answer based on the given document context only.' },
        { role: 'user', content: `Document: ${context}\n\nQuestion: ${message}` }
      ]
    });

    reply.send({ response: completion.choices[0].message.content });
  });
}