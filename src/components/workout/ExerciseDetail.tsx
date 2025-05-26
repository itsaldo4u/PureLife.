import React from "react";
import { type Exercise } from "../../data/workoutData";

interface Props {
  exercise: Exercise;
  index: number;
  total: number;
  timer: number;
  timerActive: boolean;
  onExit: () => void;
  onSkip: () => void;
}

const formatTime = (seconds: number): string =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

const ExerciseDetail: React.FC<Props> = ({
  exercise,
  index,
  total,
  timer,
  timerActive,
  onExit,
  onSkip,
}) => (
  <div className="md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative">
      <img
        src={exercise.imageUrl}
        alt={exercise.name}
        className="w-full h-60 object-contain bg-gray-100"
      />
      {timerActive && (
        <div className="absolute top-4 right-4 bg-black/70 text-white text-xl font-bold px-4 py-2 rounded">
          {formatTime(timer)}
        </div>
      )}
    </div>

    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{exercise.name}</h3>
        <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
          {index + 1}/{total}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{exercise.description}</p>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h4 className="font-medium mb-2">Instructions:</h4>
        <ol className="list-decimal list-inside text-gray-700">
          {exercise.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="flex justify-between">
        <button onClick={onExit} className="border px-4 py-2 rounded">
          Exit Workout
        </button>
        <button
          onClick={onSkip}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Skip
        </button>
      </div>
    </div>
  </div>
);

export default ExerciseDetail;
