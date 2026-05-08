const QuestionOption = ({
  label,
  selected,
  onClick,
}) => {

  return (

    <button
      onClick={onClick}
      className={`w-full p-5 rounded-2xl border transition text-left text-lg font-medium ${
        selected
          ? "bg-green-700 text-white border-green-700"
          : "bg-white border-gray-200 hover:border-green-400"
      }`}
    >
      {label}
    </button>
  );
};

export default QuestionOption;