const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow-lg"
    >
      {children}
    </button>
  );
};

export default Button;