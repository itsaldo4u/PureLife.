import heroImage from "../assets/hnutrition.jpg"; // kontrollo që emri dhe rruga janë të sakta

const Hero = () => {
  return (
    <section className="bg-[#fefef9] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Teksti në të majtë */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-green-600">Pure</span>
            <span className="text-[#4b3f2f]">Life</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Embrace a healthier lifestyle with our holistic approach to
            wellness, nutrition, and mindfulness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition">
              Get Started →
            </button>
            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Imazhi në të djathtë */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Wellness lifestyle"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Seksioni me statistika poshtë */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-green-500 text-2xl mb-2">😊</div>
          <h3 className="text-xl font-semibold">10K+</h3>
          <p className="text-gray-500">Happy Users</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-green-500 text-2xl mb-2">💚</div>
          <h3 className="text-xl font-semibold">50+</h3>
          <p className="text-gray-500">Wellness Experts</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-green-500 text-2xl mb-2">🍃</div>
          <h3 className="text-xl font-semibold">200+</h3>
          <p className="text-gray-500">Natural Recipes</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="text-green-500 text-2xl mb-2">🌞</div>
          <h3 className="text-xl font-semibold">365</h3>
          <p className="text-gray-500">Days of Wellness</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
