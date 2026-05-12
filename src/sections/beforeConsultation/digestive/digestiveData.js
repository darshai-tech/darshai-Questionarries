// digestiveData.js

import {
  Utensils,
  Wind,
  Soup,
  Flame,
  Activity,
  BatteryLow,
} from "lucide-react";

export const digestiveSections = [
  {
    id: "digestive",

    title: "Digestive Assessment",

    subtitle:
      "Understand your digestive strength, gut comfort, and post-meal response.",

    questions: [
      {
        id: "appetite",

        icon: Utensils,

        question:
          "How would you describe your appetite?",

        weight: 15,

        options: [
          "Normal",
          "Irregular",
          "Extreme (Low / High)",
        ],
      },

      {
        id: "bloating",

        icon: Wind,

        question:
          "How often do you experience bloating?",

        weight: 20,

        options: [
          "Rare",
          "Sometimes",
          "Daily",
        ],
      },

      {
        id: "mealTolerance",

        icon: Soup,

        question:
          "How comfortable do you feel after meals?",

        weight: 15,

        options: [
          "Comfortable",
          "Mild Discomfort",
          "Frequent Discomfort",
        ],
      },

      {
        id: "acidReflux",

        icon: Flame,

        question:
          "How often do you experience acid reflux or burping?",

        weight: 15,

        options: [
          "Rare",
          "Occasional",
          "Frequent",
        ],
      },

      {
        id: "bowelMovement",

        icon: Activity,

        question:
          "How regular are your bowel movements?",

        weight: 20,

        options: [
          "Regular",
          "Slight Disturbance",
          "Irregular",
        ],
      },

      {
        id: "postMealEnergy",

        icon: BatteryLow,

        question:
          "How is your energy level after meals?",

        weight: 15,

        options: [
          "Good",
          "Slight Dip",
          "Very Low / Sleepy",
        ],
      },
    ],
  },
];