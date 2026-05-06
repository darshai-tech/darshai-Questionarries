import CloseButton from "../components/common/CloseButton";

const FinalResult = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 relative">

      {/* ❌ Close */}
      <CloseButton />

      <h1 className="text-3xl font-bold text-center mb-8">
        Final Assessment Summary
      </h1>

      {/* PRAKRITI */}
      <Section title="Prakriti">
        {Object.entries(data.prakriti).map(([key, value]) => (
          <Item key={key} label={key} value={value} />
        ))}
      </Section>

      {/* VIKRITI */}
      <Section title="Vikriti">
        {Object.entries(data.vikriti).map(([key, value]) => (
          <Item key={key} label={key} value={value} />
        ))}
      </Section>

      {/* AGNI */}
      <Section title="Agni">
        {Object.entries(data.agni).map(([key, value]) => (
          <Item key={key} label={key} value={value} />
        ))}
      </Section>

      {/* AMA */}
      <Section title="Ama">
        {Object.entries(data.ama).map(([key, value]) => (
          <Item key={key} label={key} value={value} />
        ))}
      </Section>

    </div>
  );
};

/* ---------- UI COMPONENTS ---------- */

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
      {children}
    </div>
  </div>
);

const Item = ({ label, value }) => (
  <div className="flex justify-between border-b py-2 text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-teal-600">{String(value)}</span>
  </div>
);

export default FinalResult;