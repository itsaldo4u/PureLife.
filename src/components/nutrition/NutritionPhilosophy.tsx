const NutritionPhilosophy = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
      Our Philosophy
    </h2>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <p className="text-gray-700 mb-4">
          At PureLife, we believe nutrition should be personalized, enjoyable,
          and sustainable. Our approach focuses on nutrient-dense whole foods
          that provide your body with the building blocks it needs to thrive.
        </p>
        <p className="text-gray-700">
          We don't advocate for restrictive diets or quick fixes. Instead, we
          encourage mindful eating, balanced meals, and a positive relationship
          with food.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src="fruits.jpg"
          alt="Healthy food variety"
          className="rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  </section>
);

export default NutritionPhilosophy;
