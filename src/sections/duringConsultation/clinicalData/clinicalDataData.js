export const clinicalTabs = [
  {
    id: "medical",

    title: "Medical History",

    questions: [
      {
        id: "medical_1",

        question:
          "Have you been diagnosed with any medical condition?",

        options: [
          "Diabetes",
          "Hypertension",
          "Thyroid Disorder",
          "PCOS / PCOD",
          "None",
        ],
      },

      {
        id: "medical_2",

        question:
          "Do you currently take any medications regularly?",

        options: [
          "Yes",
          "No",
        ],
      },
    ],
  },

  {
    id: "surgeries",

    title: "Surgery History",

    questions: [
      {
        id: "surgery_1",

        question:
          "Have you undergone any surgery or hospitalization in the past?",

        options: [
          "Yes",
          "No",
        ],
      },
    ],
  },

  {
    id: "family",

    title: "Family History",

    questions: [
      {
        id: "family_1",

        question:
          "Is there any family history of chronic diseases?",

        options: [
          "Diabetes",
          "Heart Disease",
          "Cancer",
          "Autoimmune Disease",
          "None",
        ],
      },
    ],
  },
];