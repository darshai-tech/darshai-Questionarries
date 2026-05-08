// import { useNavigate } from "react-router-dom";
// import Button from "../components/common/Button";


// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-6">
//         Ayurvedic Assessment
//       </h1>

//       <Button onClick={() => navigate("/assessment")}>
//         Start Assessment
//       </Button>
//     </div>
//   );
// };

// export default Home;

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 to-emerald-900 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl p-12 max-w-3xl w-full shadow-2xl text-center">

        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          DARSHAI
          <br />
          Master Questionnaire
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Advanced Ayurvedic & Clinical
          Health Assessment Platform
        </p>

        <button
          onClick={() =>
            navigate("/assessment")
          }
          className="
            mt-10
            bg-teal-600
            hover:bg-teal-700
            text-white
            px-10
            py-4
            rounded-2xl
            text-lg
            font-semibold
            transition
          "
        >
          Start Assessment
        </button>

      </div>

    </div>
  );
};

export default Home;