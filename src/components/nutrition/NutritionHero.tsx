import { useNavigate } from "react-router-dom";

const NutritionHero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Nourish Your Body
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl">
        Proper nutrition is the foundation of good health. Discover how whole
        foods, balanced meals, and mindful eating practices can transform your
        wellbeing and energy levels.
      </p>
      <button
        onClick={() => navigate("/survey")}
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
      >
        Take our Nutrition Assessment
      </button>
    </div>
  );
};

export default NutritionHero;
