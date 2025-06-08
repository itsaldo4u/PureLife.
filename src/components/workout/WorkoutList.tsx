import React, { useState } from "react";
import { workouts } from "../../data/workoutData";

interface WorkoutListProps {
  onStart: (workoutId: string) => void;
}

const WorkoutList: React.FC<WorkoutListProps> = ({ onStart }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Get unique levels and equipment for filtering
  const levels = [
    "all",
    ...new Set(workouts.map((w) => w.level.toLowerCase())),
  ];

  const filteredWorkouts =
    selectedFilter === "all"
      ? workouts
      : workouts.filter(
          (workout) => workout.level.toLowerCase() === selectedFilter
        );

  const getDifficultyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "from-green-400 to-green-500";
      case "intermediate":
        return "from-yellow-400 to-orange-500";
      case "advanced":
        return "from-red-400 to-red-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getDifficultyBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEquipmentIcon = (equipment: string) => {
    const icons: { [key: string]: string } = {
      dumbbell: "🏋️",
      dumbbells: "🏋️",
      barbell: "🏋️‍♂️",
      kettlebell: "🔔",
      "resistance band": "🎗️",
      mat: "🧘‍♀️",
      bodyweight: "💪",
      none: "🤸‍♀️",
      "pull-up bar": "🏃‍♂️",
      bench: "🪑",
    };
    return icons[equipment.toLowerCase()] || "💪";
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="text-center mt-10 mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Move Your Body
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Regular physical activity is essential for maintaining optimal
            health, boosting energy levels, and enhancing your overall quality
            of life. Start your fitness journey today with our carefully curated
            workout programs.
          </p>
        </div>

        <div className="relative mt-8 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="exercise.jpg"
            alt="Fitness and exercise"
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-900/80">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-4xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-3 text-3xl">✨</span>
                Benefits of Regular Exercise
                <span className="ml-3 text-3xl">✨</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                {[
                  { icon: "🧠", text: "Improved mood and mental clarity" },
                  { icon: "⚡", text: "Enhanced energy and reduced fatigue" },
                  { icon: "😴", text: "Better sleep quality" },
                  { icon: "🛡️", text: "Reduced risk of chronic diseases" },
                  { icon: "💪", text: "Stronger muscles and bones" },
                  { icon: "❤️", text: "Better cardiovascular health" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-xl">{benefit.icon}</span>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0 flex items-center">
            <span className="mr-3">🏃‍♂️</span>
            Featured Workouts
          </h2>

          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedFilter(level)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                  selectedFilter === level
                    ? "bg-white text-gray-800 shadow-md transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                {level === "all" ? "All Levels" : level}
              </button>
            ))}
          </div>
        </div>

        {/* Workouts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredCard(workout.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={workout.img}
                  alt={workout.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-800 flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{workout.duration} min</span>
                  </div>
                </div>

                {/* Quick Start Button Overlay */}
                {hoveredCard === workout.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <button
                      onClick={() => onStart(workout.id)}
                      className="bg-white text-gray-800 px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-110 shadow-lg flex items-center space-x-2"
                    >
                      <span>▶️</span>
                      <span>Quick Start</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title and Level */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {workout.title}
                    </h3>
                  </div>

                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyBadgeColor(
                      workout.level
                    )}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${getDifficultyColor(
                        workout.level
                      )} mr-2`}
                    ></div>
                    {workout.level}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {workout.desc}
                </p>

                {/* Equipment Tags */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {workout.equipment.slice(0, 3).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-1 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg px-3 py-1 text-xs text-gray-700"
                      >
                        <span>{getEquipmentIcon(item)}</span>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                    {workout.equipment.length > 3 && (
                      <div className="flex items-center justify-center bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">
                        +{workout.equipment.length - 3} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => onStart(workout.id)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>🚀</span>
                    <span>Start Workout</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkouts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No workouts found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filter or check back later for more content.
            </p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Transform Your Health?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of others who have made fitness a part of their daily
          routine. Start with any workout above and begin your journey to a
          healthier, stronger you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
            View All Workouts
          </button>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-xl font-bold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
            Create Custom Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkoutList;
