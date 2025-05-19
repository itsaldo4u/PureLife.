// workoutData.ts
export interface Workout {
  id: string;
  title: string;
  desc: string;
  img: string;
  exercises: Exercise[];
  duration: number;
  level: string;
  equipment: string[];
}

export interface Exercise {
  name: string;
  duration: number;
  description: string;
  instructions: string[];
  imageUrl: string;
}

export const workouts: Workout[] = [
  {
    id: "morning-energizer",
    title: "Morning Energizer",
    desc: "A quick 15-minute routine to kickstart your day with energy and focus.",
    img: "/api/placeholder/800/400",
    duration: 15,
    level: "Beginner",
    equipment: ["None", "Yoga mat (optional)"],
    exercises: [
      {
        name: "Jumping Jacks",
        duration: 60,
        description: "A full-body workout that increases your heart rate and warms up your muscles.",
        instructions: [
          "Stand with your feet together and arms at your sides",
          "Jump while spreading your legs and raising your arms above your head",
          "Jump again to return to the starting position",
          "Repeat at a moderate to fast pace",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Push-ups",
        duration: 45,
        description: "Strengthens your chest, shoulders, and triceps.",
        instructions: [
          "Start in a plank position with hands slightly wider than shoulders",
          "Keep your body in a straight line from head to heels",
          "Lower your body until your chest nearly touches the floor",
          "Push back up to the starting position",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Mountain Climbers",
        duration: 60,
        description: "A dynamic exercise that builds core strength and raises your heart rate.",
        instructions: [
          "Start in a high plank position",
          "Drive one knee toward your chest",
          "Quickly switch legs, bringing the other knee forward",
          "Continue alternating at a rapid pace",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Plank",
        duration: 45,
        description: "Strengthens your core, back, and shoulders.",
        instructions: [
          "Start on your forearms and toes",
          "Keep your body in a straight line from head to heels",
          "Engage your core and hold the position",
          "Breathe normally throughout",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
    ],
  },
  {
    id: "strength-builder",
    title: "Strength Builder",
    desc: "Focus on building functional strength with this 30-minute full-body workout.",
    img: "/api/placeholder/800/400",
    duration: 30,
    level: "Intermediate",
    equipment: ["Dumbbells", "Resistance bands"],
    exercises: [
      {
        name: "Goblet Squats",
        duration: 60,
        description: "Builds lower body strength with focus on quads, hamstrings and glutes.",
        instructions: [
          "Hold a dumbbell or kettlebell close to your chest",
          "Stand with feet shoulder-width apart",
          "Lower into a squat position, keeping knees in line with toes",
          "Drive through your heels to return to standing position",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Bent-Over Rows",
        duration: 60,
        description: "Strengthens the upper back and improves posture.",
        instructions: [
          "Holding dumbbells, hinge at hips with knees slightly bent",
          "Keep your back flat and core engaged",
          "Pull the weights toward your ribcage, squeezing shoulder blades",
          "Lower weights back down with control",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Romanian Deadlift",
        duration: 60,
        description: "Targets your posterior chain, especially hamstrings and glutes.",
        instructions: [
          "Hold dumbbells in front of your thighs",
          "Hinge at hips, sending butt backward",
          "Lower weights toward the floor, keeping back flat",
          "Drive hips forward to return to standing",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Overhead Press",
        duration: 45,
        description: "Builds shoulder strength and core stability.",
        instructions: [
          "Hold dumbbells at shoulder height",
          "Press weights overhead until arms are fully extended",
          "Lower weights back to shoulders with control",
          "Keep core engaged throughout movement",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
    ],
  },
  {
    id: "flexibility-flow",
    title: "Flexibility Flow",
    desc: "Improve your range of motion and relieve tension with this gentle routine.",
    img: "/api/placeholder/800/400",
    duration: 20,
    level: "All Levels",
    equipment: ["Yoga mat", "Towel"],
    exercises: [
      {
        name: "Cat-Cow Stretch",
        duration: 60,
        description: "Increases spine mobility and relieves tension in back and neck.",
        instructions: [
          "Start on hands and knees in a tabletop position",
          "Inhale, drop belly toward mat, and look up (cow)",
          "Exhale, round spine toward ceiling and tuck chin (cat)",
          "Flow between positions with your breath",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Seated Forward Fold",
        duration: 45,
        description: "Stretches hamstrings, lower back, and calves.",
        instructions: [
          "Sit with legs extended forward",
          "Hinge at hips and reach toward toes",
          "Keep spine lengthened, avoid rounding",
          "Hold the stretch and breathe deeply",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Low Lunge with Twist",
        duration: 60,
        description: "Opens hip flexors and provides a gentle spinal twist.",
        instructions: [
          "Step one foot forward into a lunge position",
          "Lower back knee to the floor",
          "Place opposite hand or elbow on outside of front knee",
          "Gently twist torso and extend opposite arm upward",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Child's Pose",
        duration: 45,
        description: "A restful pose that stretches hips, thighs, and lower back.",
        instructions: [
          "Kneel on mat with toes together, knees apart",
          "Sit back on heels and extend arms forward",
          "Rest forehead on mat and relax shoulders",
          "Breathe deeply and hold",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
    ],
  },
  {
    id: "cardio-blast",
    title: "Cardio Blast",
    desc: "Boost your heart rate and burn calories with this high-energy workout.",
    img: "/api/placeholder/800/400",
    duration: 25,
    level: "Intermediate",
    equipment: ["None"],
    exercises: [
      {
        name: "High Knees",
        duration: 45,
        description: "Gets your heart rate up quickly and engages your core.",
        instructions: [
          "Stand with feet hip-width apart",
          "Run in place, driving knees toward chest",
          "Pump arms to increase intensity",
          "Maintain rapid pace throughout",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Burpees",
        duration: 60,
        description: "Full-body exercise that builds strength and endurance.",
        instructions: [
          "Start standing, then squat and place hands on floor",
          "Jump feet back into plank position",
          "Perform a push-up (optional)",
          "Jump feet forward to hands, then explosively jump up with arms overhead",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Speed Skaters",
        duration: 45,
        description: "Lateral movement that improves agility and works the outer thighs.",
        instructions: [
          "Start in a small squat and jump sideways to the right",
          "Land on right foot and swing left foot behind right ankle",
          "Touch the floor with left hand if possible",
          "Repeat on the opposite side in a skating motion",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
      {
        name: "Mountain Climbers",
        duration: 60,
        description: "Combines cardio and core work in one dynamic movement.",
        instructions: [
          "Start in a high plank position",
          "Drive one knee toward your chest",
          "Quickly switch legs, bringing the other knee forward",
          "Continue alternating at a rapid pace",
        ],
        imageUrl: "/api/placeholder/400/300",
      },
    ],
  },
];
