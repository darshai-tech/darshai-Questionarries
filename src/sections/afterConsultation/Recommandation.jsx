import Card from "../../components/common/Card";

const recommendations = [
  "Improve sleep consistency and reduce late-night screen exposure.",

  "Follow a structured meal timing routine for digestive balance.",

  "Introduce daily breathwork and meditation practice.",

  "Increase outdoor sunlight exposure and reduce sedentary work hours.",

  "Reduce processed food and increase hydration levels.",
];

const Recommandation = () => {

  return (
    <Card>

      <div className="space-y-8">

        <div>
          <h2 className="text-3xl font-bold text-teal-700">
            Personalised Recommendations
          </h2>

          <p className="text-gray-500 mt-2">
            Suggested lifestyle and wellness improvements.
          </p>
        </div>

        <div className="space-y-4">

          {recommendations.map((item, index) => (

            <div
              key={index}
              className="
                flex gap-4
                items-start
                bg-teal-50
                p-5
                rounded-2xl
              "
            >

              <div
                className="
                  w-8 h-8
                  rounded-full
                  bg-teal-600
                  text-white
                  flex items-center justify-center
                  font-bold
                "
              >
                {index + 1}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {item}
              </p>

            </div>
          ))}

        </div>

      </div>

    </Card>
  );
};

export default Recommandation;