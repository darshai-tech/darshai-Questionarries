// cardiovascularData.js

import {
  HeartPulse,
  Activity,
  Gauge,
  Droplets,
  Dumbbell,
  Brain,
} from "lucide-react";

export const cardiovascularSections = [
  {
    id: "cardiovascular",

    title: "Cardiovascular Assessment",

    subtitle:
      "Evaluate your heart health, circulation, recovery, and cardiovascular resilience.",

    questions: [
      {
        id: "bloodPressure",

        icon: HeartPulse,

        question:
          "What is your usual blood pressure range?",

        weight: 30,

        options: [
          "<120 / 80",
          "120–139 / 80–89",
          "≥140 / 90",
        ],
      },

      {
        id: "hrv",

        icon: Activity,

        question:
          "How is your Heart Rate Variability (HRV)?",

        weight: 15,

        options: [
          "High",
          "Normal",
          "Low",
        ],
      },

      {
        id: "rhr",

        icon: Gauge,

        question:
          "What is your Resting Heart Rate (RHR)?",

        weight: 15,

        options: [
          "50–65 bpm",
          "66–80 bpm",
          ">80 bpm",
        ],
      },

      {
        id: "lipidProfile",

        icon: Droplets,

        question:
          "How would you describe your lipid profile?",

        weight: 20,

        options: [
          "Optimal",
          "Moderate Imbalance",
          "High Risk",
        ],
      },

      {
        id: "physicalActivity",

        icon: Dumbbell,

        question:
          "How physically active are you?",

        weight: 10,

        options: [
          "Active",
          "Moderate",
          "Sedentary",
        ],
      },

      {
        id: "stressLevel",

        icon: Brain,

        question:
          "How would you rate your stress levels?",

        weight: 10,

        options: [
          "Low",
          "Moderate",
          "High",
        ],
      },
    ],
  },
];