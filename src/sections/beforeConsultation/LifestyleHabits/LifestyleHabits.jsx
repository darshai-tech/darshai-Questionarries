import { useState } from "react";

import CategoryCard from "../../../components/questionnaire/CategoryCard";
import QuestionTabs from "../../../components/questionnaire/QuestionTabs";
import QuestionProgress from "../../../components/questionnaire/QuestionProgress";
import QuestionCard from "../../../components/questionnaire/QuestionCard";
import QuestionOption from "../../../components/questionnaire/QuestionOption";

import { lifestyleTabs } from "./lifestyleHabitsData";

const LifestyleHabits = ({ onComplete }) => {

  const [activeTab, setActiveTab] = useState(
    lifestyleTabs[0].id
  );

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [answers, setAnswers] = useState({});

  const currentTab = lifestyleTabs.find(
    (tab) => tab.id === activeTab
  );

  const currentQuestion =
    currentTab.questions[questionIndex];

  const handleSelect = (option) => {

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));

    const isLastQuestion =
      questionIndex ===
      currentTab.questions.length - 1;

    if (!isLastQuestion) {
      setQuestionIndex((prev) => prev + 1);

    } else {

      const currentTabIndex =
        lifestyleTabs.findIndex(
          (tab) => tab.id === activeTab
        );

      const isLastTab =
        currentTabIndex ===
        lifestyleTabs.length - 1;

      if (!isLastTab) {

        setActiveTab(
          lifestyleTabs[currentTabIndex + 1].id
        );

        setQuestionIndex(0);

      } else {
        onComplete?.(answers);
      }
    }
  };

  return (
    <CategoryCard title="Lifestyle & Daily Habits">

      <QuestionTabs
        tabs={lifestyleTabs.map(
          (tab) => tab.title
        )}
        activeTab={currentTab.title}
        setActiveTab={(title) => {

          const selected =
            lifestyleTabs.find(
              (tab) => tab.title === title
            );

          setActiveTab(selected.id);
          setQuestionIndex(0);
        }}
      />

      <QuestionProgress
        current={questionIndex + 1}
        total={currentTab.questions.length}
      />

      <QuestionCard
        question={currentQuestion.question}
      >
        <div className="space-y-4">

          {currentQuestion.options.map(
            (option, index) => (
              <QuestionOption
                key={index}
                label={option}
                selected={
                  answers[currentQuestion.id] ===
                  option
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

export default LifestyleHabits;