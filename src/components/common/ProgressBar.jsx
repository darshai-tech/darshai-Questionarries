const ProgressBar = ({ step }) => {
  const width = (step / 4) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
      <div
        className="bg-primary h-2 rounded-full"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;