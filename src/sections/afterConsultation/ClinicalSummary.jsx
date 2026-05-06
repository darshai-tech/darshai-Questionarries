import Card from "../../components/common/Card";

const ClinicalSummary = ({ clinicalData }) => {

  return (
    <Card>

      <div className="space-y-6">

        <div>
          <h2 className="text-3xl font-bold text-blue-700">
            Clinical Summary
          </h2>

          <p className="text-gray-500 mt-2">
            Medical history, diagnosis,
            medications, surgeries and
            clinical observations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {Object.entries(clinicalData || {}).map(
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

                <p className="text-sm text-gray-500 capitalize">
                  {key.replaceAll("_", " ")}
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-2">
                  {Array.isArray(value)
                    ? value.join(", ")
                    : value?.toString()}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </Card>
  );
};

export default ClinicalSummary;