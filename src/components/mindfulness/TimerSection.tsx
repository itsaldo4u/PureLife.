// components/Mindfulness/TimerSection.tsx
import React from "react";
import type { Practice } from "../../types/mindfulness";

interface TimerSectionProps {
  practices: Practice[];
  selectedPractice: string;
  setSelectedPractice: (id: string) => void;
  timerActive: boolean;
  activeTimer: number | null;
  startTimer: (minutes: number) => void;
  stopTimer: () => void;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  timeLeft: number;
  currentPhase: string;
  formatTime: (seconds: number) => string;
  getProgressPercentage: () => number;
}

const TimerSection: React.FC<TimerSectionProps> = ({
  practices,
  selectedPractice,
  setSelectedPractice,
  timerActive,
  activeTimer,
  startTimer,
  stopTimer,
  audioEnabled,
  setAudioEnabled,
  timeLeft,
  currentPhase,
  formatTime,
  getProgressPercentage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="mr-3">🎯</span>
            Start Your Practice
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose Practice Type:
            </label>
            <select
              value={selectedPractice}
              onChange={(e) => setSelectedPractice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              disabled={timerActive}
            >
              {practices.map((practice) => (
                <option key={practice.id} value={practice.id}>
                  {practice.icon} {practice.title} ({practice.difficulty})
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Choose Duration:
            </p>
            <div className="flex flex-wrap gap-3">
              {[3, 5, 10, 15, 20, 30].map((minutes) => (
                <button
                  key={minutes}
                  className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    activeTimer === minutes && timerActive
                      ? "bg-green-700 text-white shadow-lg"
                      : "bg-green-500 text-white hover:bg-green-600 shadow-md"
                  }`}
                  onClick={() => startTimer(minutes)}
                  disabled={timerActive && activeTimer !== minutes}
                >
                  {minutes} Min
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={audioEnabled}
                onChange={(e) => setAudioEnabled(e.target.checked)}
                className="rounded focus:ring-green-500"
              />
              <span className="text-sm text-gray-700">
                Enable sound notifications
              </span>
            </label>

            {timerActive && (
              <button
                onClick={stopTimer}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Stop Session
              </button>
            )}
          </div>
        </div>

        <div className="text-center">
          {timerActive ? (
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 45 * (1 - getProgressPercentage() / 100)
                    }`}
                    className="transition-all duration-1000 ease-linear"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-1">
                      {formatTime(timeLeft)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {Math.round(getProgressPercentage())}% complete
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">
                  {practices.find((p) => p.id === selectedPractice)?.title}
                </p>
                <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block">
                  {currentPhase}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧘‍♀️</span>
              </div>
              <p className="text-gray-600 mb-4">
                Ready to begin your mindfulness journey?
              </p>
              <p className="text-sm text-gray-500">
                Select a practice type and duration above to start
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
