import Card from "../../components/common/Card";

const LifestyleSummary = ({ lifestyleData }) => {

  return (
    <Card>

      <div className="space-y-6">

        <div>
          <h2 className="text-3xl font-bold text-emerald-700">
            Lifestyle Summary
          </h2>

          <p className="text-gray-500 mt-2">
            Daily habits, food pattern,
            sleep, stress and physical activity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {Object.entries(lifestyleData || {}).map(
            ([key, value]) => (

              <div
                key={key}
                className="
                  bg-emerald-50
                  rounded-2xl
                  p-5
                "
              >

                <p className="text-sm text-emerald-700 capitalize">
                  {key.replaceAll("_", " ")}
                </p>

                <p className="text-lg font-semibold text-gray-800 mt-2">
                  {value?.toString()}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </Card>
  );
};

export default LifestyleSummary;