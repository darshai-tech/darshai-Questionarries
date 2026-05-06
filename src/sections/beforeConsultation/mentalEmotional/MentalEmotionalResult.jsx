import CategoryCard from "../../../components/questionnaire/CategoryCard";
import Button from "../../../components/common/Button";

const MentalEmotionalResult = ({
  data,
  onNext,
}) => {
  return (
    <CategoryCard title="Mental & Emotional Summary">

      <div className="space-y-5">

        {Object.entries(data).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                bg-gradient-to-r
                from-teal-50
                to-emerald-50
                rounded-2xl
                border border-teal-100
                p-5
              "
            >
              <p className="text-sm text-gray-500 mb-2 capitalize">
                {key.replaceAll("_", " ")}
              </p>

              <p className="text-lg font-semibold text-gray-800">
                {value}
              </p>
            </div>
          )
        )}

      </div>

      <div className="flex justify-end mt-8">
        <Button onClick={onNext}>
          Continue →
        </Button>
      </div>

    </CategoryCard>
  );
};

export default MentalEmotionalResult;