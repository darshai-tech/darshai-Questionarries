const QuestionProgress = ({
  current,
  total,
}) => {

  const percent =
    (current / total) * 100;

  return (

    <div className="mb-8">

      <div className="flex justify-between mb-3 text-gray-600">

        <span>
          Question {current} of {total}
        </span>

        <span>
          {Math.round(percent)}%
        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full">

        <div
          style={{
            width: `${percent}%`,
          }}
          className="h-3 bg-green-600 rounded-full"
        />

      </div>

    </div>
  );
};

export default QuestionProgress;