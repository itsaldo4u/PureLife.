// surveyData.ts
export const surveyQuestions = {
  nutrition: [
    {
      question: "How often do you eat fruits and vegetables?",
      name: "fruits",
      options: [
        { value: "often", label: "Often (5+ servings daily)" },
        { value: "sometimes", label: "Sometimes (2–4 servings daily)" },
        { value: "rarely", label: "Rarely (0–1 servings daily)" },
      ],
    },
    {
      question: "How often do you consume adequate protein?",
      name: "protein",
      options: [
        { value: "often", label: "Often (With most meals)" },
        { value: "sometimes", label: "Sometimes (With some meals)" },
        { value: "rarely", label: "Rarely (Minimal protein)" },
      ],
    },
    {
      question: "How often do you drink water?",
      name: "water",
      options: [
        { value: "often", label: "Often (8+ glasses daily)" },
        { value: "sometimes", label: "Sometimes (4–7 glasses daily)" },
        { value: "rarely", label: "Rarely (0–3 glasses daily)" },
      ],
    },
  ],
  lifestyle: [
    {
      question: "How often do you eat processed foods?",
      name: "processedFoods",
      options: [
        { value: "often", label: "Often (Multiple times daily)" },
        { value: "sometimes", label: "Sometimes (A few times weekly)" },
        { value: "rarely", label: "Rarely (Minimal processed foods)" },
      ],
    },
    {
      question: "How often do you exercise?",
      name: "exercise",
      options: [
        { value: "often", label: "Often (4+ times weekly)" },
        { value: "sometimes", label: "Sometimes (1–3 times weekly)" },
        { value: "rarely", label: "Rarely (Less than weekly)" },
      ],
    },
    {
      question: "How often do you get adequate sleep (7–9 hours)?",
      name: "sleep",
      options: [
        { value: "often", label: "Often (Most nights)" },
        { value: "sometimes", label: "Sometimes (A few nights weekly)" },
        { value: "rarely", label: "Rarely (Seldom get enough sleep)" },
      ],
    },
  ],
  wellbeing: [
    {
      question: "How often do you feel stressed?",
      name: "stress",
      options: [
        { value: "often", label: "Often (Daily stress)" },
        { value: "sometimes", label: "Sometimes (Occasional stress)" },
        { value: "rarely", label: "Rarely (Minimal stress)" },
      ],
    },
    {
      question: "What are your main health goals?",
      name: "goals",
      type: "textarea",
      placeholder: "I want to improve my energy levels, sleep better, etc.",
    },
  ],
};
