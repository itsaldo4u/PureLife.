import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import ApproachSection from "./components/ApproachSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import NutritionSurvey from "./pages/NutritionSurvey";
import NutritionPage from "./pages/NutritionPage";
import ExercisePage from "./pages/ExercizePage";
import WorkoutDetailPage from "./components/WorkoutDetailPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ApproachSection />
              <CallToAction />
              <Footer />
            </>
          }
        />
        <Route path="/survey" element={<NutritionSurvey />} />
        <Route path="/tips" element={<NutritionPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/workout/:id" element={<WorkoutDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
