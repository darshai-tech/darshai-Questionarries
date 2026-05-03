const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90"
    >
      {children}
    </button>
  );
};

export default Button;