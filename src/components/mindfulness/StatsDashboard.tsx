// components/Mindfulness/StatsDashboard.tsx
import React from "react";
import type { Session } from "../../types/mindfulness";

interface StatsDashboardProps {
  completedSessions: Session[];
}

const StatsDashboard: React.FC<StatsDashboardProps> = ({
  completedSessions,
}) => {
  const getTodaysSessions = (): number => {
    const today = new Date().toDateString();
    return completedSessions.filter(
      (session) => session.completedAt.toDateString() === today
    ).length;
  };

  const getTotalMinutes = (): number => {
    return completedSessions.reduce(
      (total, session) => total + session.duration,
      0
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Today's Sessions</p>
            <p className="text-2xl font-bold text-green-600">
              {getTodaysSessions()}
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">📅</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Total Minutes</p>
            <p className="text-2xl font-bold text-blue-600">
              {getTotalMinutes()}
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">⏱️</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Sessions Completed</p>
            <p className="text-2xl font-bold text-purple-600">
              {completedSessions.length}
            </p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
