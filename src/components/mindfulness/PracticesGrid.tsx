// components/Mindfulness/PracticesGrid.tsx
import React from "react";
import PracticeCard from "./PracticeCard";
import type { Practice } from "../../types/mindfulness";

interface PracticesGridProps {
  practices: Practice[];
  activeDetail: string | null;
  toggleDetail: (id: string) => void;
  setSelectedPractice: (id: string) => void;
  startTimer: (minutes: number, practiceId?: string) => void;
}

const PracticesGrid: React.FC<PracticesGridProps> = ({
  practices,
  activeDetail,
  toggleDetail,
  setSelectedPractice,
  startTimer,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-3">🌟</span>
        Mindfulness Practices
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {practices.map((practice) => (
          <PracticeCard
            key={practice.id}
            practice={practice}
            activeDetail={activeDetail}
            toggleDetail={toggleDetail}
            setSelectedPractice={setSelectedPractice}
            startTimer={startTimer}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticesGrid;
