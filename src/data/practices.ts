// data/practices.ts
import type { Practice } from "../types/mindfulness";

export const practices: Practice[] = [
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
    icon: "🫁",
    color: "from-blue-400 to-blue-600",
    difficulty: "Beginner",
    benefits: ["Reduces stress", "Improves focus", "Calms the mind"],
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
    icon: "🧘‍♀️",
    color: "from-purple-400 to-purple-600",
    difficulty: "Intermediate",
    benefits: [
      "Releases tension",
      "Improves body awareness",
      "Promotes relaxation",
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
    icon: "💝",
    color: "from-pink-400 to-pink-600",
    difficulty: "Intermediate",
    benefits: [
      "Increases compassion",
      "Reduces negative emotions",
      "Improves relationships",
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
    icon: "🚶‍♀️",
    color: "from-green-400 to-green-600",
    difficulty: "Beginner",
    benefits: [
      "Combines movement with mindfulness",
      "Great for outdoors",
      "Improves awareness",
    ],
  },
  {
    id: "visualization",
    title: "Guided Visualization",
    desc: "Use mental imagery to create a peaceful, restorative experience.",
    fullDesc:
      "Guided visualization uses the power of imagination to create calming mental images. This practice can transport you to peaceful places and help reduce stress while developing concentration and creativity.",
    steps: [
      "Sit or lie down in a comfortable position",
      "Close your eyes and take several deep breaths",
      "Imagine a peaceful place in vivid detail",
      "Engage all your senses in this visualization",
      "Stay present with the imagery and feelings it evokes",
    ],
    icon: "🌅",
    color: "from-orange-400 to-orange-600",
    difficulty: "Advanced",
    benefits: ["Enhances creativity", "Reduces anxiety", "Improves mood"],
  },
  {
    id: "mindfullistening",
    title: "Mindful Listening",
    desc: "Develop deep awareness through focused listening practice.",
    fullDesc:
      "Mindful listening involves paying complete attention to sounds around you without judgment or analysis. This practice can be done with music, nature sounds, or even silence, helping to develop concentration and present-moment awareness.",
    steps: [
      "Find a comfortable position and close your eyes",
      "Listen to the sounds around you without labeling them",
      "Notice the quality, volume, and texture of sounds",
      "When thoughts arise, gently return to listening",
      "End by appreciating the richness of your auditory experience",
    ],
    icon: "👂",
    color: "from-indigo-400 to-indigo-600",
    difficulty: "Beginner",
    benefits: [
      "Improves concentration",
      "Enhances awareness",
      "Calms the mind",
    ],
  },
];