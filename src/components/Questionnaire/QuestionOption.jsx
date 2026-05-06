const QuestionOption = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left
        px-5 py-4 rounded-2xl
        border transition-all duration-300
        ${
          selected
            ? "bg-teal-600 text-white border-teal-600 shadow-lg"
            : "bg-white border-gray-200 hover:border-teal-400"
        }
      `}
    >
      {label}
    </button>
  );
};

export default QuestionOption;