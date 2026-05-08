import {
  Target,
  Heart,
  Activity,
  Brain,
  Sparkles,
} from "lucide-react";

export const selfAssessmentSections = [
  {
    id: "selfAssessment",

    title: "Self Assessment",

    subtitle:
      "Tell us about your wellness goals.",

    questions: [
      {
        id: "goal",

        short: "Goals",

        icon: Target,

        question:
          "What is your primary health goal?",

        options: [
          "Weight Loss",
          "Improve Digestion",
          "Increase Energy",
          "Stress Reduction",
          "Hormonal Balance",
        ],
      },

      {
        id: "energy",

        short: "Energy",

        icon: Activity,

        question:
          "How would you describe your daily energy?",

        options: [
          "Very Low",
          "Moderate",
          "Good",
          "High & Stable",
        ],
      },

      {
        id: "stress2",

        short: "Stress",

        icon: Brain,

        question:
          "How stressed do you feel currently?",

        options: [
          "Low",
          "Moderate",
          "High",
          "Very High",
        ],
      },

      {
        id: "motivation",

        short: "Motivation",

        icon: Sparkles,

        question:
          "How motivated are you to improve your health?",

        options: [
          "Not Sure",
          "Somewhat Motivated",
          "Motivated",
          "Highly Committed",
        ],
      },

      {
        id: "wellbeing",

        short: "Wellbeing",

        icon: Heart,

        question:
          "How satisfied are you with your current health?",

        options: [
          "Not Satisfied",
          "Average",
          "Good",
          "Excellent",
        ],
      },
    ],
  },
];