const CategoryCard = ({ title, children }) => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        border border-gray-100
        p-6 md:p-8
        space-y-6
      "
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h2>

        <div className="w-20 h-1 bg-teal-500 rounded-full mt-3" />
      </div>

      {children}
    </div>
  );
};

export default CategoryCard;