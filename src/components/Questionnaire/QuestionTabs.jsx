const QuestionTabs = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {

  return (

    <div className="flex gap-4 flex-wrap mb-8">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() =>
            setActiveTab(tab)
          }
          className={`px-6 py-3 rounded-2xl transition font-medium ${
            activeTab === tab
              ? "bg-green-700 text-white"
              : "bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}

    </div>
  );
};

export default QuestionTabs;