import Card from "../common/Card";

const QuestionCard = ({ question, children }) => {
  return (
    <Card>
      <h3 className="font-semibold mb-4">{question}</h3>
      {children}
    </Card>
  );
};

export default QuestionCard;