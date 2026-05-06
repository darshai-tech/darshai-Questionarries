import Card from "../../components/common/Card";

const scores = [
  {
    label: "Ayurvedic Balance",
    value: 78,
  },

  {
    label: "Metabolic Health",
    value: 64,
  },

  {
    label: "Digestive Health",
    value: 72,
  },

  {
    label: "Mental Wellness",
    value: 68,
  },
];

const HealthScore = () => {

  return (
    <Card>

      <div className="space-y-8">

        <div>
          <h2 className="text-3xl font-bold text-purple-700">
            Health Score Dashboard
          </h2>

          <p className="text-gray-500 mt-2">
            Combined wellness scoring system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {scores.map((item, index) => (

            <div
              key={index}
              className="
                bg-purple-50
                rounded-2xl
                p-6
                text-center
              "
            >

              <h3 className="text-lg font-semibold text-gray-700">
                {item.label}
              </h3>

              <div className="mt-4 text-5xl font-bold text-purple-700">
                {item.value}
              </div>

              <p className="mt-2 text-gray-500">
                out of 100
              </p>

            </div>
          ))}

        </div>

      </div>

    </Card>
  );
};

export default HealthScore;