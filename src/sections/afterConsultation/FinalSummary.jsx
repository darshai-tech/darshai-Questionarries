import AyurvedicSummary from "./AyurvedicSummary";

import ClinicalSummary from "./ClinicalSummary";

import LifestyleSummary from "./LifestyleSummary";

import RiskSummary from "./RiskSummary";

import HealthScore from "./HealthScore";

import Recommandation from "./Recommandation";

import Button from "../../components/common/Button";

import CloseButton from "../../components/common/CloseButton";

const FinalSummary = ({
  data,
  onFinish,
}) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 px-4 py-10">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Final Consultation Summary
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Complete patient wellness overview
            generated from assessments,
            clinical data and lifestyle analysis.
          </p>
 <CloseButton/>
        </div>

        {/* Ayurvedic */}
        <AyurvedicSummary
          data={data}
        />

        {/* Clinical */}
        <ClinicalSummary
          clinicalData={data?.clinicalData}
        />

        {/* Lifestyle */}
        <LifestyleSummary
          lifestyleData={data?.lifestyleData}
        />

        {/* Risk */}
        <RiskSummary />

        {/* Health */}
        <HealthScore />

        {/* Recommendation */}
        <Recommandation />

        {/* Footer */}
        <div className="flex justify-center pt-8">

          <Button onClick={onFinish}>
            Complete Assessment
          </Button>

        </div>

      </div>

    </div>
  );
};

export default FinalSummary;