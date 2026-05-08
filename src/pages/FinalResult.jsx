// import CloseButton from "../components/common/CloseButton";

// const FinalResult = ({ data }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 relative">

//       {/* ❌ Close */}
//       <CloseButton />

//       <h1 className="text-3xl font-bold text-center mb-8">
//         Final Assessment Summary
//       </h1>

//       {/* PRAKRITI */}
//       <Section title="Prakriti">
//         {Object.entries(data.prakriti).map(([key, value]) => (
//           <Item key={key} label={key} value={value} />
//         ))}
//       </Section>

//       {/* VIKRITI */}
//       <Section title="Vikriti">
//         {Object.entries(data.vikriti).map(([key, value]) => (
//           <Item key={key} label={key} value={value} />
//         ))}
//       </Section>

//       {/* AGNI */}
//       <Section title="Agni">
//         {Object.entries(data.agni).map(([key, value]) => (
//           <Item key={key} label={key} value={value} />
//         ))}
//       </Section>

//       {/* AMA */}
//       <Section title="Ama">
//         {Object.entries(data.ama).map(([key, value]) => (
//           <Item key={key} label={key} value={value} />
//         ))}
//       </Section>

//     </div>
//   );
// };

// /* ---------- UI COMPONENTS ---------- */

// const Section = ({ title, children }) => (
//   <div className="mb-8">
//     <h2 className="text-xl font-semibold mb-4">{title}</h2>
//     <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
//       {children}
//     </div>
//   </div>
// );

// const Item = ({ label, value }) => (
//   <div className="flex justify-between border-b py-2 text-sm">
//     <span className="text-gray-600">{label}</span>
//     <span className="font-medium text-teal-600">{String(value)}</span>
//   </div>
// );

// export default FinalResult;


import DashboardLayout from "../layouts/DashboardLayout";

const FinalResult = ({ data }) => {

  return (
    <DashboardLayout>

      <div className="space-y-10">

        {/* HEADER */}
        <div className="bg-white rounded-3xl p-10 shadow-sm">

          <h1 className="text-5xl font-bold text-gray-800">
            Final Assessment Report
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Consolidated wellness report
            generated from the master assessment.
          </p>

        </div>

        {/* OVERVIEW */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Patient Information
            </h2>

            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(
                data.patient,
                null,
                2
              )}
            </pre>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-orange-700 mb-4">
              Ayurvedic Assessment
            </h2>

            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(
                {
                  prakriti:
                    data.prakriti,
                  vikriti:
                    data.vikriti,
                  agni:
                    data.agni,
                  ama:
                    data.ama,
                },
                null,
                2
              )}
            </pre>

          </div>

        </div>

        {/* COMPLETE JSON */}
        <div className="bg-black rounded-3xl p-8 overflow-auto">

          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Final Backend Payload
          </h2>

          <pre className="text-green-300 text-sm whitespace-pre-wrap">
            {JSON.stringify(
              data,
              null,
              2
            )}
          </pre>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default FinalResult;