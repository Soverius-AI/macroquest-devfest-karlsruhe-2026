# MacroQuest

This branch is the talk's starting point. MacroQuest is an Angular meal log
with a CopilotKit chat using OpenRouter. The meal log lives in
one service. The agent answers questions from a system prompt. The meal-log
snapshot is not attached yet.
The later beats (a frontend tool, human in the loop, A2UI, and Open Generative
UI) are written down in `talk-script.md` and are not in this branch.

## Configuration

Install the dependencies via pnpm:

```bash
pnpm install
```

Set your OpenRouter API key in `.env` (gitignored). If you do not already
have an `.env` file, copy `.env.example` and fill in `OPENROUTER_API_KEY`.
Optionally set `OPENROUTER_MODEL`; the runtime defaults to `google/gemini-2.5-pro`.

## Start everything

Run the CopilotKit runtime and Angular app:

```bash
pnpm run start:all
```

Open `http://localhost:4200`. Ctrl+C stops both processes.
You can also start them separately with `pnpm run start:runtime` and
`pnpm run start:ui`.

## Runtime

```bash
pnpm run start:runtime
```

The runtime is a local Hono wrapper around `@copilotkit/runtime/v2`. Each run
streams a chat reply from the system prompt. The meal-log snapshot is not
attached yet.

## Angular App

```bash
pnpm run start:ui
```

Open `http://localhost:4200`.

## Talk

The meal log loads on startup. Ask the chat a question. The two starter prompts are
"What does this app track?" and "How much can I still eat today?" The full
sequence is in `talk-script.md`.

## Source Layout

The Angular source is split as one feature area:

```text
src/app/macroquest/
  domain/       Pure nutrition types, calculations, meal factory, sample data
  application/  Meal-log service
  ui/           Standalone Angular components with signal inputs and outputs
```

The root `App` only mounts `<mq-shell />`. `MacroQuestStore` holds the meal
log in one signal. The snapshot is not attached yet.

## Verification

Build the app:

```bash
pnpm run build
```

Run the browser integration test:

```bash
pnpm run test:integration
```
