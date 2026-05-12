// lifestyleHabitsData.js

import {
  CalendarDays,
  Briefcase,
  CheckCircle2,
  Plane,
  Users,
} from "lucide-react";

export const lifestyleHabitSections = [
  {
    id: "lifestyleHabits",

    title:
      "Lifestyle & Compliance Assessment",

    subtitle:
      "Understand your routine, consistency, workload, and ability to follow wellness protocols.",

    questions: [
      {
        id: "routineStability",

        icon: CalendarDays,

        question:
          "How stable is your daily routine?",

        weight: 25,

        options: [
          "Stable",
          "Variable",
          "Irregular",
        ],
      },

      {
        id: "workload",

        icon: Briefcase,

        question:
          "How would you describe your workload and intensity?",

        weight: 20,

        options: [
          "Low",
          "Moderate",
          "High",
        ],
      },

      {
        id: "protocolCompliance",

        icon: CheckCircle2,

        question:
          "How willing are you to follow a wellness protocol consistently?",

        weight: 25,

        options: [
          "High",
          "Moderate",
          "Low",
        ],
      },

      {
        id: "travelSchedule",

        icon: Plane,

        question:
          "How irregular is your travel or work schedule?",

        weight: 15,

        options: [
          "Rare",
          "Occasional",
          "Frequent",
        ],
      },

      {
        id: "supportSystem",

        icon: Users,

        question:
          "How strong is your support system?",

        weight: 15,

        options: [
          "Strong",
          "Limited",
          "None",
        ],
      },
    ],
  },
];