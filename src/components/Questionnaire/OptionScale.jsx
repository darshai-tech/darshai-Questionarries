const OptionScale = ({ value, selected, onChange }) => {
  return (
    <button
      onClick={() => onChange(value)}
      className={`px-4 py-2 rounded-lg ${
        selected === value ? "bg-primary text-white" : "bg-gray-200"
      }`}
    >
      {value}
    </button>
  );
};

export default OptionScale;