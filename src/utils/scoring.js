export const getDominant = (score) => {
  return Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );
};