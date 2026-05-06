const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="space-y-2 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full px-4 py-3
          rounded-2xl
          border border-gray-200
          bg-white
          focus:outline-none
          focus:ring-2 focus:ring-teal-500
          transition-all
        "
      />
    </div>
  );
};

export default Input;