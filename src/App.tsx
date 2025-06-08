import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import NutritionSurvey from "./components/NutritionSurvey";
import NutritionPage from "./pages/NutritionPage";
import ExercisePage from "./pages/ExercizePage";
import Mindfulness from "./pages/Mindfulness";
import HomePage from "./pages/HomePage";
import About from "./components/About";
import ApproachSection from "./components/ApproachSection";
import Contact from "./components/Contact";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/survey" element={<NutritionSurvey />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/about" element={<About />} />
        <Route path="/aproach" element={<ApproachSection />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
