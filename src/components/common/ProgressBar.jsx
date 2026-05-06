const ProgressBar = ({ currentStep = 1, totalSteps = 4 }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2 text-sm text-gray-500">
        <span>Assessment Progress</span>
        <span>
          {currentStep} / {totalSteps}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          style={{ width: `${percentage}%` }}
          className="
            h-full
            bg-gradient-to-r from-teal-500 to-emerald-500
            rounded-full
            transition-all duration-500
          "
        />
      </div>
    </div>
  );
};

export default ProgressBar;