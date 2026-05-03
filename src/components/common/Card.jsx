const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-6">
      {children}
    </div>
  );
};

export default Card;