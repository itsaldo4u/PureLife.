import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mt-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">PureLife</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your journey to holistic wellness starts here
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PureLife is dedicated to providing a holistic approach to
              wellness. We believe that true health encompasses physical,
              mental, and emotional well-being, and our platform is designed to
              support you in all these areas.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To create a world where everyone has access to the resources and
              support they need to live their healthiest, most fulfilling life.
              We envision a community where wellness is accessible, sustainable,
              and joyful.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personalized Wellness Plans
              </h3>
              <p className="text-gray-600">
                Customized strategies tailored to your unique needs, goals, and
                lifestyle preferences.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Community Support
              </h3>
              <p className="text-gray-600">
                Connect with like-minded individuals who share your wellness
                journey and goals.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Advice & Resources
              </h3>
              <p className="text-gray-600">
                Access evidence-based guidance from certified wellness
                professionals and experts.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🤝</span>
              </div>
              <h4 className="font-semibold mb-2">Inclusivity</h4>
              <p className="text-sm opacity-90">
                Wellness for everyone, regardless of background
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔬</span>
              </div>
              <h4 className="font-semibold mb-2">Evidence-Based</h4>
              <p className="text-sm opacity-90">
                Grounded in scientific research and proven methods
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🌱</span>
              </div>
              <h4 className="font-semibold mb-2">Sustainable</h4>
              <p className="text-sm opacity-90">
                Long-term lifestyle changes, not quick fixes
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💪</span>
              </div>
              <h4 className="font-semibold mb-2">Empowerment</h4>
              <p className="text-sm opacity-90">
                Tools and knowledge to take control of your health
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of others who have transformed their lives with
            PureLife
          </p>
          <button
            onClick={() => navigate("/aproach")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
