import { useNavigate } from "react-router-dom";

const CloseButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black"
    >
      ✕
    </button>
  );
};

export default CloseButton;