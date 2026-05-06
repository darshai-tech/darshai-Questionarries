import { useState } from "react";
import Prakriti from "../sections/prakriti/Prakriti";
import Vikriti from "../sections/vikriti/Vikriti";
import Agni from "../sections/agni/Agni";
import Ama from "../sections/ama/Ama";
import ProgressBar from "../components/common/ProgressBar";

// Result components (we'll define below)
import PrakritiResult from "../sections/prakriti/PrakritiResult";
import VikritiResult from "../sections/vikriti/VikritiResult";
import AgniResult from "../sections/agni/AgniResult";
import AmaResult from "../sections/ama/AmaResult";
import FinalResult from "./FinalResult";
import CloseButton from "../components/common/CloseButton";

const Assessment = () => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    prakriti: {},
    vikriti: {},
    agni: {},
    ama: {},
  });

  const handleNext = (section, values) => {
    setData((prev) => ({
      ...prev,
      [section]: values,
    }));

    setStep((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <CloseButton />

      <ProgressBar step={Math.ceil(step / 2)} />

      {/* PRAKRITI */}
      {step === 1 && (
        <Prakriti onComplete={(d) => handleNext("prakriti", d)} />
      )}
      {step === 2 && (
        <PrakritiResult
          data={data.prakriti}
          onNext={() => setStep(3)}
        />
      )}

      {/* VIKRITI */}
      {step === 3 && (
        <Vikriti onComplete={(d) => handleNext("vikriti", d)} />
      )}
      {step === 4 && (
        <VikritiResult
          data={data.vikriti}
          onNext={() => setStep(5)}
        />
      )}

      {/* AGNI */}
      {step === 5 && (
        <Agni onComplete={(d) => handleNext("agni", d)} />
      )}
      {step === 6 && (
        <AgniResult
          data={data.agni}
          onNext={() => setStep(7)}
        />
      )}

      {/* AMA */}
      {step === 7 && (
        <Ama onComplete={(d) => handleNext("ama", d)} />
      )}
      {step === 8 && (
        <AmaResult
          data={data.ama}
          onNext={() => setStep(9)}
        />
      )}

      {/* FINAL */}
      {step === 9 && <FinalResult data={data} />}

    </div>
  );
};

export default Assessment;