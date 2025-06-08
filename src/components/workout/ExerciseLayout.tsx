import React, { useState, useEffect } from "react";
import WorkoutList from "./WorkoutList";
import WorkoutComplete from "./WorkoutComplete";
import ExerciseSidebar from "./ExerciseSidebar";
import ExerciseDetail from "./ExerciseDetail";
import { workouts, type Workout } from "../../data/workoutData";

const ExerciseLayout: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [workoutCompleted, setWorkoutCompleted] = useState<boolean>(false);

  const currentExercise = selectedWorkout?.exercises[currentExerciseIndex];

  // Start a workout
  const handleStartWorkout = (workoutId: string) => {
    const workout = workouts.find((w) => w.id === workoutId);
    if (workout) {
      setSelectedWorkout(workout);
      setCurrentExerciseIndex(0);
      setTimer(workout.exercises[0].duration);
      setTimerActive(true);
      setWorkoutCompleted(false);
    }
  };

  // Timer logic
  useEffect(() => {
    if (!timerActive || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive, timer]);

  // Move to next exercise when timer ends
  useEffect(() => {
    if (timer === 0 && selectedWorkout && timerActive) {
      handleNextExercise();
    }
  }, [timer]);

  const handleNextExercise = () => {
    if (!selectedWorkout) return;

    if (currentExerciseIndex < selectedWorkout.exercises.length - 1) {
      const nextIndex = currentExerciseIndex + 1;
      setCurrentExerciseIndex(nextIndex);
      setTimer(selectedWorkout.exercises[nextIndex].duration);
    } else {
      setWorkoutCompleted(true);
      setTimerActive(false);
    }
  };

  const handleSkipExercise = () => {
    handleNextExercise();
  };

  const handleExitWorkout = () => {
    setSelectedWorkout(null);
    setCurrentExerciseIndex(0);
    setTimer(0);
    setTimerActive(false);
    setWorkoutCompleted(false);
  };

  const handleRepeatWorkout = () => {
    if (!selectedWorkout) return;

    setCurrentExerciseIndex(0);
    setTimer(selectedWorkout.exercises[0].duration);
    setTimerActive(true);
    setWorkoutCompleted(false);
  };

  return (
    <div className="container mt-10 mx-auto px-4 py-8">
      {selectedWorkout ? (
        workoutCompleted ? (
          <WorkoutComplete
            workout={selectedWorkout}
            onRepeat={handleRepeatWorkout}
            onReset={handleExitWorkout}
          />
        ) : (
          <div className="grid md:grid-cols-5 gap-6">
            <ExerciseSidebar
              workout={selectedWorkout}
              currentExerciseIndex={currentExerciseIndex}
              onExit={handleExitWorkout}
            />
            <ExerciseDetail
              exercise={currentExercise!}
              index={currentExerciseIndex}
              total={selectedWorkout.exercises.length}
              timer={timer}
              timerActive={timerActive}
              onExit={handleExitWorkout}
              onSkip={handleSkipExercise}
            />
          </div>
        )
      ) : (
        <WorkoutList onStart={handleStartWorkout} />
      )}
    </div>
  );
};

export default ExerciseLayout;
