export const burnoutTabs = [

  {
    id: "sleep",

    title: "Sleep",

    questions: [
      {
        id: "sleep_quality",

        question:
          "How would you describe your sleep quality?",

        subtitle:
          "Burnout Recovery Assessment",

        score: 20,

        options: [
          "7-8 Hrs (Deep Sleep)",
          "5-6 Hrs (Light Sleep)",
          "<5 Hrs (Disturbed)",
        ],
      },
    ],
  },

  {
    id: "hrv",

    title: "HRV",

    questions: [
      {
        id: "hrv_level",

        question:
          "How is your Heart Rate Variability (HRV)?",

        subtitle:
          "Autonomic Nervous System Balance",

        score: 20,

        options: [
          "High",
          "Normal",
          "Low",
        ],
      },
    ],
  },

  {
    id: "rhr",

    title: "RHR",

    questions: [
      {
        id: "resting_hr",

        question:
          "What is your Resting Heart Rate?",

        subtitle:
          "Cardiovascular Recovery Indicator",

        score: 20,

        options: [
          "50–65 bpm",
          "66–80 bpm",
          ">80 bpm",
        ],
      },
    ],
  },

  {
    id: "stress",

    title: "Stress",

    questions: [
      {
        id: "stress_level",

        question:
          "How would you describe your stress levels?",

        subtitle:
          "Mental Burnout Analysis",

        score: 15,

        options: [
          "Manageable",
          "Frequent",
          "Overwhelming",
        ],
      },
    ],
  },

  {
    id: "energy",

    title: "Energy",

    questions: [
      {
        id: "energy_level",

        question:
          "How are your daily energy levels?",

        subtitle:
          "Fatigue & Vitality Tracking",

        score: 15,

        options: [
          "High & Stable",
          "Fluctuating",
          "Low / Fatigued",
        ],
      },
    ],
  },

  {
    id: "mood",

    title: "Mood",

    questions: [
      {
        id: "mood_stability",

        question:
          "How stable is your mood generally?",

        subtitle:
          "Emotional Recovery Indicator",

        score: 10,

        options: [
          "Stable",
          "Mild Swings",
          "Frequent Swings",
        ],
      },
    ],
  },
];