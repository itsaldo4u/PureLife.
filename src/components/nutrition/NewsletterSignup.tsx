import axios from "axios";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "", type: null });

    try {
      console.log("Checking subscribers...");
      const response = await axios.get("http://localhost:5000/subscribers");
      const subscribers = response.data;

      console.log("Current subscribers:", subscribers);

      if (subscribers.some((sub: { email: string }) => sub.email === email)) {
        setStatus({
          message: "This email is already subscribed!",
          type: "error",
        });
        return;
      }

      console.log("Posting new subscriber...");
      await axios.post("http://localhost:5000/subscribers", {
        id: Date.now(),
        email: email,
        subscribedAt: new Date().toISOString(),
      });

      setStatus({
        message: "Thank you for subscribing!",
        type: "success",
      });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus({
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <section className="bg-green-100 rounded-lg p-8 mb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Get Nutrition Tips in Your Inbox
        </h2>
        <p className="text-gray-700 mb-6">
          Sign up for our newsletter to receive weekly nutrition tips, healthy
          recipes, and exclusive content.
        </p>

        {status.type === "success" ? (
          <div className="bg-green-200 text-green-800 p-4 rounded-md">
            {status.message}
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-300 flex-grow max-w-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Subscribe
            </button>
          </form>
        )}

        {status.message && status.type === "error" && (
          <p className="text-red-600 mt-3">{status.message}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
