import type { Workout } from "./types";

export const workoutsData: Workout[] = [
  {
    id: 1,
    name: "Glutes & Hamstrings",
    exercises: [
      {
        id: 1,
        name: "Hip Thrust",
        youtube: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: 2,
        name: "Romanian Deadlift",
        youtube: "https://www.youtube.com/watch?v=3qw-yU8R0KQ",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: 3,
        name: "Step Ups",
        youtube: "https://www.youtube.com/watch?v=JB2oyawG9KI",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: 4,
        name: "Leg Curls",
        youtube: "https://www.youtube.com/watch?v=1Tq3QdYUuHs",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
      {
        id: 5,
        name: "Hip Abduction",
        youtube: "https://www.youtube.com/watch?v=glF_jGDA_xA",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: 6,
        name: "Kickbacks",
        youtube: "https://www.youtube.com/watch?v=Thw5uakV4VM",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Back & Arms",
    exercises: [
      {
        id: 1,
        name: "Lat Pulldown",
        youtube: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: 2,
        name: "Seated Row",
        youtube: "https://www.youtube.com/watch?v=GZbfZ033f74",
        sets: [
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: 3,
        name: "Face Pulls",
        youtube: "https://www.youtube.com/watch?v=rep-qVOkqgk",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: 4,
        name: "Cable Bicep Curl",
        youtube: "https://www.youtube.com/watch?v=av7-8igSXTs",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: 5,
        name: "Triceps Extension",
        youtube: "https://www.youtube.com/watch?v=vB5OHsJ3EME",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: 6,
        name: "Incline Bicep Curl",
        youtube: "https://www.youtube.com/watch?v=soxrZlIl35U",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Legs & Shoulders",
    exercises: [
      {
        id: 1,
        name: "Squats",
        youtube: "https://www.youtube.com/watch?v=YaXPRqUwItQ",
        sets: [
          { type: "warmup", reps: null },
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: 2,
        name: "Hip Thrust",
        youtube: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "working", reps: 8 },
          { type: "dropset", reps: 8 },
        ],
      },
      {
        id: 3,
        name: "Reverse Deficit Lunges",
        youtube: "https://www.youtube.com/watch?v=zD8-6x7Yw4U",
        sets: [
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: 4,
        name: "Leg Extensions",
        youtube: "https://www.youtube.com/watch?v=yR1NmFZ_jZ0",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: 5,
        name: "Shoulder Press",
        youtube: "https://www.youtube.com/watch?v=qEwKCR5JCog",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: 6,
        name: "Lateral Raises",
        youtube: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Glutes & Quads",
    exercises: [
      {
        id: 1,
        name: "Bulgarian Split Squat",
        youtube: "https://www.youtube.com/watch?v=2C-uNgKwPLE",
        sets: [
          { type: "warmup", reps: null },
          { type: "working", reps: 8 },
          { type: "working", reps: 8 },
        ],
      },
      {
        id: 2,
        name: "Hip Thrust",
        youtube: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
        sets: [
          { type: "working", reps: 10 },
          { type: "dropset", reps: 10 },
        ],
      },
      {
        id: 3,
        name: "Leg Press",
        youtube: "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
      {
        id: 4,
        name: "Quad Extension",
        youtube: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
      {
        id: 5,
        name: "Glute Focused Step Ups",
        youtube: "https://www.youtube.com/watch?v=JB2oyawG9KI",
        sets: [
          { type: "working", reps: 10 },
          { type: "working", reps: 10 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Cardio & Abs",
    exercises: [
      {
        id: 1,
        name: "Treadmill Walk (Incline)",
        youtube: "https://www.youtube.com/watch?v=wR0GOTUqY94",
        sets: [
          { type: "working", reps: 15 },
          { type: "working", reps: 5 },
        ],
      },
      {
        id: 2,
        name: "Hanging Knee Raises",
        youtube: "https://www.youtube.com/watch?v=l4yYz0UqJ5M",
        sets: [
          { type: "working", reps: 12 },
          { type: "working", reps: 12 },
        ],
      },
      {
        id: 4,
        name: "Weighted Crunch Machine",
        youtube: "https://www.youtube.com/watch?v=5ER5Of4MOPI",
        sets: [
          { type: "working", reps: 12 },
          { type: "dropset", reps: 12 },
        ],
      },
    ],
  },
];
