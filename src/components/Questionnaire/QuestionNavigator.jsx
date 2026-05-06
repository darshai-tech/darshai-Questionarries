import Button from "../common/Button";

const QuestionNavigator = ({
  onNext,
  onPrevious,
  isLastQuestion,
}) => {
  return (
    <div className="flex justify-between pt-4">
      <Button
        variant="secondary"
        onClick={onPrevious}
      >
        Previous
      </Button>

      <Button onClick={onNext}>
        {isLastQuestion
          ? "Complete Section"
          : "Next Question"}
      </Button>
    </div>
  );
};

export default QuestionNavigator;