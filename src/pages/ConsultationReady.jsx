import {
  motion,
} from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

const ConsultationReady = ({
  onComplete,
}) => {

  return (

    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-[#F5FAF6]
        flex
        items-center
        justify-center
        px-6
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-[-200px]
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-green-200/40
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          left-[-100px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-emerald-100/40
          blur-[120px]
        "
      />

      {/* MAIN CARD */}
      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.7,
        }}

        className="
          relative
          w-full
          max-w-[760px]
          rounded-[42px]
          border border-white/40
          bg-white/70
          backdrop-blur-3xl
          shadow-[0_30px_100px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >

        {/* HEADER */}
        <div
          className="
            relative
            px-12
            pt-14
            pb-24
            bg-gradient-to-br
            from-[#009E45]
            via-[#00B84F]
            to-[#00C853]
            overflow-hidden
          "
        >

          {/* FLOATING GLOW */}
          <div
            className="
              absolute
              top-[-80px]
              right-[-80px]
              w-[240px]
              h-[240px]
              rounded-full
              bg-white/10
              blur-[60px]
            "
          />

          {/* ICON */}
          <motion.div

            animate={{
              y: [0, -5, 0],
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
            }}

            className="
              w-24
              h-24
              rounded-[32px]
              bg-white/15
              backdrop-blur-xl
              flex
              items-center
              justify-center
            "
          >

            <HeartHandshake
              size={42}
              className="text-white"
            />

          </motion.div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-[54px]
              leading-[1]
              font-black
              tracking-[-0.04em]
              text-white
            "
          >
            Thank You
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-6
              max-w-[500px]
              text-[18px]
              leading-8
              text-green-50
            "
          >
            Your self-assessment has been completed
            successfully. We now have a better
            understanding of your lifestyle,
            emotional wellness, and health patterns.
          </p>

        </div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-20
            mx-8
            -mt-14
            rounded-[34px]
            bg-white
            border border-gray-100
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            p-8
          "
        >

          {/* STATUS */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-3xl
              bg-[#F7FAF8]
              border border-gray-100
              p-6
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-green-100
                flex
                items-center
                justify-center
              "
            >

              <CheckCircle2
                size={34}
                className="text-green-700"
              />

            </div>

            <div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#1D1D1F]
                "
              >
                Ready For Consultation
              </h3>

              <p
                className="
                  mt-2
                  text-gray-500
                  leading-7
                "
              >
                Proceed to the Ayurvedic consultation
                assessment with your practitioner.
              </p>

            </div>

          </div>

          {/* NEXT STEPS */}
          <div className="mt-8 space-y-4">

            <div
              className="
                rounded-2xl
                border border-gray-100
                bg-white
                p-5
              "
            >
              <div className="flex items-center gap-3">

                <Sparkles
                  size={20}
                  className="text-green-600"
                />

                <span
                  className="
                    font-semibold
                    text-[#1D1D1F]
                  "
                >
                  Prakriti Assessment
                </span>

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-500
                "
              >
                Understand your constitutional body type.
              </p>

            </div>

            <div
              className="
                rounded-2xl
                border border-gray-100
                bg-white
                p-5
              "
            >
              <div className="flex items-center gap-3">

                <Sparkles
                  size={20}
                  className="text-green-600"
                />

                <span
                  className="
                    font-semibold
                    text-[#1D1D1F]
                  "
                >
                  Ayurvedic Consultation
                </span>

              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-500
                "
              >
                Advanced practitioner-led assessment.
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <motion.button

            whileHover={{
              scale: 1.02,
            }}

            whileTap={{
              scale: 0.98,
            }}

            onClick={onComplete}

            className="
              group
              w-full
              mt-10
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-[#009E45]
              to-[#00C853]
              text-white
              text-lg
              font-semibold
              shadow-[0_15px_35px_rgba(16,185,129,0.25)]
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
              "
            >

              Proceed To Consultation

              <ArrowRight
                size={20}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />

            </div>

          </motion.button>

        </div>

        {/* FOOTER */}
        <div className="px-10 py-8">

          <p
            className="
              text-center
              text-sm
              text-gray-400
              leading-7
            "
          >
            Your responses will help create a more
            personalized and meaningful consultation
            experience.
          </p>

        </div>

      </motion.div>

    </div>
  );
};

export default ConsultationReady;