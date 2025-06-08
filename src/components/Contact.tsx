import React, { useState } from "react";
import axios from "axios";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/contacts", formData);
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-green-100 opacity-60"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-blue-100 opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-100 opacity-40"></div>
      </div>

      <div className="relative">
        {/* Header Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-green-600">PureLife</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to start your wellness journey? We're here to guide you
              every step of the way.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-white p-10 border-l-8 border-green-600 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Get in Touch
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </div>

                  {submitMessage && (
                    <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-0 py-4 text-lg border-0 border-b-3 border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300 bg-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-0 py-4 text-lg border-0 border-b-3 border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-300 bg-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 text-lg border-0 border-b-3 border-gray-300 focus:border-purple-600 focus:outline-none transition-colors duration-300 bg-transparent"
                      >
                        <option value="">Choose your topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="wellness">Wellness Consultation</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="feedback">Feedback & Suggestions</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-gray-700 uppercase tracking-wide"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-0 py-4 text-lg border-0 border-b-3 border-gray-300 focus:border-green-600 focus:outline-none transition-colors duration-300 bg-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 transition-all duration-300 transform hover:translate-y-1 disabled:cursor-not-allowed uppercase tracking-wider"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Contact Details */}
                <div className="bg-white p-8 border-l-8 border-blue-600 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Visit Our Office
                        </h4>
                        <p className="text-gray-600">
                          123 Wellness Avenue
                          <br />
                          Health District, HD 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Call Us
                        </h4>
                        <p className="text-gray-600">
                          +1 (555) 123-4567
                          <br />
                          Available 24/7 for emergencies
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Email Us
                        </h4>
                        <p className="text-gray-600">
                          hello@purelife.com
                          <br />
                          support@purelife.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white p-8 border-l-8 border-purple-600 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">
                        Monday - Friday
                      </span>
                      <span className="font-bold text-gray-900">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">
                        Saturday
                      </span>
                      <span className="font-bold text-gray-900">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="font-bold text-red-600">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white"></div>
                      <span className="font-medium">
                        24-hour response guarantee
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white"></div>
                      <span className="font-medium">
                        Free initial consultation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white"></div>
                      <span className="font-medium">
                        Certified wellness experts
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-white"></div>
                      <span className="font-medium">Secure & confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-gray-600 mb-8">
              Follow us on social media for wellness tips and updates
            </p>
            <div className="flex justify-center space-x-6">
              <button className="w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors duration-200">
                <span className="font-bold text-xl">f</span>
              </button>
              <button className="w-16 h-16 bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center transition-colors duration-200">
                <span className="font-bold text-xl">ig</span>
              </button>
              <button className="w-16 h-16 bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center transition-colors duration-200">
                <span className="font-bold text-xl">tw</span>
              </button>
              <button className="w-16 h-16 bg-blue-800 hover:bg-blue-900 text-white flex items-center justify-center transition-colors duration-200">
                <span className="font-bold text-xl">in</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
