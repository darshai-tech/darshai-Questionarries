import CategoryCard from "../../../components/questionnaire/CategoryCard";

import Button from "../../../components/common/Button";

const LabReportsResult = ({
  data,
  onNext,
}) => {
  return (
    <CategoryCard title="Lab Reports Summary">

      <div className="grid md:grid-cols-2 gap-5">

        {Object.entries(data).map(
          ([key, value]) => (
            <div
              key={key}
              className="
                bg-gradient-to-r
                from-teal-50
                to-emerald-50
                rounded-2xl
                p-5
                border border-teal-100
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

export default LabReportsResult;