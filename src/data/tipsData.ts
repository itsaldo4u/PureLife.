// Tip and Testimonial types
export type Tip = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
};

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

// Nutrition tips data
export const tips: Tip[] = [
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

// Testimonials data
export const testimonials: Testimonial[] = [
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
