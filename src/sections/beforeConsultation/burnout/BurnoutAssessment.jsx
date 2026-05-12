import {
  useState,
  useEffect,
} from "react";

import AssessmentLayout from "../../../layouts/AssessmentLayout";

import PatientSidebar from "../../../components/questionnaire/PatientSidebar";

import WellnessSectionCard from "../../../components/questionnaire/WellnessSectionCard";

import ExpandableQuestion from "../../../components/questionnaire/ExpandableQuestion";

import { burnoutTabs } from "./burnoutData";

import { patientFlowSections } from "../../../utils/patientFlowSections";

const BurnoutAssessment = ({
  onComplete,
  activeQuestion,
  onNavigate,
}) => {

  const section =
    burnoutTabs[0];

  const [answers, setAnswers] =
    useState({});

  const [openQuestion, setOpenQuestion] =
    useState(
      activeQuestion ||
      section.questions[0].id
    );

  /* SIDEBAR SYNC */
  useEffect(() => {

    if (activeQuestion) {

      setOpenQuestion(
        activeQuestion
      );
    }

  }, [activeQuestion]);

  /* SELECT */
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

    }, 300);
  };

  return (

    <AssessmentLayout
      sidebar={
        <PatientSidebar
          sections={patientFlowSections}
          activeSection="burnout"
          activeQuestion={openQuestion}
          answers={answers}
          onNavigate={onNavigate}
        />
      }
    >

      <WellnessSectionCard
        title="Burnout Assessment"
        subtitle="Evaluate stress, recovery, and nervous system fatigue."
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

        {/* CONTINUE */}
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

            bg-gradient-to-r
            from-green-600
            to-emerald-500

            text-white

            shadow-lg

            hover:scale-[1.01]
            transition-all
          "
        >
          Continue
        </button>

      </WellnessSectionCard>

    </AssessmentLayout>
  );
};

export default BurnoutAssessment;