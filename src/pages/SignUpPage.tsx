import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const role = "user"; // Vendoset automatikisht

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 3 || password.length < 6) {
      setError(
        "Emri duhet të ketë të paktën 3 shkronja dhe fjalëkalimi 6 karaktere."
      );
      return;
    }

    try {
      // Kontrollo nëse ekziston një përdorues me të njëjtin email
      const res = await axios.get("http://localhost:5000/users", {
        params: { email },
      });

      if (res.data.length > 0) {
        setError("Ky email është përdorur më parë.");
        return;
      }

      // Regjistro përdoruesin e ri
      const newUser = { name, email, password, role };
      await axios.post("http://localhost:5000/users", newUser);

      navigate("/login");
    } catch (err: any) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        setError("Gabim nga serveri: " + err.message);
      } else {
        setError("Gabim gjatë regjistrimit.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#4dd0e1] px-4">
      <form
        onSubmit={handleSignUp}
        className="bg-white dark:bg-[#1e1e2f] shadow-xl rounded-2xl p-10 w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Regjistrohu
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Emri
          </label>
          <input
            type="text"
            placeholder="Shkruaj emrin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Shkruaj email-in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>

        {/* Role is hidden and always set to 'user' */}
        <input type="hidden" value={role} readOnly />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
        >
          Krijo llogari
        </button>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Ke tashmë një llogari?{" "}
          <Link
            to="/login"
            className="text-cyan-600 hover:text-cyan-800 font-semibold underline transition"
          >
            Kyçu këtu
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
