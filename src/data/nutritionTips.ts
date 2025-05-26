// src/data/nutritionData.ts

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

export const tips: Tip[] = [
  {
    id: 1,
    title: "Eat the Rainbow",
    description: "Include a variety of colorful fruits and vegetables in your diet.",
    image: "powerplant.jpg",
    details: "Different colors represent different nutrients, so a colorful plate ensures a broad range of vitamins and minerals.",
  },
  {
    id: 2,
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day.",
    image: "hydration.jpg",
    details: "Proper hydration supports digestion, energy levels, and overall health. Aim for at least 8 cups a day.",
  },
  {
    id: 3,
    title: "Mindful Eating",
    description: "Pay attention to your hunger and fullness cues.",
    image: "mindeating.jpg",
    details: "Eating mindfully helps prevent overeating and enhances the enjoyment of meals.",
  },
  {
   id: 4,
    title: "Meal Preparation",
    description:
      "Planning and preparing meals in advance helps maintain healthy eating patterns.",
    image: "mealcook.jpg",
    details:
      "Dedicate 1-2 hours each weekend to prep ingredients, portion snacks, and prepare versatile base foods like grains and proteins.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ella M.",
    text: "PureLife helped me regain control of my eating habits. I feel more energized and balanced every day!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "I used to struggle with meal planning. The tips and support I found here made a huge difference.",
    rating: 4,
  },
  {
    name: "Nina P.",
    text: "The personalized advice was exactly what I needed to kickstart my wellness journey.",
    rating: 5,
  },
];
