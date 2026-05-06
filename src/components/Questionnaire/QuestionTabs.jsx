const QuestionTabs = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-5 py-2 rounded-2xl
            text-sm md:text-base
            transition-all duration-300
            ${
              activeTab === tab
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default QuestionTabs;