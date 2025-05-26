import { useState } from "react";
import axios from "axios";

type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.text || form.rating === 0) return;

    try {
      await axios.post("http://localhost:5000/testimonials", form);

      setForm({ name: "", text: "", rating: 0 });
      setSuccessMessage("Faleminderit! Komenti u dërgua me sukses.");

      setTimeout(() => setSuccessMessage(""), 3000); // Fshihet pas 3 sekondash
    } catch (error) {
      console.error("Failed to submit testimonial:", error);
      setSuccessMessage("Diçka shkoi keq. Ju lutemi provoni sërish.");
    }
  };

  const renderStars = (rating: number, setRating?: (r: number) => void) =>
    [...Array(5)].map((_, i) => (
      <svg
        key={i}
        onClick={() => setRating && setRating(i + 1)}
        className={`w-5 h-5 cursor-pointer ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364.93l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-.93L2.98 9.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg p-6 hover:bg-green-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
            <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
            <p className="text-gray-800 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-lg p-6 shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">Leave Your Testimonial</h3>

        {successMessage && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-3 text-sm transition-all duration-300">
            {successMessage}
          </div>
        )}

        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 rounded mb-3"
          required
        />
        <textarea
          placeholder="Your comment"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className="w-full border p-2 rounded mb-3"
          required
        />
        <div className="flex items-center mb-4">
          <span className="mr-2 text-gray-700">Your Rating:</span>
          {renderStars(form.rating, (r) => setForm({ ...form, rating: r }))}
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Testimonials;
