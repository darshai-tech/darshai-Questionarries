import { useState } from "react";

export const useFormState = () => {
  const [answers, setAnswers] = useState({});

  const updateAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return { answers, updateAnswer };
};