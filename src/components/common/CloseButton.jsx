import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloseButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end">
      <button
        onClick={() => navigate("/")}
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          bg-white shadow-md
          hover:bg-red-50
          transition-all
        "
      >
        <X size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default CloseButton;