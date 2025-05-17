import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimerProps = {
  duration: number; // in seconds
  onFinish?: () => void;
};

const Timer = ({ duration, onFinish }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isRunning && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      onFinish?.();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${("0" + (s % 60)).slice(-2)}`;

  return (
    <div className="text-center">
      <motion.div
        key={timeLeft}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4"
      >
        {formatTime(timeLeft)}
      </motion.div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning((r) => !r)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(duration);
          }}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
