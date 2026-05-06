const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/40 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          p-6
          max-w-lg
          w-full
          shadow-2xl
        "
      >
        {children}

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;