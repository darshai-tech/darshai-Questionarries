import { vikritiSections } from "./vikritiData";
import { useFormState } from "../../hooks/useFormState";
import QuestionCard from "../../components/questionnaire/QuestionCard";
import SectionHeader from "../../components/questionnaire/SectionHeader";
import CloseButton from "../../components/common/CloseButton";

// ✅ Backend scoring
const OPTIONS = [
  { label: "Agree", value: 3 },
  { label: "Neutral", value: 2 },
  { label: "Disagree", value: 1 },
];

const Vikriti = ({ onComplete }) => {
  const { answers, updateAnswer } = useFormState();

  // ✅ Convert frontend answers to backend format
  const handleSubmit = () => {
    const formattedAnswers = {};

    vikritiSections.forEach((section) => {
      section.questions.forEach((q) => {
        formattedAnswers[q.id] = [
          answers[`${q.id}_VATA`] ?? 1,
          answers[`${q.id}_PITTA`] ?? 1,
          answers[`${q.id}_KAPHA`] ?? 1,
        ];
      });
    });

   

    onComplete?.(formattedAnswers);
  };

  return (
    <div className="space-y-8">

      <CloseButton />

      {/* Page Title */}
      <div className="text-center mt-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700">
          Vikriti Questionnaire
        </h1>
      </div>

      {/* Sections */}
      {vikritiSections.map((section, sIndex) => (
        <div key={sIndex}>

          {/* Section Header */}
          <SectionHeader title={section.title} />

          {/* Questions */}
          {section.questions.map((q) => (
            <QuestionCard key={q.id} question={q.question}>

              {/* Statements */}
              {q.statements.map((stmt, idx) => {
                const key = `${q.id}_${stmt.type}`;

                return (
                  <div key={idx} className="mb-6">

                    {/* Statement Text */}
                    <p className="mb-3 text-sm md:text-base text-gray-700">
                      {stmt.text}
                    </p>

                    {/* Rating Buttons */}
                    <div className="flex flex-wrap gap-3">

                      {OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => updateAnswer(key, opt.value)}
                          className={`px-4 py-2 rounded-xl transition shadow-sm ${
                            answers[key] === opt.value
                              ? "bg-teal-600 text-white"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                        >
                          {opt.label}
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

export default Vikriti;