import CategoryCard from "../../../components/questionnaire/CategoryCard";

import Button from "../../../components/common/Button";

const ClinicalResult = ({
  data,
  onNext,
}) => {
  return (
    <CategoryCard title="Clinical Summary">

      <div className="space-y-5">

        {Object.entries(data).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                bg-gray-50
                border border-gray-100
                rounded-2xl
                p-5
              "
            >
              <p className="text-sm text-gray-500 mb-2">
                {key.replaceAll("_", " ")}
              </p>

              <p className="font-semibold text-lg">
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

export default ClinicalResult;