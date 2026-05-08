const MainLayout = ({ children }) => {

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <header className="bg-white border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4">

          <h1 className="text-2xl font-bold text-teal-700">
            DARSHAI MASTER QUESTIONNAIRE
          </h1>

        </div>

      </header>

      {/* PAGE */}
      <main>
        {children}
      </main>

    </div>
  );
};

export default MainLayout;