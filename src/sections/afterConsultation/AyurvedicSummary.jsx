import Card from "../../components/common/Card";

const AyurvedicSummary = ({ data }) => {

  const prakriti = data?.prakriti || {};

  const vikriti = data?.vikriti || {};

  const agni = data?.agni || {};

  const ama = data?.ama || {};

  return (
    <Card>

      <div className="space-y-8">

        <div>
          <h2 className="text-3xl font-bold text-teal-700">
            Ayurvedic Assessment Summary
          </h2>

          <p className="text-gray-500 mt-2">
            Consolidated overview of constitutional
            assessment and imbalance indicators.
          </p>
        </div>

        {/* PRAKRITI */}
        <div className="bg-teal-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold text-teal-700 mb-4">
            Prakriti
          </h3>

          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(prakriti, null, 2)}
          </pre>

        </div>

        {/* VIKRITI */}
        <div className="bg-orange-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold text-orange-700 mb-4">
            Vikriti
          </h3>

          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(vikriti, null, 2)}
          </pre>

        </div>

        {/* AGNI */}
        <div className="bg-yellow-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold text-yellow-700 mb-4">
            Agni
          </h3>

          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(agni, null, 2)}
          </pre>

        </div>

        {/* AMA */}
        <div className="bg-red-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold text-red-700 mb-4">
            Ama
          </h3>

          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
            {JSON.stringify(ama, null, 2)}
          </pre>

        </div>

      </div>

    </Card>
  );
};

export default AyurvedicSummary;