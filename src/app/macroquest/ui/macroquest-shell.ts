import { Component, computed, inject, viewChild } from '@angular/core';
import { ActivityMessage } from '@ag-ui/core';
import {
  CopilotChat,
  CopilotA2UIActivityRenderer,
  anyActivityContentSchema,
  injectAgentStore,
  registerRenderActivityMessage,
} from '@copilotkit/angular';
import { A2uiLocation } from './a2ui-location';
import { MacroQuestStore } from '../application/macro-quest-store';
import { MacroDashboard } from './macro-dashboard';
import { MealTimeline } from './meal-timeline';
import { DemoMealPlates } from './demo-meal-plates';

@Component({
  selector: 'mq-shell',
  imports: [MacroDashboard, MealTimeline, DemoMealPlates, CopilotChat, CopilotA2UIActivityRenderer],
  templateUrl: './macroquest-shell.html',
})
export class MacroQuestShell {
  protected readonly chat = viewChild(CopilotChat);
  protected readonly store = inject(MacroQuestStore);
  protected readonly agentStore = injectAgentStore('default');
  protected readonly surfaces = computed(() =>
    this.agentStore()
      .messages()
      .filter(
        (message): message is ActivityMessage =>
          message.role === 'activity' && message.activityType === 'a2ui-surface',
      ),
  );

  constructor() {
    // Override only the chat location; the main area uses the built-in renderer.
    registerRenderActivityMessage({
      activityType: 'a2ui-surface',
      content: anyActivityContentSchema,
      component: A2uiLocation,
    });
  }
}
