export const useScoreCalculator = () => {
  const calculate = (answers) => {
    let score = { VATA: 0, PITTA: 0, KAPHA: 0 };

    Object.values(answers).forEach((v) => {
      if (score[v] !== undefined) score[v]++;
    });

    return score;
  };

  return { calculate };
};