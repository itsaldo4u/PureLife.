import React from "react";
import { type Workout } from "../../data/workoutData";

interface SidebarProps {
  workout: Workout;
  currentExerciseIndex: number;
  onExit: () => void;
}

const ExerciseSidebar: React.FC<SidebarProps> = ({
  workout,
  currentExerciseIndex,
  onExit,
}) => (
  <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl h-fit">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold">{workout.title}</h2>
      <button
        onClick={onExit}
        className="text-xs text-gray-500 hover:text-gray-700"
      >
        Exit
      </button>
    </div>

    <div className="space-y-3 mb-4">
      {workout.exercises.map((exercise, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-lg flex items-center gap-3 ${
            idx === currentExerciseIndex
              ? "bg-green-100 border-l-4 border-green-500"
              : idx < currentExerciseIndex
              ? "bg-gray-100 text-gray-500"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex justify-center items-center">
            {idx + 1}
          </div>
          <div className="flex-grow">
            <div className="font-medium text-sm">{exercise.name}</div>
            <div className="text-xs text-gray-500">{exercise.duration} sec</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExerciseSidebar;
