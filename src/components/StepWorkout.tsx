import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import finishSound from "../assets/finish.mp3"; // Add your own sound
import Confetti from "react-confetti";

const StepWorkout = ({
  steps,
}: {
  steps: { label: string; time: number }[];
}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(steps[0].time);
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playFinish] = useSound(finishSound);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
      setTimeLeft(steps[stepIndex + 1].time);
    } else if (timeLeft === 0 && stepIndex === steps.length - 1) {
      setShowConfetti(true);
      playFinish();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, stepIndex]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${("0" + (s % 60)).slice(-2)}`;

  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-center">
      {showConfetti && <Confetti />}
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {steps[stepIndex].label}
      </h2>
      <motion.div
        key={timeLeft}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-4xl font-bold text-green-600"
      >
        {formatTime(timeLeft)}
      </motion.div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setIsRunning((r) => !r)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setStepIndex(0);
            setTimeLeft(steps[0].time);
            setShowConfetti(false);
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StepWorkout;
