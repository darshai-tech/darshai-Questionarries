import { amaSections } from "./amaData";
import { useFormState } from "../../hooks/useFormState";
import QuestionCard from "../../components/questionnaire/QuestionCard";
import SectionHeader from "../../components/questionnaire/SectionHeader";
import CloseButton from "../../components/common/CloseButton";

// ✅ Backend scoring
const LEVELS = [
  { label: "Never", value: 0 },
  { label: "Mild", value: 1 },
  { label: "Moderate", value: 2 },
  { label: "Severe", value: 3 },
];

const Ama = ({ onComplete }) => {
  const { answers, updateAnswer } = useFormState();

  // ✅ Check all questions answered
  const isComplete = amaSections.every((section) =>
    section.questions.every(
      (q) => answers[q.id] !== undefined
    )
  );

  // ✅ Submit backend-ready format
  const handleSubmit = () => {
    /*
      FINAL OUTPUT FORMAT:

      {
        H1: 0,
        H2: 2,
        H3: 3
      }
    */

    onComplete?.(answers);
  };

  return (
    <div className="space-y-8">

      <CloseButton />

      {/* Page Title */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700">
          Ama Questionnaire
        </h1>
      </div>

      {/* Sections */}
      {amaSections.map((section, sIndex) => (
        <div key={sIndex}>

          {/* Section Header */}
          <SectionHeader title={section.title} />

          {/* Description */}
          {section.description && (
            <p className="text-gray-500 mb-6">
              {section.description}
            </p>
          )}

          {/* Questions */}
          {section.questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q.question}
            >

              {/* Severity Buttons */}
              <div className="flex flex-wrap gap-3">

                {LEVELS.map((lvl) => (
                  <button
                    key={lvl.value}
                    onClick={() =>
                      updateAnswer(q.id, lvl.value)
                    }
                    className={`px-4 py-2 rounded-xl transition shadow-sm ${
                      answers[q.id] === lvl.value
                        ? "bg-teal-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}

              </div>

            </QuestionCard>
          ))}

        </div>
      ))}

      {/* Submit Button */}
      <div className="flex justify-end pt-4">

        <button
          disabled={!isComplete}
          onClick={handleSubmit}
          className={`px-6 py-3 rounded-xl shadow-lg transition ${
            isComplete
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Finish Assessment
        </button>

      </div>

    </div>
  );
};

export default Ama;