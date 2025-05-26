import { useState } from "react";

type Tip = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
};

interface NutritionTipsProps {
  tips: Tip[];
}

const NutritionTips = ({ tips }: NutritionTipsProps) => {
  const [selectedTip, setSelectedTip] = useState<number | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
        Nutrition Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
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
                className="text-green-600 hover:text-green-800 font-medium hover:underline transition-colors"
              >
                {selectedTip === tip.id ? "Show Less" : "Learn More"}
              </button>
              {selectedTip === tip.id && (
                <div className="mt-3 pt-3 border-t border-gray-100 animate-fade-in">
                  <p className="text-gray-700">{tip.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NutritionTips;
