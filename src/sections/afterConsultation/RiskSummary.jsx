import Card from "../../components/common/Card";

const riskData = [
  {
    title: "Burnout Risk",
    score: 72,
    color: "bg-red-500",
  },

  {
    title: "Digestive Risk",
    score: 58,
    color: "bg-orange-500",
  },

  {
    title: "Metabolic Risk",
    score: 42,
    color: "bg-yellow-500",
  },

  {
    title: "Inflammation Risk",
    score: 66,
    color: "bg-pink-500",
  },

  {
    title: "Lifestyle Risk",
    score: 49,
    color: "bg-blue-500",
  },
];

const RiskSummary = () => {

  return (
    <Card>

      <div className="space-y-8">

        <div>
          <h2 className="text-3xl font-bold text-red-700">
            Risk Summary
          </h2>

          <p className="text-gray-500 mt-2">
            Overall risk indicators derived
            from questionnaire and clinical data.
          </p>
        </div>

        <div className="space-y-5">

          {riskData.map((risk, index) => (

            <div key={index}>

              <div className="flex justify-between mb-2">

                <h3 className="font-semibold text-gray-700">
                  {risk.title}
                </h3>

                <span className="font-bold text-gray-700">
                  {risk.score}%
                </span>

              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">

                <div
                  className={`${risk.color} h-full rounded-full`}
                  style={{
                    width: `${risk.score}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </Card>
  );
};

export default RiskSummary;