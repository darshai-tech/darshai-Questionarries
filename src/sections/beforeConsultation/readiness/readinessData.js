import {
  CheckCircle,
  Clock,
  Wallet,
  Users,
  CalendarDays,
} from "lucide-react";

export const readinessSections = [
  {
    id: "readiness",

    title: "Readiness",

    subtitle:
      "Tell us about your readiness for change.",

    questions: [
      {
        id: "discipline",

        short: "Discipline",

        icon: CheckCircle,

        question:
          "How disciplined are you with routines?",

        options: [
          "Not Disciplined",
          "Sometimes",
          "Mostly Consistent",
          "Very Disciplined",
        ],
      },

      {
        id: "time",

        short: "Time",

        icon: Clock,

        question:
          "How much time can you dedicate daily?",

        options: [
          "<15 Minutes",
          "15–30 Minutes",
          "30–60 Minutes",
          "1+ Hour",
        ],
      },

      {
        id: "budget",

        short: "Budget",

        icon: Wallet,

        question:
          "How comfortable are you investing in your health?",

        options: [
          "Low",
          "Moderate",
          "Good",
          "High",
        ],
      },

      {
        id: "support",

        short: "Support",

        icon: Users,

        question:
          "How strong is your support system?",

        options: [
          "None",
          "Limited",
          "Moderate",
          "Strong",
        ],
      },

      {
        id: "consistency",

        short: "Routine",

        icon: CalendarDays,

        question:
          "How consistent is your daily schedule?",

        options: [
          "Very Irregular",
          "Somewhat Irregular",
          "Mostly Stable",
          "Very Stable",
        ],
      },
    ],
  },
];