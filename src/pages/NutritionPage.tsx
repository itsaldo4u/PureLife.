import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tips = [
  {
    id: 1,
    title: "Plant-Based Power",
    description:
      "Incorporate more plant-based foods into your diet for increased fiber, vitamins, and minerals.",
    image: "/api/placeholder/300/200",
    details:
      "Focus on colorful vegetables, legumes, whole grains, nuts, and seeds. Try having at least one meatless meal per day to boost your plant intake.",
  },
  {
    id: 2,
    title: "Mindful Eating",
    description:
      "Pay attention to hunger cues and eat slowly to enjoy your food and prevent overeating.",
    image: "/api/placeholder/300/200",
    details:
      "Turn off screens while eating, chew thoroughly, and pause between bites. Check in with your hunger level halfway through your meal.",
  },
  {
    id: 3,
    title: "Hydration Habits",
    description:
      "Drink at least 8 glasses of water daily to stay hydrated and support all bodily functions.",
    image: "/api/placeholder/300/200",
    details:
      "Carry a reusable water bottle, set reminders, and add natural flavors like lemon or cucumber to make water more appealing.",
  },
  {
    id: 4,
    title: "Meal Preparation",
    description:
      "Planning and preparing meals in advance helps maintain healthy eating patterns.",
    image: "/api/placeholder/300/200",
    details:
      "Dedicate 1-2 hours each weekend to prep ingredients, portion snacks, and prepare versatile base foods like grains and proteins.",
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    text: "Following PureLife's nutrition advice helped me gain more energy and improved my digestion within just two weeks!",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "The personalized approach made all the difference. I'm eating better without feeling restricted or deprived.",
    rating: 4,
  },
  {
    name: "Jessica W.",
    text: "The meal prep tips saved me so much time and helped me stay consistent with healthy eating, even on busy days.",
    rating: 5,
  },
];

const NutritionPage = () => {
  const navigate = useNavigate();
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState<{
    mealFrequency: string;
    waterIntake: string;
    vegetables: string;
    dietaryRestrictions: string;
  }>({
    mealFrequency: "",
    waterIntake: "",
    vegetables: "",
    dietaryRestrictions: "",
  });

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Here you would typically send this to your backend
    }
  };

  const handleAssessmentChange = (field: string, value: string) => {
    setAssessmentAnswers({
      ...assessmentAnswers,
      [field]: value,
    });
  };

  const submitAssessment = () => {
    // Process assessment results
    setShowAssessment(false);
    alert(
      "Thank you for completing the assessment! We'll prepare your personalized plan."
    );
  };

  const renderAssessment = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Nutrition Assessment
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            How many meals do you typically eat per day?
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={assessmentAnswers.mealFrequency}
            onChange={(e) =>
              handleAssessmentChange("mealFrequency", e.target.value)
            }
          >
            <option value="">Select an option</option>
            <option value="1-2">1-2 meals</option>
            <option value="3">3 meals</option>
            <option value="4-5">4-5 meals</option>
            <option value="6+">6+ meals</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            How much water do you drink daily?
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={assessmentAnswers.waterIntake}
            onChange={(e) =>
              handleAssessmentChange("waterIntake", e.target.value)
            }
          >
            <option value="">Select an option</option>
            <option value="less-than-4">Less than 4 glasses</option>
            <option value="4-6">4-6 glasses</option>
            <option value="7-8">7-8 glasses</option>
            <option value="more-than-8">More than 8 glasses</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            How many servings of vegetables do you eat daily?
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={assessmentAnswers.vegetables}
            onChange={(e) =>
              handleAssessmentChange("vegetables", e.target.value)
            }
          >
            <option value="">Select an option</option>
            <option value="0-1">0-1 servings</option>
            <option value="2-3">2-3 servings</option>
            <option value="4-5">4-5 servings</option>
            <option value="6+">6+ servings</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Do you have any dietary restrictions?
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows={3}
            value={assessmentAnswers.dietaryRestrictions}
            onChange={(e) =>
              handleAssessmentChange("dietaryRestrictions", e.target.value)
            }
            placeholder="Please describe any allergies, intolerances, or dietary preferences..."
          ></textarea>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setShowAssessment(false)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={submitAssessment}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Assessment
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-green-600 hover:text-green-800 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </button>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Nourish Your Body
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Proper nutrition is the foundation of good health. Discover how whole
          foods, balanced meals, and mindful eating practices can transform your
          wellbeing and energy levels.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setShowAssessment(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
          >
            Take our Nutrition Assessment
          </button>
        </div>
      </div>

      {showAssessment && renderAssessment()}

      {/* Philosophy Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          Our Philosophy
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              At PureLife, we believe nutrition should be personalized,
              enjoyable, and sustainable. Our approach focuses on nutrient-dense
              whole foods that provide your body with the building blocks it
              needs to thrive.
            </p>
            <p className="text-gray-700">
              We don't advocate for restrictive diets or quick fixes. Instead,
              we encourage mindful eating, balanced meals, and a positive
              relationship with food.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Healthy food variety"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Nutrition Tips Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          Nutrition Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <button
                  onClick={() =>
                    setSelectedTip(selectedTip === tip.id ? null : tip.id)
                  }
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  {selectedTip === tip.id ? "Show Less" : "Learn More"}
                </button>
                {selectedTip === tip.id && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-700">{tip.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="text-gray-800 font-medium">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-100 rounded-lg p-8 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Get Nutrition Tips in Your Inbox
          </h2>
          <p className="text-gray-700 mb-6">
            Sign up for our newsletter to receive weekly nutrition tips, healthy
            recipes, and exclusive content.
          </p>

          {subscribed ? (
            <div className="bg-green-200 text-green-800 p-4 rounded-md">
              Thank you for subscribing! Check your inbox soon for nutrition
              tips.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow max-w-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to transform your nutrition?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/consultation")}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => navigate("/recipes")}
            className="px-6 py-3 bg-white border border-green-600 text-green-600 rounded-md hover:bg-green-50"
          >
            Explore Recipes
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 mt-16 text-center text-gray-600">
        <p>© 2025 PureLife Nutrition. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NutritionPage;
