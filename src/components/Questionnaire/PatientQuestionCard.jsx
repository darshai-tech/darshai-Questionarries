import { motion } from "framer-motion";

const PatientQuestionCard = ({
  title,
  subtitle,
  children,
}) => {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl p-10"
    >

      <div className="mb-10">

        <p className="text-green-700 font-medium mb-3">
          {subtitle}
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#1D1D1F]">
          {title}
        </h1>

      </div>

      {children}

    </motion.div>
  );
};

export default PatientQuestionCard;