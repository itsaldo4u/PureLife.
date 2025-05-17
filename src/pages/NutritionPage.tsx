import { useNavigate } from "react-router-dom";

const tips = [
  {
    title: "Plant-Based Power",
    description:
      "Incorporate more plant-based foods into your diet for increased fiber, vitamins, and minerals.",
  },
  {
    title: "Mindful Eating",
    description:
      "Pay attention to hunger cues and eat slowly to enjoy your food and prevent overeating.",
  },
  {
    title: "Hydration Habits",
    description:
      "Drink at least 8 glasses of water daily to stay hydrated and support all bodily functions.",
  },
  {
    title: "Meal Preparation",
    description:
      "Planning and preparing meals in advance helps maintain healthy eating patterns.",
  },
];

const NutritionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-green-600 hover:underline"
        >
          ← Back to Home
        </button>
      </div>

      <div className="container mx-auto p-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Nourish Your Body
        </h1>
        <p className="text-center text-lg mb-8">
          Proper nutrition is the foundation of good health. Discover how whole
          foods, balanced meals, and mindful eating practices can transform your
          wellbeing and energy levels.
        </p>

        {/* Philosophy Section */}
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Our Philosophy</h2>
          <p className="mb-4">
            At PureLife, we believe nutrition should be personalized, enjoyable,
            and sustainable. Our approach focuses on nutrient-dense whole foods
            that provide your body with the building blocks it needs to thrive.
            We don't advocate for restrictive diets or quick fixes. Instead, we
            encourage mindful eating, balanced meals, and a positive
            relationship with food.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Take our Nutrition Assessment
          </button>
        </div>

        {/* Nutrition Tips Section */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Nutrition Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold">{tip.title}</h4>
              <p className="mb-4">{tip.description}</p>
              <button
                onClick={() => navigate("/tips")}
                className="text-green-500 hover:underline"
              >
                View Tip
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
