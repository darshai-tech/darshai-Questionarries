// inflammationData.js

import {
  Activity,
  BatteryLow,
  Utensils,
  ShieldAlert,
  RefreshCcw,
} from "lucide-react";

export const inflammationSections = [
  {
    id: "inflammation",

    title: "Inflammation Assessment",

    subtitle:
      "Evaluate inflammation load, recovery capacity, and systemic stress response.",

    questions: [
      {
        id: "bodyPain",

        short: "Pain",

        icon: Activity,

        question:
          "How would you describe your body pain or stiffness?",

        weight: 20,

        options: [
          {
            label: "None",
            score: 3,
          },

          {
            label: "Mild",
            score: 2,
          },

          {
            label: "Severe",
            score: 1,
          },
        ],
      },

      {
        id: "fatigue",

        short: "Fatigue",

        icon: BatteryLow,

        question:
          "How often do you experience unexplained fatigue?",

        weight: 20,

        options: [
          {
            label: "None",
            score: 3,
          },

          {
            label: "Mild",
            score: 2,
          },

          {
            label: "Severe",
            score: 1,
          },
        ],
      },

      {
        id: "foodSensitivity",

        short: "Sensitivity",

        icon: Utensils,

        question:
          "How severe are your food sensitivities or digestive reactions?",

        weight: 20,

        options: [
          {
            label: "None",
            score: 3,
          },

          {
            label: "Mild",
            score: 2,
          },

          {
            label: "Severe",
            score: 1,
          },
        ],
      },

      {
        id: "allergies",

        short: "Allergies",

        icon: ShieldAlert,

        question:
          "How often do you experience allergies or skin issues?",

        weight: 20,

        options: [
          {
            label: "None",
            score: 3,
          },

          {
            label: "Mild",
            score: 2,
          },

          {
            label: "Severe",
            score: 1,
          },
        ],
      },

      {
        id: "recoverySpeed",

        short: "Recovery",

        icon: RefreshCcw,

        question:
          "How quickly do you recover from stress, illness, or exertion?",

        weight: 20,

        options: [
          {
            label: "Fast Recovery",
            score: 3,
          },

          {
            label: "Moderate Recovery",
            score: 2,
          },

          {
            label: "Slow Recovery",
            score: 1,
          },
        ],
      },
    ],
  },
];