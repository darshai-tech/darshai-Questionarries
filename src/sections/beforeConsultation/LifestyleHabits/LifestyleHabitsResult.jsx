import CategoryCard from "../../../components/questionnaire/CategoryCard";
import Button from "../../../components/common/Button";

const LifestyleHabitsResult = ({
  data,
  onNext,
}) => {
  return (
    <CategoryCard title="Lifestyle Habits Summary">

      <div className="grid md:grid-cols-2 gap-5">

        {Object.entries(data).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                bg-white
                border border-gray-100
                rounded-2xl
                shadow-sm
                p-5
              "
            >
              <p className="text-sm text-gray-500 mb-2 capitalize">
                {key.replaceAll("_", " ")}
              </p>

              <p className="text-lg font-bold text-teal-700">
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

export default LifestyleHabitsResult;