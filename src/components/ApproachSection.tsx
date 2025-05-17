import { useNavigate } from "react-router-dom";

const cards = [
  {
    title: "Mindful Nutrition",
    description:
      "Discover wholesome, nutrient-rich foods that fuel your body and support overall health.",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
    path: "/tips", // Path for Mindful Nutrition
  },
  {
    title: "Regular Exercise",
    description:
      "Find activities you enjoy that keep you moving and help maintain physical strength and flexibility.",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    path: "/exercise", // Path for Regular Exercise
  },
  {
    title: "Mindfulness Practice",
    description:
      "Cultivate awareness and presence through meditation and mindfulness techniques.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    path: "/mindfulness", // Path for Mindfulness Practice
  },
];

const ApproachSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-green-600">
          Our Approach to Wellness
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We believe in a holistic approach to health that nurtures your mind,
          body, and spirit for a balanced life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <button
                onClick={() => navigate(card.path)} // Navigate to the specified path
                className="text-green-600 font-medium flex items-center gap-1 hover:underline bg-transparent border-none cursor-pointer p-0"
              >
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
