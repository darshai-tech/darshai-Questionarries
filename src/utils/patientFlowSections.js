import { selfAssessmentSections } from "../sections/beforeConsultation/selfAssessment/selfAssessmentData";

import { lifestyleSections } from "../sections/beforeConsultation/LifestyleHabits/LifestyleHabitsData";

import { mentalEmotionalSections } from "../sections/beforeConsultation/mentalEmotional/mentalEmotionalData";

import { readinessSections } from "../sections/beforeConsultation/readiness/readinessData";

export const patientFlowSections = [

  {
    id: "selfAssessment",

    title: "Self Assessment",

    questions:
      selfAssessmentSections[0]
        .questions,
  },

  {
    id: "lifestyle",

    title:
      "Lifestyle & Habits",

    questions:
      lifestyleSections[0]
        .questions,
  },

  {
    id: "mentalEmotional",

    title:
      "Mental & Emotional",

    questions:
      mentalEmotionalSections[0]
        .questions,
  },

  {
    id: "readiness",

    title: "Readiness",

    questions:
      readinessSections[0]
        .questions,
  },
];