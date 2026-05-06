const Stepper = ({ steps = [], currentStep = 1 }) => {
  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((step, index) => {
        const active = currentStep >= index + 1;

        return (
          <div
            key={index}
            className="flex-1 flex items-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  font-bold
                  ${
                    active
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }
                `}
                >
                {index + 1}
              </div>

              <p className="mt-2 text-xs md:text-sm text-center text-gray-600">
                {step}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1 h-1 mx-3 rounded-full
                  ${
                    currentStep > index + 1
                      ? "bg-teal-500"
                      : "bg-gray-200"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;