import { useState } from "react";

import CategoryCard
  from "../../../components/questionnaire/CategoryCard";

import QuestionTabs
  from "../../../components/questionnaire/QuestionTabs";

import QuestionProgress
  from "../../../components/questionnaire/QuestionProgress";

import QuestionCard
  from "../../../components/questionnaire/QuestionCard";

import QuestionOption
  from "../../../components/questionnaire/QuestionOption";

import { burnoutTabs }
  from "./BurnoutData";

const BurnoutAssessment = ({
  onComplete,
}) => {

  const [activeTab, setActiveTab] =
    useState(
      burnoutTabs[0].id
    );

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [answers, setAnswers] =
    useState({});

  const currentTab =
    burnoutTabs.find(
      (tab) =>
        tab.id === activeTab
    );

  const currentQuestion =
    currentTab.questions[
      questionIndex
    ];

  const handleSelect = (
    option
  ) => {

    const updatedAnswers = {
      ...answers,

      [currentQuestion.id]:
        option,
    };

    setAnswers(updatedAnswers);

    const isLastQuestion =
      questionIndex ===
      currentTab.questions.length - 1;

    if (!isLastQuestion) {

      setQuestionIndex(
        (prev) => prev + 1
      );

    } else {

      const currentTabIndex =
        burnoutTabs.findIndex(
          (tab) =>
            tab.id === activeTab
        );

      const isLastTab =
        currentTabIndex ===
        burnoutTabs.length - 1;

      if (!isLastTab) {

        setActiveTab(
          burnoutTabs[
            currentTabIndex + 1
          ].id
        );

        setQuestionIndex(0);

      } else {

        onComplete?.(
          updatedAnswers
        );
      }
    }
  };

  return (

    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#F4F7F5]
        via-[#EEF5F0]
        to-[#E5F5EC]
        p-8
      "
    >

      <CategoryCard
        title="Burnout Clinical Assessment"
        subtitle="Internal Clinical Scoring System"
      >

        {/* TABS */}
        <QuestionTabs
          tabs={burnoutTabs.map(
            (tab) =>
              tab.title
          )}

          activeTab={
            currentTab.title
          }

          setActiveTab={(
            title
          ) => {

            const selected =
              burnoutTabs.find(
                (tab) =>
                  tab.title ===
                  title
              );

            setActiveTab(
              selected.id
            );

            setQuestionIndex(0);
          }}
        />

        {/* PROGRESS */}
        <QuestionProgress
          current={
            burnoutTabs.findIndex(
              (tab) =>
                tab.id ===
                activeTab
            ) + 1
          }

          total={
            burnoutTabs.length
          }
        />

        {/* QUESTION */}
        <QuestionCard
          question={
            currentQuestion.question
          }

          subtitle={
            currentQuestion.subtitle
          }
        >

          <div className="space-y-4">

            {currentQuestion.options.map(
              (
                option,
                index
              ) => (

                <QuestionOption
                  key={index}

                  label={
                    option.label
                  }

                  selected={
                    answers[
                      currentQuestion
                        .id
                    ]?.label ===
                    option.label
                  }

                  onClick={() =>
                    handleSelect(
                      option
                    )
                  }
                />
              )
            )}

          </div>

        </QuestionCard>

      </CategoryCard>

    </div>
  );
};

export default BurnoutAssessment;