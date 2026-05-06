const SectionWrapper = ({ children }) => {
  return (
    <section
      className="
        bg-white/80 backdrop-blur-md
        rounded-3xl
        shadow-xl
        border border-gray-100
        p-6 md:p-8
        space-y-6
      "
    >
      {children}
    </section>
  );
};

export default SectionWrapper;