import {
  Moon,
  Dumbbell,
  Brain,
  Apple,
  Droplets,
} from "lucide-react";

export const lifestyleSections = [
  {
    id: "lifestyle",

    title: "Lifestyle & Habits",

    questions: [

      {
        id: "sleep",

        short: "Sleep",

        icon: Moon,

        question:
          "How would you describe your sleep quality?",

        options: [
          "Deep & Refreshing",
          "Light Sleep",
          "Disturbed Sleep",
        ],
      },

      {
        id: "exercise",

        short: "Exercise",

        icon: Dumbbell,

        question:
          "How active are you physically?",

        options: [
          "Low Activity",
          "Moderate",
          "Highly Active",
        ],
      },

      {
        id: "stress",

        short: "Stress",

        icon: Brain,

        question:
          "Tell us about your stress levels",

        options: [
          "Rare",
          "Sometimes",
          "Frequent",
        ],
      },

      {
        id: "food",

        short: "Food",

        icon: Apple,

        question:
          "How healthy are your eating habits?",

        options: [
          "Very Healthy",
          "Moderate",
          "Needs Improvement",
        ],
      },

      {
        id: "hydration",

        short: "Hydration",

        icon: Droplets,

        question:
          "How much water do you drink daily?",

        options: [
          "Less than 1L",
          "1–2 Litres",
          "More than 3L",
        ],
      },
    ],
  },
];