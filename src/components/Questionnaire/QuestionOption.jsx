const QuestionOption = ({
  label,
  selected,
  onClick,
}) => {

  const optionLabel =
    typeof label === "object"
      ? label.label
      : label;

  return (

    <button
      onClick={onClick}
      className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left text-lg font-medium ${
        selected
          ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white border-green-500 shadow-lg shadow-green-200"
          : "bg-white border-gray-200 hover:border-green-400 hover:bg-green-50"
      }`}
    >
      {optionLabel}
    </button>
  );
};

export default QuestionOption;