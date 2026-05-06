import Button from "../../components/common/Button";
import CloseButton from "../../components/common/CloseButton";

const PrakritiResult = ({ data, onNext }) => {
  return (
    <div className="text-center p-8">
        <CloseButton/>
      <h2 className="text-2xl font-bold mb-4">Prakriti Result</h2>

      <pre className="bg-gray-100 p-4 rounded-xl text-left mb-6">
        {JSON.stringify(data, null, 2)}
      </pre>

      <Button onClick={onNext}>Continue to Vikriti →</Button>
    </div>
  );
};

export default PrakritiResult;