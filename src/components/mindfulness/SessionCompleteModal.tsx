// components/Mindfulness/SessionCompleteModal.tsx
import React from "react";

interface SessionCompleteModalProps {
  show: boolean;
  activeTimer: number | null;
  onClose: () => void;
}

const SessionCompleteModal: React.FC<SessionCompleteModalProps> = ({
  show,
  activeTimer,
  onClose,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Session Complete!
        </h3>
        <p className="text-gray-600 mb-6">
          Congratulations on completing your {activeTimer}-minute mindfulness
          session. You've taken an important step in your wellness journey.
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SessionCompleteModal;
