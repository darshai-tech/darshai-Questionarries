import { agniSections } from "./agniData";
import { useFormState } from "../../hooks/useFormState";
import QuestionCard from "../../components/questionnaire/QuestionCard";
import SectionHeader from "../../components/questionnaire/SectionHeader";
import CloseButton from "../../components/common/CloseButton";

// ✅ Backend scoring format
const SCALE = [
  { label: "Not at all", value: 0 },
  { label: "Mild", value: 1 },
  { label: "Moderate", value: 2 },
  { label: "Strong", value: 3 },
];

const Agni = ({ onComplete }) => {
  const { answers, updateAnswer } = useFormState();

  // ✅ Convert frontend data to backend format
  const handleSubmit = () => {
    const formattedAnswers = {};

    agniSections.forEach((section) => {
      section.questions.forEach((q) => {
        formattedAnswers[q.id] = {
          vishama: answers[`${q.id}_vishama`] ?? 0,
          tikshna: answers[`${q.id}_tikshna`] ?? 0,
          manda: answers[`${q.id}_manda`] ?? 0,
        };
      });
    });

    /*
      FINAL OUTPUT FORMAT:

      {
        G1: {
          vishama: 2,
          tikshna: 1,
          manda: 0
        }
      }
    */

    onComplete?.(formattedAnswers);
  };

  return (
    <div className="space-y-8">

      <CloseButton />

      {/* Page Title */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700">
          Agni Questionnaire
        </h1>
      </div>

      {/* Sections */}
      {agniSections.map((section, sIndex) => (
        <div key={sIndex}>

          {/* Section Header */}
          <SectionHeader title={section.title} />

          {/* Questions */}
          {section.questions.map((q) => (
            <QuestionCard key={q.id} question={q.question}>

              {/* Patterns */}
              {q.patterns.map((pattern, idx) => {
                const key = `${q.id}_${pattern.type}`;

                return (
                  <div key={idx} className="mb-6">

                    {/* Pattern Text */}
                    <p className="mb-3 text-sm md:text-base text-gray-700">
                      {pattern.text}
                    </p>

                    {/* Rating Buttons */}
                    <div className="flex flex-wrap gap-3">

                      {SCALE.map((level) => (
                        <button
                          key={level.value}
                          onClick={() =>
                            updateAnswer(key, level.value)
                          }
                          className={`px-4 py-2 rounded-xl transition shadow-sm ${
                            answers[key] === level.value
                              ? "bg-teal-600 text-white"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                        >
                          {level.label}
                        </button>
                      ))}

                    </div>

                  </div>
                );
              })}

            </QuestionCard>
          ))}

        </div>
      ))}

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <button
          className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-xl shadow-lg"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Agni;