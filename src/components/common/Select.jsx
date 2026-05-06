const Select = ({
  label,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          w-full px-4 py-3
          rounded-2xl
          border border-gray-200
          bg-white
          focus:outline-none
          focus:ring-2 focus:ring-teal-500
        "
      >
        <option value="">Select</option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
       </div>
  );
};

export default Select;