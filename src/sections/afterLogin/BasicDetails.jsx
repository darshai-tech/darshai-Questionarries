import { useState } from "react";

import Card from "../../components/common/Card";

import Input from "../../components/common/Input";

import Select from "../../components/common/Select";

import Button from "../../components/common/Button";

import ProgressBar from "../../components/common/ProgressBar";

import CloseButton from "../../components/common/CloseButton";

import { basicDetailsFields } from "./basicDetailsData";

const BasicDetails = ({ onComplete }) => {

  const [formData, setFormData] = useState({});

  const handleChange = (
    id,
    value
  ) => {

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 px-4 py-10">

      <div className="max-w-4xl mx-auto space-y-8">

        <CloseButton />

        {/* Header */}
        <div className="text-center">

          <h1 className="text-4xl font-bold text-gray-800">
            Patient Basic Details
          </h1>

          <p className="text-gray-500 mt-3">
            Please provide your personal details to begin the assessment.
          </p>

        </div>

        {/* Progress */}
        <ProgressBar
          currentStep={1}
          totalSteps={4}
        />

        {/* Form Card */}
        <Card>

          <div className="grid md:grid-cols-2 gap-6">

            {basicDetailsFields.map((field) => (

              <div key={field.id}>

                {field.type === "select" ? (

                  <Select
                    label={field.label}
                    value={formData[field.id] || ""}
                    onChange={(e) =>
                      handleChange(
                        field.id,
                        e.target.value
                      )
                    }
                    options={field.options.map(
                      (option) => ({
                        label: option,
                        value: option,
                      })
                    )}
                  />

                ) : (

                  <Input
                    label={field.label}
                    type={field.type}
                    value={formData[field.id] || ""}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      handleChange(
                        field.id,
                        e.target.value
                      )
                    }
                  />

                )}

              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="flex justify-end mt-10">

            <Button
              onClick={() =>
                onComplete?.(formData)
              }
            >
              Continue →
            </Button>

          </div>

        </Card>

      </div>

    </div>
  );
};

export default BasicDetails;