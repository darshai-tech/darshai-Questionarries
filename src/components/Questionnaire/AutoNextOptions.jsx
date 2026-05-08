import { motion } from "framer-motion";

const AutoNextOptions = ({
  options,
  selected,
  onSelect,
}) => {

  return (

    <div className="space-y-4">

      {options.map((option) => {

        const active =
          selected === option;

        return (

          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            key={option}
            disabled={selected}
            onClick={() =>
              onSelect(option)
            }
            className={`w-full text-left p-6 rounded-2xl border transition-all ${
              active
                ? "bg-green-700 text-white border-green-700"
                : "bg-[#FAFAFA] border-gray-200 hover:border-green-400"
            }`}
          >

            <div className="text-lg font-medium">
              {option}
            </div>

          </motion.button>
        );
      })}

    </div>
  );
};

export default AutoNextOptions;