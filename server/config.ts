/** OpenRouter configuration, loaded once before the agent is created. */
import 'dotenv/config';

export const port = Number(process.env.PORT ?? 3210);
export const modelProvider = 'openrouter';
export const modelBaseUrl = 'https://openrouter.ai/api/v1';
export const modelName = process.env.OPENROUTER_MODEL?.trim() || 'google/gemini-2.5-pro';
export const modelApiKey = process.env.OPENROUTER_API_KEY?.trim() ?? '';

if (!modelApiKey) {
  throw new Error('OPENROUTER_API_KEY is required (see .env).');
}

process.env.OPENAI_BASE_URL = modelBaseUrl;
