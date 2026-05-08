import {
  Leaf,
  Flame,
  Activity,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const AyurvedicResult = ({
  data,
  onComplete,
}) => {

  return (

    <div
      className="
        min-h-screen
        bg-[#F4FAF6]
        px-8
        py-12
      "
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            rounded-[40px]
            bg-gradient-to-r
            from-green-700
            to-emerald-500
            p-12
            text-white
            shadow-2xl
          "
        >

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
            "
          >
            Ayurvedic Assessment
          </h1>

          <p
            className="
              mt-5
              text-xl
              text-green-50
              leading-8
              max-w-3xl
            "
          >
            Your Ayurvedic constitution,
            digestion profile, toxin load,
            and imbalance indicators.
          </p>

        </motion.div>

        {/* RESULT GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
            mt-10
          "
        >

          {/* PRAKRITI */}
          <ResultCard
            icon={Leaf}
            title="Prakriti"
            value="Vata-Pitta"
            description="Natural constitutional type"
            color="from-green-500 to-emerald-500"
          />

          {/* VIKRITI */}
          <ResultCard
            icon={Activity}
            title="Vikriti"
            value="Pitta Imbalance"
            description="Current imbalance pattern"
            color="from-orange-500 to-red-500"
          />

          {/* AGNI */}
          <ResultCard
            icon={Flame}
            title="Agni"
            value="Tikshna Agni"
            description="Digestive fire status"
            color="from-amber-500 to-orange-500"
          />

          {/* AMA */}
          <ResultCard
            icon={ShieldCheck}
            title="Ama"
            value="Moderate Ama"
            description="Toxin accumulation level"
            color="from-teal-500 to-cyan-500"
          />

        </div>

        {/* CONTINUE */}
        <button
          onClick={() =>
            onComplete?.()
          }
          className="
            w-full
            mt-10
            py-5
            rounded-3xl
            text-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            shadow-[0_20px_40px_rgba(16,185,129,0.25)]
            hover:scale-[1.01]
            transition-all
          "
        >
          Continue To Clinical Consultation
        </button>

      </div>

    </div>
  );
};

/* RESULT CARD */
const ResultCard = ({
  icon: Icon,
  title,
  value,
  description,
  color,
}) => {

  return (

    <motion.div

      whileHover={{
        y: -5,
      }}

      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-white
        p-8
        border border-white/40
        shadow-[0_20px_50px_rgba(0,0,0,0.05)]
      "
    >

      {/* GLOW */}
      <div
        className={`
          absolute
          top-[-80px]
          right-[-50px]
          w-[180px]
          h-[180px]
          rounded-full
          blur-[70px]
          opacity-20
          bg-gradient-to-r
          ${color}
        `}
      />

      {/* ICON */}
      <div
        className={`
          w-16
          h-16
          rounded-3xl
          flex
          items-center
          justify-center
          bg-gradient-to-r
          ${color}
          text-white
          shadow-lg
        `}
      >

        <Icon size={30} />

      </div>

      {/* CONTENT */}
      <h2
        className="
          mt-6
          text-2xl
          font-bold
          text-[#1D1D1F]
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-4xl
          font-black
          tracking-tight
          text-gray-900
        "
      >
        {value}
      </p>

      <p
        className="
          mt-4
          text-gray-500
          leading-7
        "
      >
        {description}
      </p>

    </motion.div>
  );
};

export default AyurvedicResult;