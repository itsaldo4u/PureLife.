import NutritionHero from "../components/nutrition/NutritionHero";
import NutritionPhilosophy from "../components/nutrition/NutritionPhilosophy";
import NutritionTips from "../components/nutrition/NutritionTips";
import Testimonials from "../components/nutrition/Testimonials";
import NewsletterSignup from "../components/nutrition/NewsletterSignup";

// import tips & testimonials as data
import { tips, testimonials } from "../data/nutritionTips";

const NutritionPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="mb-8">{/* back nav button */}</nav>

      <NutritionHero />
      <NutritionPhilosophy />
      <NutritionTips tips={tips} />
      <Testimonials testimonials={testimonials} />
      <NewsletterSignup />
    </div>
  );
};

export default NutritionPage;
