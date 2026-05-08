import { useState } from "react";

import CategoryCard from "../../../components/questionnaire/CategoryCard";

import Input from "../../../components/common/Input";

import Button from "../../../components/common/Button";

import { doctorNotesFields } from "./doctorNotesData";

const DoctorNotes = ({ onComplete }) => {

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
    <CategoryCard title="Doctor Notes">

      <div className="space-y-6">

        {doctorNotesFields.map((field) => (
          <Input
            key={field.id}
            label={field.label}
            value={formData[field.id] || ""}
            onChange={(e) =>
              handleChange(
                field.id,
                e.target.value
              )
            }
            placeholder={`Enter ${field.label}`}
          />
        ))}

      </div>

      <div className="flex justify-end mt-8">

        <Button
          onClick={() =>
            onComplete?.(formData)
          }
        >
          Save Notes
        </Button>

      </div>

    </CategoryCard>
  );
};

export default DoctorNotes;