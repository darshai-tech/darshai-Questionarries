const QuestionProgress = ({
  current,
  total,
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-500">
        <p>
          Question {current} of {total}
        </p>

        <p>{Math.round(percentage)}%</p>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="
            h-full
            bg-gradient-to-r
            from-teal-500
            to-emerald-500
            transition-all duration-500
          "
        />
      </div>
    </div>
  );
};

export default QuestionProgress;