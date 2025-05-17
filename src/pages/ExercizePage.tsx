import { useNavigate } from "react-router-dom";

const ExercisePage = () => {
  const navigate = useNavigate();

  const workouts = [
    {
      id: "morning-energizer",
      title: "Morning Energizer",
      desc: "A quick 15-minute routine to kickstart your day with energy and focus.",
      img: "https://images.unsplash.com/photo-1540483761267-4e4c5b4b6013?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "strength-builder",
      title: "Strength Builder",
      desc: "Focus on building functional strength with this 30-minute full-body workout.",
      img: "https://images.unsplash.com/photo-1571019613914-85f342c65a5d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flexibility-flow",
      title: "Flexibility Flow",
      desc: "Improve your range of motion and relieve tension with this gentle routine.",
      img: "https://images.unsplash.com/photo-1603398938378-027e8f0a04fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cardio-blast",
      title: "Cardio Blast",
      desc: "Boost your heart rate and burn calories with this high-energy workout.",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2f61?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-8 text-gray-800">
      {/* Back to Home */}
      <div className="text-sm mb-4">
        <a href="/" className="text-gray-600 hover:underline flex items-center">
          ← Back to Home
        </a>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold">
        <span className="text-green-600">Regular</span> Exercise
      </h1>

      {/* Move Your Body Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Move Your Body</h2>
        <p className="text-gray-600 max-w-2xl">
          Regular physical activity is essential for both physical and mental
          wellbeing. Our approach focuses on finding enjoyable ways to move your
          body that you can sustain for the long term.
        </p>

        {/* Benefits with Zoomed Image */}
        <div className="relative mt-6 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80"
            alt="Benefits of Regular Exercise"
            className="w-full h-72 object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-green-900/60 flex flex-col justify-center px-6 text-white">
            <h3 className="text-lg font-semibold mb-2">
              Benefits of Regular Exercise
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Improved mood and mental clarity</li>
              <li>• Enhanced energy and reduced fatigue</li>
              <li>• Better sleep quality</li>
              <li>• Reduced risk of chronic diseases</li>
              <li>• Stronger muscles and bones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Workouts Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Featured Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={workout.img}
                alt={workout.title}
                className="w-full h-48 object-cover object-center scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{workout.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{workout.desc}</p>
                <button
                  onClick={() => navigate(`/workout/${workout.id}`)}
                  className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600"
                >
                  Start Workout
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExercisePage;
