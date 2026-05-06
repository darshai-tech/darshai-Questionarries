import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Ayurvedic Assessment
      </h1>

      <Button onClick={() => navigate("/assessment")}>
        Start Assessment
      </Button>
    </div>
  );
};

export default Home;