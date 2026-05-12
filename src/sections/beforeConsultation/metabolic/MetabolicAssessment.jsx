// metabolicAssessment.js

import { useState } from "react";

import CategoryCard from "../../../components/questionnaire/CategoryCard";

import QuestionProgress from "../../../components/questionnaire/QuestionProgress";

import QuestionCard from "../../../components/questionnaire/QuestionCard";

import QuestionOption from "../../../components/questionnaire/QuestionOption";

import { metabolicSections } from "./metabolicData";

const MetabolicAssessment = ({
  onComplete,
}) => {

  const section =
    metabolicSections[0];

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [answers, setAnswers] =
    useState({});

  const currentQuestion =
    section.questions[questionIndex];

  const handleSelect = (option) => {

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: option,
    };

    setAnswers(updatedAnswers);

    const isLastQuestion =
      questionIndex ===
      section.questions.length - 1;

    if (!isLastQuestion) {

      setQuestionIndex(
        (prev) => prev + 1
      );

    } else {

      onComplete?.(
        updatedAnswers
      );
    }
  };

  return (

    <CategoryCard
      title="Metabolic Assessment"
    >

      <QuestionProgress
        current={questionIndex + 1}
        total={
          section.questions.length
        }
      />

      <QuestionCard
        question={
          currentQuestion.question
        }
        icon={
          currentQuestion.icon
        }
      >

        <div className="space-y-4">

          {currentQuestion.options.map(
            (option, index) => (

              <QuestionOption
                key={index}
                label={option}
                selected={
                  answers[
                    currentQuestion.id
                  ] === option
                }
                onClick={() =>
                  handleSelect(option)
                }
              />
            )
          )}

        </div>

      </QuestionCard>

    </CategoryCard>
  );
};

export default MetabolicAssessment;