const QuestionCard = ({
  question,
  children,
}) => {
  return (
    <div
      className="
        bg-gray-50
        border border-gray-100
        rounded-2xl
        p-6
        space-y-5
      "
    >
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
        {question}
      </h3>

      {children}
    </div>
  );
};

export default QuestionCard;