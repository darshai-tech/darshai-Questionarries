const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/90 backdrop-blur-md
        border border-gray-100
        rounded-3xl
        shadow-xl
        p-6
        transition-all duration-300
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;