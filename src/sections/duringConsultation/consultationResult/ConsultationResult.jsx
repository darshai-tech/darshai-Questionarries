import {
  Leaf,
  Flame,
  Activity,
  ShieldCheck,
  HeartPulse,
  TestTube2,
} from "lucide-react";

import { motion } from "framer-motion";

const ConsultationResult = ({
  data,
  onComplete,
}) => {

  return (

    <div
      className="
        min-h-screen
        bg-[#F5FAF6]
        px-8
        py-12
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          className="
            rounded-[42px]
            overflow-hidden
            bg-gradient-to-r
            from-green-700
            via-emerald-600
            to-green-500
            p-12
            text-white
            shadow-[0_30px_80px_rgba(16,185,129,0.2)]
          "
        >

          <h1
            className="
              text-6xl
              font-black
              tracking-tight
            "
          >
            Consultation Insights
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-xl
              leading-9
              text-green-50
            "
          >
            Integrated Ayurvedic and
            clinical interpretation based
            on constitution, digestion,
            toxicity markers, and health
            profile.
          </p>

        </motion.div>

        {/* RESULT GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            mt-10
          "
        >

          {/* PRAKRITI */}
          <ResultCard
            icon={Leaf}
            title="Prakriti"
            value="Vata-Pitta"
            description="Natural body constitution"
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
            description="Digestive fire assessment"
            color="from-amber-500 to-orange-500"
          />

          {/* AMA */}
          <ResultCard
            icon={ShieldCheck}
            title="Ama"
            value="Moderate Ama"
            description="Toxin accumulation level"
            color="from-cyan-500 to-teal-500"
          />

          {/* CLINICAL */}
          <ResultCard
            icon={HeartPulse}
            title="Clinical Risk"
            value="Moderate"
            description="Lifestyle and metabolic risk"
            color="from-pink-500 to-rose-500"
          />

          {/* LAB */}
          <ResultCard
            icon={TestTube2}
            title="Lab Interpretation"
            value="Stable"
            description="Current biomarkers overview"
            color="from-violet-500 to-purple-500"
          />

        </div>

        {/* CONTINUE */}
        <motion.button

          whileHover={{
            scale: 1.01,
          }}

          whileTap={{
            scale: 0.99,
          }}

          onClick={() =>
            onComplete?.()
          }

          className="
            w-full
            mt-12
            py-6
            rounded-3xl
            text-xl
            font-bold
            text-white

            bg-gradient-to-r
            from-green-600
            to-emerald-500

            shadow-[0_20px_40px_rgba(16,185,129,0.25)]
          "
        >
          Continue To Doctor Notes
        </motion.button>

      </div>

    </div>
  );
};

/* CARD */
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
          top-[-60px]
          right-[-40px]
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
          text-white
          shadow-lg
          bg-gradient-to-r
          ${color}
        `}
      >

        <Icon size={30} />

      </div>

      {/* TITLE */}
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

      {/* VALUE */}
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

      {/* DESC */}
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

export default ConsultationResult;