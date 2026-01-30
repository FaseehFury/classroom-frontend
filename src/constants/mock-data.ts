import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamentals of programming and computational thinking.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus covering integration and series.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics I",
    department: "Physics",
    description: "Classical mechanics and motion principles.",
    createdAt: new Date().toISOString(),
  },
];
