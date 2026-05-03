import Prakriti from "../sections/prakriti/Prakriti";
import SectionHeader from "../components/questionnaire/SectionHeader";
import ProgressBar from "../components/common/ProgressBar";

const Assessment = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <ProgressBar step={1} />

      <SectionHeader title="Prakriti" />

      <Prakriti />
    </div>
  );
};

export default Assessment;