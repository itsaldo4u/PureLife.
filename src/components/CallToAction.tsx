import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#e6f9e6] to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl px-8 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Join thousands of people who have transformed their lives with our
          holistic approach to health and wellness.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/survey")}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition flex items-center gap-1"
          >
            Get Started →
          </button>
          <button className="border border-green-500 text-green-600 font-semibold py-2 px-6 rounded-full hover:bg-green-50 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
