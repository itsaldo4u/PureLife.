import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser, setToken } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.get("http://localhost:5000/users", {
        params: { email },
      });

      const user = res.data.find(
        (u: { password: string }) => u.password === password
      );

      if (user) {
        setUser(user);
        setToken(user.token || "no-token");

        navigate(user.role === "admin" ? "/admin" : "/dashboard");
      } else {
        setError("Email ose fjalëkalim i pasaktë.");
      }
    } catch (err) {
      setError("Gabim gjatë hyrjes. Provo sërish.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f9e6] via-[#cbe6cb] to-[#729b72] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-[#1e1e2f] shadow-xl rounded-2xl p-10 w-full max-w-md"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Mirë se erdhe
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
        )}

        <div className="mb-5">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Shkruaj email-in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Fjalëkalimi
          </label>
          <input
            type="password"
            placeholder="Shkruaj fjalëkalimin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
        >
          Hyr në llogari
        </button>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Nuk ke një llogari?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-800 font-semibold underline transition"
          >
            Regjistrohu
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
