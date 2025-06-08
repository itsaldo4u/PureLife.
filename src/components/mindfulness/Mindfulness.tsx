// components/Mindfulness/Mindfulness.tsx
import { useState, useEffect, useRef } from "react";
import type { JSX } from "react/jsx-dev-runtime";
import StatsDashboard from "./StatsDashboard";
import TimerSection from "./TimerSection";
import PracticesGrid from "./PracticesGrid";
import SessionCompleteModal from "./SessionCompleteModal";
import { practices } from "../../data/practices";
import type { Session } from "../../types/mindfulness";

const Mindfulness = (): JSX.Element => {
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<string>("breathing");
  const [completedSessions, setCompletedSessions] = useState<Session[]>([]);
  const [showSessionComplete, setShowSessionComplete] =
    useState<boolean>(false);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [currentPhase, setCurrentPhase] = useState<string>("");

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== "undefined" && "AudioContext" in window) {
      audioContextRef.current = new AudioContext();
    }
  }, []);

  const playBellSound = () => {
    if (!audioEnabled || !audioContextRef.current) return;

    try {
      const context = audioContextRef.current;
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.frequency.setValueAtTime(800, context.currentTime);
      gainNode.gain.setValueAtTime(0.3, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 2);

      oscillator.start(context.currentTime);
      oscillator.stop(context.currentTime + 2);
    } catch (error) {
      console.log("Audio not available");
    }
  };

  const startTimer = (minutes: number, practiceId?: string): void => {
    if (timerActive) return;

    const practice = practiceId || selectedPractice;
    setTimeLeft(minutes * 60);
    setActiveTimer(minutes);
    setTimerActive(true);
    setSelectedPractice(practice);
    setCurrentPhase("Beginning");

    if (audioEnabled) {
      playBellSound();
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        const totalTime = minutes * 60;
        const elapsed = totalTime - newTime;

        // Update phases based on progress
        if (elapsed < totalTime * 0.1) {
          setCurrentPhase("Beginning");
        } else if (elapsed < totalTime * 0.8) {
          setCurrentPhase("Deep Practice");
        } else if (elapsed < totalTime * 0.95) {
          setCurrentPhase("Preparing to Finish");
        } else {
          setCurrentPhase("Closing");
        }

        if (newTime <= 0) {
          // Timer completed
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }

          setTimerActive(false);
          setShowSessionComplete(true);

          // Save completed session
          const newSession: Session = {
            id: Date.now().toString(),
            practiceId: practice,
            duration: minutes,
            completedAt: new Date(),
          };

          setCompletedSessions((prev) => [...prev, newSession]);

          if (audioEnabled) {
            // Play completion sound
            setTimeout(() => playBellSound(), 200);
            setTimeout(() => playBellSound(), 600);
          }

          return 0;
        }

        return newTime;
      });
    }, 1000);
  };

  const stopTimer = (): void => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimerActive(false);
    setActiveTimer(null);
    setTimeLeft(0);
    setCurrentPhase("");
  };

  const toggleDetail = (id: string): void => {
    setActiveDetail(activeDetail === id ? null : id);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getProgressPercentage = (): number => {
    if (!activeTimer) return 0;
    const totalSeconds = activeTimer * 60;
    const elapsed = totalSeconds - timeLeft;
    return Math.min((elapsed / totalSeconds) * 100, 100);
  };

  const closeSessionModal = (): void => {
    setShowSessionComplete(false);
    setActiveTimer(null);
    setTimeLeft(0);
    setCurrentPhase("");
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto mt-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Mindfulness Center
          </h1>
          <p className="text-lg text-gray-600">
            Find your inner peace through guided meditation practices
          </p>
        </div>

        {/* Stats Dashboard */}
        <StatsDashboard completedSessions={completedSessions} />

        {/* Timer Section */}
        <TimerSection
          practices={practices}
          selectedPractice={selectedPractice}
          setSelectedPractice={setSelectedPractice}
          timerActive={timerActive}
          activeTimer={activeTimer}
          startTimer={startTimer}
          stopTimer={stopTimer}
          audioEnabled={audioEnabled}
          setAudioEnabled={setAudioEnabled}
          timeLeft={timeLeft}
          currentPhase={currentPhase}
          formatTime={formatTime}
          getProgressPercentage={getProgressPercentage}
        />

        {/* Practices Grid */}
        <PracticesGrid
          practices={practices}
          activeDetail={activeDetail}
          toggleDetail={toggleDetail}
          setSelectedPractice={setSelectedPractice}
          startTimer={startTimer}
        />

        {/* Session Complete Modal */}
        <SessionCompleteModal
          show={showSessionComplete}
          activeTimer={activeTimer}
          onClose={closeSessionModal}
        />
      </div>
    </div>
  );
};

export default Mindfulness;
