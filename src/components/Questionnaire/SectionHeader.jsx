const SectionHeader = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-teal-700 to-emerald-500 text-white p-5 rounded-2xl mb-6">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeader;