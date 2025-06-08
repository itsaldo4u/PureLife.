// components/Mindfulness/PracticeCard.tsx
import React from "react";
import type { Practice } from "../../types/mindfulness";

interface PracticeCardProps {
  practice: Practice;
  activeDetail: string | null;
  toggleDetail: (id: string) => void;
  setSelectedPractice: (id: string) => void;
  startTimer: (minutes: number, practiceId?: string) => void;
}

const PracticeCard: React.FC<PracticeCardProps> = ({
  practice,
  activeDetail,
  toggleDetail,
  setSelectedPractice,
  startTimer,
}) => {
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`h-2 bg-gradient-to-r ${practice.color}`}></div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{practice.icon}</span>
            <div>
              <h3 className="font-bold text-gray-800">{practice.title}</h3>
              <span
                className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(
                  practice.difficulty
                )}`}
              >
                {practice.difficulty}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {practice.desc}
        </p>

        <div className="mb-4">
          <p className="text-xs font-medium text-gray-700 mb-2">
            Key Benefits:
          </p>
          <div className="flex flex-wrap gap-1">
            {practice.benefits.slice(0, 2).map((benefit, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => toggleDetail(practice.id)}
            className="w-full text-sm text-green-600 hover:text-green-700 font-medium"
          >
            {activeDetail === practice.id ? "Hide details ↑" : "Learn more →"}
          </button>

          {activeDetail === practice.id && (
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
              <p className="text-sm text-gray-600">{practice.fullDesc}</p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">📋</span>
                  How to Practice:
                </h4>
                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                  {practice.steps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => {
                    setSelectedPractice(practice.id);
                    startTimer(5, practice.id);
                    toggleDetail(practice.id);
                  }}
                >
                  Try 5 min
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => {
                    setSelectedPractice(practice.id);
                    startTimer(10, practice.id);
                    toggleDetail(practice.id);
                  }}
                >
                  Try 10 min
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
