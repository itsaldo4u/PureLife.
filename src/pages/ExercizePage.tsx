import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { workouts, type Workout } from "../data/workoutData"; // Import the workout data
import type { JSX } from "react/jsx-dev-runtime";

const ExercisePage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeWorkout, setActiveWorkout] = useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [workoutComplete, setWorkoutComplete] = useState<boolean>(false);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const selectedWorkout: Workout | undefined = activeWorkout
    ? workouts.find((workout) => workout.id === activeWorkout)
    : undefined;

  const currentExercise =
    selectedWorkout && currentExerciseIndex < selectedWorkout.exercises.length
      ? selectedWorkout.exercises[currentExerciseIndex]
      : null;

  const startWorkout = (workoutId: string): void => {
    setActiveWorkout(workoutId);
    setCurrentExerciseIndex(0);
    setWorkoutComplete(false);

    const workout = workouts.find((w) => w.id === workoutId);
    if (workout && workout.exercises.length > 0) {
      startExerciseTimer(workout.exercises[0].duration);
    }
  };

  const startExerciseTimer = (duration: number): void => {
    setTimeLeft(duration);
    setTimerActive(true);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimerActive(false);
          handleExerciseComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleExerciseComplete = (): void => {
    if (!selectedWorkout) return;

    if (currentExerciseIndex < selectedWorkout.exercises.length - 1) {
      const nextIndex = currentExerciseIndex + 1;
      setCurrentExerciseIndex(nextIndex);
      startExerciseTimer(selectedWorkout.exercises[nextIndex].duration);
    } else {
      setWorkoutComplete(true);
    }
  };

  const resetWorkout = (): void => {
    setActiveWorkout(null);
    setCurrentExerciseIndex(0);
    setTimerActive(false);
    setTimeLeft(0);
    setWorkoutComplete(false);
  };

  const skipExercise = (): void => {
    if (!selectedWorkout) return;
    handleExerciseComplete();
  };

  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-8 text-gray-800">
      <div className="text-sm mb-4">
        <a href="/" className="text-gray-600 hover:underline flex items-center">
          ← Back to Home
        </a>
      </div>

      <h1 className="text-3xl font-bold">
        <span className="text-green-600">Regular</span> Exercise
      </h1>

      {!activeWorkout ? (
        <>
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Move Your Body</h2>
            <p className="text-gray-600 max-w-2xl">
              Regular physical activity is essential for both physical and
              mental wellbeing. Our approach focuses on finding enjoyable ways
              to move your body that you can sustain for the long term.
            </p>

            <div className="relative mt-6 rounded-xl overflow-hidden">
              <img
                src="/api/placeholder/1400/400"
                alt="Benefits of Regular Exercise"
                className="w-full h-72 object-cover object-center"
              />
              <div className="absolute inset-0 bg-green-900/60 flex flex-col justify-center px-6 text-white">
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
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={workout.img}
                    alt={workout.title}
                    className="w-full h-48 object-cover object-center"
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
                        onClick={() => startWorkout(workout.id)}
                        className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600"
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
      ) : (
        <div className="mt-6">
          {workoutComplete ? (
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                Workout Complete!
              </h2>
              <p className="text-gray-600 mb-6">
                Great job completing the {selectedWorkout?.title} workout.
              </p>
              <div className="flex flex-col md:flex-row gap-3 justify-center">
                <button
                  onClick={resetWorkout}
                  className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
                >
                  Return to Workouts
                </button>
                <button
                  onClick={() => startWorkout(selectedWorkout?.id || "")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Repeat Workout
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl h-fit">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-bold">{selectedWorkout?.title}</h2>
                  <button
                    onClick={resetWorkout}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    Exit
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  {selectedWorkout?.exercises.map((exercise, idx) => (
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
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-sm">
                          {exercise.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {exercise.duration} sec
                        </div>
                      </div>
                      {idx < currentExerciseIndex && (
                        <svg
                          className="w-4 h-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3">
                {currentExercise && (
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                      <img
                        src={currentExercise.imageUrl}
                        alt={currentExercise.name}
                        className="w-full h-48 md:h-64 object-cover"
                      />
                      {timerActive && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white text-xl font-bold px-4 py-2 rounded">
                          {formatTime(timeLeft)}
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">
                          {currentExercise.name}
                        </h3>
                        <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                          {currentExerciseIndex + 1}/
                          {selectedWorkout?.exercises.length}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {currentExercise.description}
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-medium mb-2">Instructions:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                          {currentExercise.instructions.map(
                            (instruction, idx) => (
                              <li key={idx}>{instruction}</li>
                            )
                          )}
                        </ol>
                      </div>

                      <div className="flex justify-between">
                        <button
                          onClick={resetWorkout}
                          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50"
                        >
                          Exit Workout
                        </button>
                        <button
                          onClick={skipExercise}
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                          {timerActive ? "Skip" : "Next Exercise"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
