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

        icon: Activity,

        question:
          "How would you describe your body pain or stiffness?",

        weight: 20,

        options: [
          "None",
          "Mild",
          "Severe",
        ],
      },

      {
        id: "fatigue",

        icon: BatteryLow,

        question:
          "How often do you experience unexplained fatigue?",

        weight: 20,

        options: [
          "None",
          "Mild",
          "Severe",
        ],
      },

      {
        id: "foodSensitivity",

        icon: Utensils,

        question:
          "How severe are your food sensitivities or digestive reactions?",

        weight: 20,

        options: [
          "None",
          "Mild",
          "Severe",
        ],
      },

      {
        id: "allergies",

        icon: ShieldAlert,

        question:
          "How often do you experience allergies or skin issues?",

        weight: 20,

        options: [
          "None",
          "Mild",
          "Severe",
        ],
      },

      {
        id: "recoverySpeed",

        icon: RefreshCcw,

        question:
          "How quickly do you recover from stress, illness, or exertion?",

        weight: 20,

        options: [
          "Fast Recovery",
          "Moderate Recovery",
          "Slow Recovery",
        ],
      },
    ],
  },
];