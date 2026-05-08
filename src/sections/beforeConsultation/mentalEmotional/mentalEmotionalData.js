import {
  Brain,
  Smartphone,
  Trees,
  Plane,
  CloudSun,
} from "lucide-react";

export const mentalEmotionalSections = [
  {
    id: "mentalEmotional",

    title: "Mental & Emotional",

    subtitle:
      "Tell us about your emotional wellness.",

    questions: [
      {
        id: "stress1",

        short: "Stress",

        icon: Brain,

        question:
          "How would you describe your stress levels?",

        options: [
          "Low",
          "Moderate",
          "High",
          "Very High",
        ],
      },

      {
        id: "screenTime",

        short: "Screen",

        icon: Smartphone,

        question:
          "How much screen time do you have daily?",

        options: [
          "<2 Hours",
          "2–5 Hours",
          "5–8 Hours",
          "8+ Hours",
        ],
      },

      {
        id: "outside",

        short: "Outdoor",

        icon: Trees,

        question:
          "How often do you spend time outdoors?",

        options: [
          "Rarely",
          "Sometimes",
          "Frequently",
          "Daily",
        ],
      },

      {
        id: "travel",

        short: "Travel",

        icon: Plane,

        question:
          "How frequently do you travel?",

        options: [
          "Rarely",
          "Monthly",
          "Weekly",
          "Very Frequently",
        ],
      },

      {
        id: "environment",

        short: "Environment",

        icon: CloudSun,

        question:
          "How much does your environment affect your wellbeing?",

        options: [
          "Very Little",
          "Moderately",
          "Strongly",
          "Extremely",
        ],
      },
    ],
  },
];