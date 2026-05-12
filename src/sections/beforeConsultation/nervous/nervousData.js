// nervousData.js

import {
  Brain,
  Moon,
  Sunrise,
  Zap,
  BatteryLow,
} from "lucide-react";

export const nervousSections = [
  {
    id: "nervous",

    title: "Nervous System Assessment",

    subtitle:
      "Evaluate your nervous system balance, recovery, resilience, and stress response.",

    questions: [
      {
        id: "daytimeState",

        icon: Brain,

        question:
          "How would you describe your daytime mental state?",

        weight: 25,

        options: [
          "Calm",
          "Tense",
          "Wired / Anxious",
        ],
      },

      {
        id: "sleepQuality",

        icon: Moon,

        question:
          "How would you describe your sleep quality?",

        weight: 20,

        options: [
          "Deep",
          "Light",
          "Disturbed",
        ],
      },

      {
        id: "wakeUpFeeling",

        icon: Sunrise,

        question:
          "How do you usually feel after waking up?",

        weight: 15,

        options: [
          "Refreshed",
          "Slightly Tired",
          "Exhausted",
        ],
      },

      {
        id: "stressResponse",

        icon: Zap,

        question:
          "How does your body respond to stress generally?",

        weight: 20,

        options: [
          "Stable",
          "Reactive",
          "Overwhelmed / Shutdown",
        ],
      },

      {
        id: "fatiguePattern",

        icon: BatteryLow,

        question:
          "How would you describe your energy and fatigue pattern?",

        weight: 20,

        options: [
          "Balanced",
          "Fluctuating",
          "Burnout / Extreme Fatigue",
        ],
      },
    ],
  },
];