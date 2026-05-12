// environmentData.js

import {
  Sun,
  Building2,
  Trees,
  Monitor,
  Globe2,
} from "lucide-react";

export const environmentSections = [
  {
    id: "environment",

    title:
      "Environmental & Geo Context Assessment",

    subtitle:
      "Understand how your surroundings, environment, and lifestyle exposure affect your wellbeing.",

    questions: [
      {
        id: "climateExposure",

        icon: Sun,

        question:
          "How stressful is your climate exposure generally?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate",
          "High Stress",
        ],
      },

      {
        id: "livingEnvironment",

        icon: Building2,

        question:
          "How would you describe your living environment?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate",
          "High Stress",
        ],
      },

      {
        id: "outdoorExposure",

        icon: Trees,

        question:
          "How healthy is your outdoor exposure and nature interaction?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate",
          "High Stress",
        ],
      },

      {
        id: "screenTime",

        icon: Monitor,

        question:
          "How balanced is your daily screen time exposure?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate",
          "High Stress",
        ],
      },

      {
        id: "environmentalImpact",

        icon: Globe2,

        question:
          "How strongly does your environment affect your health and energy?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate",
          "High Stress",
        ],
      },
    ],
  },
];