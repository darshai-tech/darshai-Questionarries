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
          {
            label:
              "7-8 Hrs (Deep Sleep)",

            value: 3,
          },

          {
            label:
              "5-6 Hrs (Light Sleep)",

            value: 2,
          },

          {
            label:
              "<5 Hrs (Disturbed)",

            value: 1,
          },
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
          {
            label: "High",

            value: 3,
          },

          {
            label: "Normal",

            value: 2,
          },

          {
            label: "Low",

            value: 1,
          },
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
          {
            label: "50–65 bpm",

            value: 3,
          },

          {
            label: "66–80 bpm",

            value: 2,
          },

          {
            label: ">80 bpm",

            value: 1,
          },
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
          {
            label: "Manageable",

            value: 3,
          },

          {
            label: "Frequent",

            value: 2,
          },

          {
            label: "Overwhelming",

            value: 1,
          },
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
          {
            label:
              "High & Stable",

            value: 3,
          },

          {
            label:
              "Fluctuating",

            value: 2,
          },

          {
            label:
              "Low / Fatigued",

            value: 1,
          },
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
          {
            label: "Stable",

            value: 3,
          },

          {
            label:
              "Mild Swings",

            value: 2,
          },

          {
            label:
              "Frequent Swings",

            value: 1,
          },
        ],
      },
    ],
  },
];