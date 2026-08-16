import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://integrate.api.nvidia.com/v1",
  apiKey: process.env.NVIDIA_API_KEY,
});

const response = await client.chat.completions.create({
  model: "nvidia/nemotron-3-ultra-550b-a55b",
  messages: [
    {
      role: "user",
      content:
        "You are a senior web developer. Explain how you would build a modern SaaS landing page using Next.js and Tailwind CSS.",
    },
  ],
  temperature: 1,
  top_p: 0.95,
  max_tokens: 4096,
});

console.log(response.choices[0].message.content);