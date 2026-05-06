const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl",

    secondary:
      "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-2xl
        font-semibold transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;