import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import ApproachSection from "./components/ApproachSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import NutritionSurvey from "./components/NutritionSurvey";
import NutritionPage from "./pages/NutritionPage";
import ExercisePage from "./pages/ExercizePage";
import Mindfulness from "./pages/Mindfulness";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/survey" element={<NutritionSurvey />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
      </Routes>
    </Router>
  );
}

export default App;
