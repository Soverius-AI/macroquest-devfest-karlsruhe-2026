# MacroQuest at DevFest Karlsruhe 2026

MacroQuest is the Angular meal logger used in **Agentic UI: Wenn KI Teil des Frontends wird**, presented by Rainer Hahnekamp and Murat Sari at DevFest Karlsruhe on 7 November 2026. The demo shows how an AI agent can work with an existing Angular app through CopilotKit, AG-UI, and A2UI.

**[Talk page and slides](https://soverius.ai/talks/agentic-ui-devfest-karlsruhe-2026)**

## Demo branches

| Branch | What it shows |
| --- | --- |
| [`2026-11-07-init`](https://github.com/Soverius-AI/macroquest-devfest-karlsruhe-2026/tree/2026-11-07-init) | The starting point for the live demo. The Angular dashboard and meal log use sample data. |
| [`2026-11-07-agui`](https://github.com/Soverius-AI/macroquest-devfest-karlsruhe-2026/tree/2026-11-07-agui) | The CopilotKit chat, meal photo analysis, and user confirmation for adding a meal. |
| [`2026-11-07-a2ui`](https://github.com/Soverius-AI/macroquest-devfest-karlsruhe-2026/tree/2026-11-07-a2ui) | A2UI enabled in the Angular client and the CopilotKit runtime. Generated surfaces render in the main app. |

## Run the starting point

```bash
git clone --branch 2026-11-07-init https://github.com/Soverius-AI/macroquest-devfest-karlsruhe-2026.git
cd macroquest-devfest-karlsruhe-2026
pnpm install
pnpm start:ui
```

Open [localhost:4200](http://localhost:4200) to explore the meal log. For the chat and generated UI, switch to the corresponding demo branch and follow its README for the model and runtime setup.
