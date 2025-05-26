import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { surveyQuestions } from "../data/surveyData"; // Import the survey data

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (step === 1) {
      setNutritionAnswers({ ...nutritionAnswers, [name]: value });
    } else if (step === 2) {
      setLifestyleAnswers({ ...lifestyleAnswers, [name]: value });
    } else {
      setWellbeingAnswers({ ...wellbeingAnswers, [name]: value });
    }
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getScore = () => {
    const allAnswers = {
      ...nutritionAnswers,
      ...lifestyleAnswers,
      ...wellbeingAnswers,
    };
    let score = 0;
    Object.values(allAnswers).forEach((val) => {
      if (val === "often") score += 10;
      else if (val === "sometimes") score += 5;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#e6f9e6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-green-600 hover:underline"
        >
          ← Back to Home
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">
          <span className="text-green-600">
            {step === 1
              ? "Nutrition Assessment"
              : step === 2
              ? "Your Lifestyle"
              : step === 3
              ? "Your Wellbeing"
              : "Your Personalized Results"}
          </span>
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-500">
        {step < 4 ? (
          <form className="space-y-6">
            {step === 1 &&
              surveyQuestions.nutrition.map((question) => (
                <div key={question.name}>
                  <p className="font-medium text-gray-700 text-lg">
                    {question.question}
                  </p>
                  <div className="space-y-1 mt-2">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name={question.name}
                          value={option.value}
                          className="accent-green-600"
                          onChange={handleChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

            {step === 2 &&
              surveyQuestions.lifestyle.map((question) => (
                <div key={question.name}>
                  <p className="font-medium text-gray-700 text-lg">
                    {question.question}
                  </p>
                  <div className="space-y-1 mt-2">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name={question.name}
                          value={option.value}
                          className="accent-green-600"
                          onChange={handleChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

            {step === 3 &&
              surveyQuestions.wellbeing.map((question) => (
                <div key={question.name}>
                  <p className="font-medium text-gray-700 text-lg">
                    {question.question}
                  </p>
                  {question.type === "textarea" ? (
                    <textarea
                      name={question.name}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                      placeholder={question.placeholder}
                      onChange={handleChange}
                    ></textarea>
                  ) : (
                    <div className="space-y-1 mt-2">
                      {question.options.map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name={question.name}
                            value={option.value}
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

            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                >
                  ← Previous
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2 transition ease-in-out duration-200"
              >
                {step === 3 ? "See Results" : "Next →"}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Personalized Results
            </h2>
            <p className="text-gray-600 mb-6">
              Based on your answers, we've prepared the following
              recommendations:
            </p>
            <p className="font-medium text-lg text-gray-800 mb-2">
              Your Wellness Score
            </p>
            <div className="text-3xl font-bold text-green-600 mb-4">
              {getScore()} / 70
            </div>
            <p className="font-semibold text-red-500 mb-2">
              Needs Improvement Category
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 pl-5">
              <li>Start with small, sustainable changes</li>
              <li>Add one serving of vegetables to each meal</li>
              <li>Reduce processed food intake gradually</li>
              <li>Begin a simple exercise routine like walking</li>
            </ul>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Edit Responses
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Continue to Nutrition
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionSurvey;
