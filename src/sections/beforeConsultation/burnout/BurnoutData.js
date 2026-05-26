import {
  Moon,
  Activity,
  HeartPulse,
  Brain,
  Battery,
  Smile,
} from "lucide-react";

export const burnoutSections = [
  {
    id: "burnout",

    title: "Burnout Assessment",

    subtitle:
      "Evaluate stress, fatigue, and nervous system overload.",

    totalScore: 100,

    questions: [
      {
        id: "sleep",

        short: "Sleep",

        icon: Moon,

        question:
          "How would you describe your sleep quality?",

        weight: 20,

        options: [
          {
            label:
              "7-8 Hrs (Deep Sleep)",

            score: 3,
          },

          {
            label:
              "5-6 Hrs (Light Sleep)",

            score: 2,
          },

          {
            label:
              "<5 Hrs (Disturbed)",

            score: 1,
          },
        ],
      },

      {
        id: "hrv",

        short: "HRV",

        icon: Activity,

        question:
          "How is your Heart Rate Variability?",

        weight: 20,

        options: [
          {
            label: "High",

            score: 3,
          },

          {
            label: "Normal",

            score: 2,
          },

          {
            label: "Low",

            score: 1,
          },
        ],
      },
    ],
  },
];