// metabolicData.js

import {
  Droplets,
  Activity,
  Dumbbell,
  HeartPulse,
  Utensils,
  Scale,
} from "lucide-react";

export const metabolicSections = [
  {
    id: "metabolic",

    title: "Metabolic Assessment",

    subtitle:
      "Evaluate your metabolic balance, energy response, and activity levels.",

    questions: [
      {
        id: "hba1c",

        icon: Droplets,

        question:
          "What is your HbA1c level?",

        weight: 25,

        options: [
          "<5.7",
          "5.7 – 6.4",
          "≥6.5",
        ],
      },

      {
        id: "bloodGlucose",

        icon: Activity,

        question:
          "What is your fasting blood glucose level?",

        weight: 20,

        options: [
          "<100 mg/dl",
          "100 – 125 mg/dl",
          "≥126 mg/dl",
        ],
      },

      {
        id: "physicalActivity",

        icon: Dumbbell,

        question:
          "How active are you physically every week?",

        weight: 15,

        options: [
          "150 min/week",
          "60 – 150 min/week",
          "<60 min/week",
        ],
      },

      {
        id: "cholesterol",

        icon: HeartPulse,

        question:
          "How would you describe your cholesterol or lipid profile?",

        weight: 15,

        options: [
          "Normal",
          "Borderline",
          "High",
        ],
      },

      {
        id: "postMealResponse",

        icon: Utensils,

        question:
          "How do you usually feel after meals?",

        weight: 15,

        options: [
          "Stable Energy",
          "Mild Crash / Hunger",
          "Sleepy / Heavy",
        ],
      },

      {
        id: "bmi",

        icon: Scale,

        question:
          "What is your BMI range?",

        weight: 10,

        options: [
          "18.5 – 24.9",
          "25 – 29.9",
          "≥30",
        ],
      },
    ],
  },
];