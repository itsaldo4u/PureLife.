import React from "react";
import { workouts } from "../../data/workoutData";

interface WorkoutListProps {
  onStart: (workoutId: string) => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ onStart }) => {
  return (
    <>
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Move Your Body</h2>
        <p className="text-gray-600 max-w-2xl">
          Regular physical activity is essential...
        </p>

        <div className="relative mt-6 rounded-xl overflow-hidden">
          <img
            src="exercise.jpg"
            alt="..."
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60 px-6 py-4 text-white">
            <h3 className="text-lg font-semibold mb-2">
              Benefits of Regular Exercise
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Improved mood and mental clarity</li>
              <li>• Enhanced energy and reduced fatigue</li>
              <li>• Better sleep quality</li>
              <li>• Reduced risk of chronic diseases</li>
              <li>• Stronger muscles and bones</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Featured Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={workout.img}
                alt={workout.title}
                className="w-full h-60 object-contain bg-gray-100"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{workout.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {workout.duration} min
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{workout.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {workout.level} • {workout.equipment.join(", ")}
                  </div>
                  <button
                    onClick={() => onStart(workout.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Start Workout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkoutList;
