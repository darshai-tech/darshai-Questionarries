import Card from "../../components/common/Card";

import Button from "../../components/common/Button";

const BasicDetailsResult = ({
  data,
  onNext,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-4 py-10">

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-800">
            Basic Details Summary
          </h1>

          <p className="text-gray-500 mt-3">
            Please verify the patient details before proceeding.
          </p>

        </div>

        {/* Summary Card */}
        <Card>

          <div className="grid md:grid-cols-2 gap-6">

            {Object.entries(data).map(
              ([key, value]) => (

                <div
                  key={key}
                  className="
                    bg-gray-50
                    rounded-2xl
                    p-5
                    border border-gray-100
                  "
                >

                  <p className="text-sm text-gray-500 capitalize mb-2">
                    {key.replaceAll("_", " ")}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    {value}
                  </p>

                </div>
              )
            )}

          </div>

          {/* Footer */}
          <div className="flex justify-end mt-10">

            <Button onClick={onNext}>
              Continue Assessment →
            </Button>

          </div>

        </Card>

      </div>

    </div>
  );
};

export default BasicDetailsResult;