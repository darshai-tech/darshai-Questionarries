import { useState, useEffect } from "react";

import AssessmentLayout from "../../../layouts/AssessmentLayout";

import PatientSidebar from "../../../components/questionnaire/PatientSidebar";

import WellnessSectionCard from "../../../components/questionnaire/WellnessSectionCard";

import ExpandableQuestion from "../../../components/questionnaire/ExpandableQuestion";

import { lifestyleSections } from "./LifestyleHabitsData";

import { patientFlowSections } from "../../../utils/patientFlowSections";

const LifestyleHabits = ({
  onComplete,
  activeQuestion,
  onNavigate,
}) => {

  const section =
    lifestyleSections[0];

  const [answers, setAnswers] =
    useState({});

  const [openQuestion, setOpenQuestion] =
    useState(
      activeQuestion ||
      section.questions[0].id
    );

  useEffect(() => {

    if (activeQuestion) {

      setOpenQuestion(
        activeQuestion
      );
    }

  }, [activeQuestion]);

  const handleSelect = (
    questionId,
    option
  ) => {

    const updated = {
      ...answers,
      [questionId]: option,
    };

    setAnswers(updated);

    const currentIndex =
      section.questions.findIndex(
        (q) => q.id === questionId
      );

    const nextQuestion =
      section.questions[
        currentIndex + 1
      ];

    setTimeout(() => {

      if (nextQuestion) {

        setOpenQuestion(
          nextQuestion.id
        );

      } else {

        setOpenQuestion(null);
      }

    }, 350);
  };

  return (

    <AssessmentLayout
      sidebar={
        <PatientSidebar
          sections={patientFlowSections}
          activeSection="lifestyle"
          activeQuestion={openQuestion}
          answers={answers}
          onNavigate={onNavigate}
        />
      }
    >

      <WellnessSectionCard
        title="Lifestyle & Habits"
        subtitle="Tell us about your daily habits."
      >

        <div className="space-y-5">

          {section.questions.map(
            (q) => (

              <ExpandableQuestion
                key={q.id}
                icon={q.icon}
                question={q.question}
                options={q.options}
                selected={answers[q.id]}
                isOpen={
                  openQuestion === q.id
                }
                onOpen={() =>
                  setOpenQuestion(q.id)
                }
                onSelect={(option) =>
                  handleSelect(
                    q.id,
                    option
                  )
                }
              />
            )
          )}

        </div>

        <button
          onClick={() =>
            onComplete?.(answers)
          }
          className="
            w-full
            mt-10
            py-5
            rounded-2xl
            text-lg
            font-semibold
            transition-all
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            text-white
            shadow-lg
            hover:scale-[1.01]
          "
        >
          Continue
        </button>

      </WellnessSectionCard>

    </AssessmentLayout>
  );
};

export default LifestyleHabits;