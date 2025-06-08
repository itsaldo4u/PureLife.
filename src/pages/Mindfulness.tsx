// src/pages/Mindfulness.tsx (Simple Version)
import React, { useEffect } from "react";
import Mindfulness from "../components/mindfulness/Mindfulness";

const MindfulnessPage: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "Mindfulness Center | Your Wellness App";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Find inner peace through guided meditation practices. Start your mindfulness journey with breathing exercises, body scans, and loving-kindness meditation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Find inner peace through guided meditation practices. Start your mindfulness journey with breathing exercises, body scans, and loving-kindness meditation.";
      document.head.appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Your Wellness App";
    };
  }, []);

  return (
    <main>
      <Mindfulness />
    </main>
  );
};

export default MindfulnessPage;
