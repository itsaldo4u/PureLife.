import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { surveyQuestions } from "../data/surveyData";
import { motion, AnimatePresence } from "framer-motion";
import { FaAppleAlt, FaRunning, FaSmile } from "react-icons/fa";
import axios from "axios";
import type { TextareaQuestion, RadioQuestion } from "../data/surveyTypes";

const NutritionSurvey: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [nutritionAnswers, setNutritionAnswers] = useState({
    fruits: "",
    protein: "",
    water: "",
  });
  const [lifestyleAnswers, setLifestyleAnswers] = useState({
    processedFoods: "",
    exercise: "",
    sleep: "",
  });
  const [wellbeingAnswers, setWellbeingAnswers] = useState({
    stress: "",
    goals: "",
  });

  // Ruaj progresin në localStorage
  useEffect(() => {
    const savedNutrition = localStorage.getItem("nutritionAnswers");
    const savedLifestyle = localStorage.getItem("lifestyleAnswers");
    const savedWellbeing = localStorage.getItem("wellbeingAnswers");
    const savedStep = localStorage.getItem("surveyStep");

    if (savedNutrition) setNutritionAnswers(JSON.parse(savedNutrition));
    if (savedLifestyle) setLifestyleAnswers(JSON.parse(savedLifestyle));
    if (savedWellbeing) setWellbeingAnswers(JSON.parse(savedWellbeing));
    if (savedStep) setStep(Number(savedStep));
  }, []);

  useEffect(() => {
    localStorage.setItem("nutritionAnswers", JSON.stringify(nutritionAnswers));
  }, [nutritionAnswers]);

  useEffect(() => {
    localStorage.setItem("lifestyleAnswers", JSON.stringify(lifestyleAnswers));
  }, [lifestyleAnswers]);

  useEffect(() => {
    localStorage.setItem("wellbeingAnswers", JSON.stringify(wellbeingAnswers));
  }, [wellbeingAnswers]);

  useEffect(() => {
    localStorage.setItem("surveyStep", step.toString());
  }, [step]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (step === 1) setNutritionAnswers({ ...nutritionAnswers, [name]: value });
    else if (step === 2)
      setLifestyleAnswers({ ...lifestyleAnswers, [name]: value });
    else setWellbeingAnswers({ ...wellbeingAnswers, [name]: value });
  };

  const handleNext = () => {
    if (step === 3) {
      setStep(4);
      submitSurvey(); // Në momentin që shkojmë te rezultati, dërgo të dhënat
    } else {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));

  const getScore = () => {
    const allAnswers = {
      ...nutritionAnswers,
      ...lifestyleAnswers,
      ...wellbeingAnswers,
    };
    return Object.values(allAnswers).reduce((acc, val) => {
      return acc + (val === "often" ? 10 : val === "sometimes" ? 5 : 0);
    }, 0);
  };

  const submitSurvey = async () => {
    const score = getScore();
    const summary = {
      score,
      suggestions: [
        "Try daily walks or light workouts",
        "Replace soda with water",
        "Plan meals to avoid processed foods",
      ],
      date: new Date().toISOString(),
      nutritionAnswers,
      lifestyleAnswers,
      wellbeingAnswers,
    };

    try {
      await axios.post("http://localhost:5000/surveyResults", summary);
      console.log("Survey result saved!");
      localStorage.setItem("surveyCompleted", "true");
    } catch (err) {
      console.error("Error saving survey result:", err);
    }
  };

  const currentQuestions =
    step === 1
      ? surveyQuestions.nutrition
      : step === 2
      ? surveyQuestions.lifestyle
      : surveyQuestions.wellbeing;

  const icons = {
    1: <FaAppleAlt className="text-green-500 text-3xl" />,
    2: <FaRunning className="text-orange-500 text-3xl" />,
    3: <FaSmile className="text-blue-500 text-3xl" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 relative">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`bg-green-500 h-3 rounded-full transition-all duration-300`}
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-500 hover:text-green-600"
          >
            ← Home
          </button>
          <p className="text-lg font-semibold text-gray-700">
            {step === 1
              ? "Step 1: Nutrition"
              : step === 2
              ? "Step 2: Lifestyle"
              : step === 3
              ? "Step 3: Wellbeing"
              : "Step 4: Results"}
          </p>
          <div>{icons[step as 1 | 2 | 3]}</div>
        </div>

        <AnimatePresence mode="wait">
          {step < 4 ? (
            <motion.form
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {currentQuestions.map((question) => (
                <div key={question.name}>
                  <p className="font-medium text-gray-800 text-lg">
                    {question.question}
                  </p>
                  {question.type === "textarea" ? (
                    <textarea
                      name={question.name}
                      value={
                        step === 1
                          ? nutritionAnswers[
                              question.name as keyof typeof nutritionAnswers
                            ]
                          : step === 2
                          ? lifestyleAnswers[
                              question.name as keyof typeof lifestyleAnswers
                            ]
                          : wellbeingAnswers[
                              question.name as keyof typeof wellbeingAnswers
                            ]
                      }
                      className="w-full mt-2 p-2 border rounded-md"
                      placeholder={(question as TextareaQuestion).placeholder}
                      onChange={handleChange}
                    ></textarea>
                  ) : (
                    <div className="space-y-1 mt-2">
                      {(question as RadioQuestion).options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={question.name}
                            value={option.value}
                            checked={
                              step === 1
                                ? nutritionAnswers[
                                    question.name as keyof typeof nutritionAnswers
                                  ] === option.value
                                : step === 2
                                ? lifestyleAnswers[
                                    question.name as keyof typeof lifestyleAnswers
                                  ] === option.value
                                : wellbeingAnswers[
                                    question.name as keyof typeof wellbeingAnswers
                                  ] === option.value
                            }
                            className="accent-green-600"
                            onChange={handleChange}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
                  >
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
                >
                  {step === 3 ? "Finish →" : "Next →"}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Your Results
              </h2>
              <p className="text-gray-600 mb-4">Your Wellness Score:</p>
              <p className="text-5xl font-bold text-green-600 mb-6">
                {getScore()} / 70
              </p>

              <div className="text-left">
                <p className="font-semibold text-red-500 mb-2">Suggestions:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Try daily walks or light workouts</li>
                  <li>Replace soda with water</li>
                  <li>Plan meals to avoid processed foods</li>
                </ul>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800"
                >
                  Edit Answers
                </button>
                <button
                  onClick={() => navigate("/nutrition")}
                  className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NutritionSurvey;
