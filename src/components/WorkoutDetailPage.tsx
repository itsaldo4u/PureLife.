import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const workouts = [
  {
    id: "morning-energizer",
    title: "Morning Energizer",
    description: "Kickstart your day with energy.",
    image: "https://example.com/morning.jpg",
    duration: 300, // in seconds
  },
  {
    id: "strength-builder",
    title: "Strength Builder",
    description: "30-minute full-body strength session.",
    image: "https://example.com/strength.jpg",
    duration: 1800,
  },
  // ... add more
];

const WorkoutDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workout = workouts.find((w) => w.id === id);

  const [time, setTime] = useState(workout?.duration || 0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (running && time > 0) {
      timer = setInterval(() => setTime((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${("0" + (s % 60)).slice(-2)}`;

  if (!workout) return <p className="p-4">Workout not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto text-gray-800">
      <button onClick={() => navigate(-1)} className="text-green-600 mb-4">
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-2">{workout.title}</h1>
      <img
        src={workout.image}
        alt={workout.title}
        className="rounded-xl mb-4"
      />
      <p className="mb-4 text-gray-600">{workout.description}</p>

      {/* Timer Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Timer</h2>
        <div className="text-3xl font-bold mb-4">{formatTime(time)}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setRunning(!running)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setTime(workout.duration);
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailPage;
