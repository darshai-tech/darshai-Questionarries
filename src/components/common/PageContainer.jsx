const PageContainer = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-teal-50
        via-white
        to-emerald-50
        px-4 py-10
      "
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;