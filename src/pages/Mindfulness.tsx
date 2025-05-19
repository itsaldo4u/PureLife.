import { useState } from "react";
import type { JSX } from "react/jsx-dev-runtime";

interface Practice {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  steps: string[];
}

const Mindfulness = (): JSX.Element => {
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);

  const startTimer = (minutes: number): void => {
    if (timerActive) return;

    setTimeLeft(minutes * 60);
    setActiveTimer(minutes);
    setTimerActive(true);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const practices: Practice[] = [
    {
      id: "breathing",
      title: "Mindful Breathing",
      desc: "Focus on your breath to anchor yourself in the present moment.",
      fullDesc:
        "Mindful breathing is a fundamental practice that involves focusing your attention on your breath. Find a comfortable sitting position, close your eyes, and breathe naturally. Notice the sensation of air moving in and out of your body. When your mind wanders, gently bring your attention back to your breath without judgment.",
      steps: [
        "Find a comfortable seated position with your back straight",
        "Close your eyes or maintain a soft gaze",
        "Breathe naturally through your nose",
        "Feel the sensation of breath in your nostrils, chest, and abdomen",
        "When your mind wanders, gently return focus to your breath",
      ],
    },
    {
      id: "bodyscan",
      title: "Body Scan",
      desc: "Systematically bring awareness to different parts of your body.",
      fullDesc:
        "The body scan practice involves bringing attention to various parts of your body sequentially. It helps develop body awareness and can be particularly helpful for releasing tension you may not realize you're holding. This practice can be done lying down or sitting.",
      steps: [
        "Lie down or sit in a comfortable position",
        "Bring attention to your feet and notice any sensations",
        "Slowly move your attention upward through each part of your body",
        "Notice sensations without judgment (tension, relaxation, warmth, etc.)",
        "When you reach your head, take a moment to feel your whole body",
      ],
    },
    {
      id: "lovingkindness",
      title: "Loving-Kindness",
      desc: "Cultivate feelings of compassion for yourself and others.",
      fullDesc:
        "Loving-kindness meditation (Metta) develops compassion for yourself and others. This practice involves silently repeating phrases of goodwill and is powerful for cultivating positive emotions and reducing negative feelings toward yourself and others.",
      steps: [
        "Sit comfortably and take a few deep breaths",
        "Begin with yourself: 'May I be happy, may I be healthy...'",
        "Extend to a loved one with similar phrases",
        "Then to a neutral person, a difficult person, and all beings",
        "Feel the warmth and compassion expanding with each step",
      ],
    },
    {
      id: "walking",
      title: "Mindful Walking",
      desc: "Transform a simple walk into a meditation practice.",
      fullDesc:
        "Mindful walking transforms an everyday activity into a contemplative practice. It involves bringing full awareness to the experience of walking by noticing the sensations in your feet and legs, your posture, and the environment around you.",
      steps: [
        "Find a quiet path where you can walk slowly",
        "Stand still and become aware of your body",
        "Begin walking at a natural pace",
        "Notice the sensation of lifting, moving, and placing each foot",
        "When your mind wanders, return attention to the walking experience",
      ],
    },
  ];

  const toggleDetail = (id: string): void => {
    if (activeDetail === id) {
      setActiveDetail(null);
    } else {
      setActiveDetail(id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <a href="/" className="text-sm text-gray-500 hover:underline mb-4 block">
        ← Back to Home
      </a>

      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Mindfulness Practice
      </h1>

      <p className="text-gray-600 mb-4">
        Mindfulness is the practice of bringing your attention to the present
        moment with an attitude of openness, curiosity, and non-judgment.
        Regular practice can reduce stress, improve focus, and enhance overall
        well-being.
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Begin Your Practice</h2>
          <p className="mb-3 text-gray-600">
            New to mindfulness? Start with just a few minutes each day to build
            your practice gradually. Choose a duration below:
          </p>
          <div className="flex gap-2 mb-4">
            <button
              className={`${
                activeTimer === 5 ? "bg-green-700" : "bg-green-500"
              } text-white px-3 py-1 rounded hover:bg-green-600`}
              onClick={() => startTimer(5)}
              disabled={timerActive && activeTimer !== 5}
            >
              5 Min
            </button>
            <button
              className={`${
                activeTimer === 10 ? "bg-green-700" : "bg-green-500"
              } text-white px-3 py-1 rounded hover:bg-green-600`}
              onClick={() => startTimer(10)}
              disabled={timerActive && activeTimer !== 10}
            >
              10 Min
            </button>
            <button
              className={`${
                activeTimer === 20 ? "bg-green-700" : "bg-green-500"
              } text-white px-3 py-1 rounded hover:bg-green-600`}
              onClick={() => startTimer(20)}
              disabled={timerActive && activeTimer !== 20}
            >
              20 Min
            </button>
          </div>

          {timerActive && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-700 mb-2">
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-green-600">
                Time remaining in your {activeTimer}-minute session
              </p>
            </div>
          )}
        </div>

        <div className="relative rounded-xl shadow-md overflow-hidden">
          <img
            src="/api/placeholder/600/400"
            alt="Mindfulness"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/70 to-transparent p-4">
            <p className="text-white text-sm italic">
              "The present moment is the only time over which we have dominion."
              — Thich Nhat Hanh
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Mindfulness Practices</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {practices.map((practice) => (
          <div
            key={practice.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
          >
            <h3 className="font-semibold text-green-700 mb-1">
              {practice.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {practice.desc}
            </p>
            <button
              onClick={() => toggleDetail(practice.id)}
              className="text-sm text-green-500 hover:underline"
            >
              {activeDetail === practice.id ? "Hide details ↑" : "Learn more →"}
            </button>

            {activeDetail === practice.id && (
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {practice.fullDesc}
                </p>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                  <h4 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">
                    How to Practice:
                  </h4>
                  <ol className="list-decimal list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    {practice.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
                <button
                  className="mt-3 bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded text-sm w-full"
                  onClick={() => {
                    toggleDetail(practice.id);
                    startTimer(5);
                  }}
                >
                  Try 5-minute {practice.title} session
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mindfulness;
