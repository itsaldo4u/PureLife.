import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SurveyResult {
  score: number;
  suggestions: string[];
  date: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [result, setResult] = useState<SurveyResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completed = localStorage.getItem("surveyCompleted") === "true";
    setSurveyCompleted(completed);

    if (completed) {
      fetch("/data/surveyresult.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch JSON");
          }
          return res.json();
        })
        .then((data: SurveyResult[]) => {
          setResult(data[0]);
          setLoading(false);
        })

        .catch((err) => {
          console.error("Error loading local JSON:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {surveyCompleted && result ? (
        <div className="bg-green-100 p-4 rounded-md">
          <p className="text-green-800 font-medium mb-2">
            You’ve completed the wellness survey ✅
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Your Results
          </h2>
          <p className="text-gray-600 mb-4">Your Wellness Score:</p>
          <p className="text-5xl font-bold text-green-600 mb-6">
            {result.score} / 70
          </p>

          <div className="text-left">
            <p className="font-semibold text-red-500 mb-2">Suggestions:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {result.suggestions && result.suggestions.length > 0 ? (
                result.suggestions.map((sug, idx) => <li key={idx}>{sug}</li>)
              ) : (
                <li>No suggestions available.</li>
              )}
            </ul>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={() => navigate("/nutrition")}
          >
            View Nutrition Tips
          </button>
        </div>
      ) : (
        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-yellow-800 font-medium">
            You haven’t completed the survey yet.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => navigate("/survey")}
          >
            Start Survey →
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
