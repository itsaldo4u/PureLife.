import React from "react";
import { type Workout } from "../../data/workoutData";

interface WorkoutCompleteProps {
  workout: Workout;
  onRepeat: () => void;
  onReset: () => void;
}

const WorkoutComplete: React.FC<WorkoutCompleteProps> = ({
  workout,
  onRepeat,
  onReset,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-center">
    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
      ✔
    </div>
    <h2 className="text-2xl font-bold text-green-700 mb-2">
      Workout Complete!
    </h2>
    <p className="text-gray-600 mb-6">
      Great job completing the {workout.title} workout.
    </p>
    <div className="flex flex-col md:flex-row gap-3 justify-center">
      <button
        onClick={onReset}
        className="border border-gray-300 px-4 py-2 rounded"
      >
        Return to Workouts
      </button>
      <button
        onClick={onRepeat}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Repeat Workout
      </button>
    </div>
  </div>
);

export default WorkoutComplete;
