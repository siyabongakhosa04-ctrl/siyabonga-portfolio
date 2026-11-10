import unichatImg from "./assets/projects/unichat.webp";
import schedulerImg from "./assets/projects/smart-scheduler.webp";
import udhrImg from "./assets/projects/udhr.webp";
import savannaImg from "./assets/projects/savanna-lodge.webp";

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const timeline = [
  {
    season: "2023",
    title: "Foundations",
    body: "Started the Diploma in ICT: Application Development at the University of Mpumalanga. Committed to ICT seriously — HTML, CSS, JavaScript and Git, and the first real sense of a bigger future ahead.",
  },
  {
    season: "2024",
    title: "Growth through pressure",
    body: "Moved into mobile development with Kotlin and Room Database, shipping a full Android task manager end to end.",
  },
  {
    season: "2025",
    title: "DICT300 — Visionary Coders",
    body: "Two full-stack team builds: Smart Scheduler, a staff-scheduling system for a real 22-person catering team, and ICT UniChat, a student collaboration platform. Completed the Diploma in November 2025.",
  },
  {
    season: "2026",
    title: "DICT400 — bigger vision",
    body: "Started the Advanced Diploma in ICT in February 2026 and began building the Universal Digital Health Record System for Rob Ferreira Hospital — Spring Boot, MySQL and React — alongside the Visionary Coders.",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "Kotlin", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Spring Boot", "Node.js", "Express", "MySQL", "MongoDB", "Firebase", "Room Database"],
  },
  {
    label: "Mobile & Desktop",
    skills: ["Kotlin", "Android Development", "Electron"],
  },
  {
    label: "Tools & Practice",
    skills: ["Git", "GitHub", "JWT Auth", "Problem Solving", "Team Collaboration"],
  },
];

const GITHUB = "https://github.com/siyabongakhosa04-ctrl";

// repo / demo: swap in the real URLs when you have them.
// A card shows a "Code" button (falls back to your GitHub profile) and a
// "Live demo" button only if `demo` is set.
export const projects = [
  {
    number: "01",
    context: "Project 300",
    stack: ["React", "Node.js", "MongoDB", "Firebase"],
    title: "ICT UniChat",
    image: unichatImg,
    imageAlt: "ICT UniChat landing page: Platform for ICT Students",
    body: "A student collaboration platform built for Project 300. Role-based dashboards for Admins, Students, and Educators cover assignments and grades, messaging and resource sharing, live and recorded sessions, and course progress tracking.",
    repo: GITHUB,
    demo: null,
  },
  {
    number: "02",
    context: "DICT300 · Visionary Coders",
    stack: ["React", "Tailwind CSS", "Context API"],
    title: "Smart Scheduler",
    image: schedulerImg,
    imageAlt: "Smart Scheduler sign-in screen",
    body: "A full-stack staff scheduling and event management system, built with the Visionary Coders for DICT300, for a real 22-person catering team. A Smart Match algorithm scores staff availability across four weighted factors, with QR check-in, ZAR budget tracking, audit logging, and role-based portals for Admins, Event Managers, and Staff.",
    repo: GITHUB,
    demo: null,
  },
  {
    number: "03",
    context: "DICT400",
    featured: true,
    stack: ["Spring Boot", "MySQL", "React", "JWT"],
    title: "Universal Digital Health Record System",
    image: udhrImg,
    imageAlt: "UDHR sign-in screen for patients and healthcare staff",
    body: "A full-stack digital health record system built for DICT400, targeting Rob Ferreira Hospital in Mpumalanga. Role-based access spans Admin, Doctor, Nurse, Lab Tech, and Patient, secured with JWT authentication against a Spring Boot API.",
    repo: GITHUB,
    demo: "https://udhr-system.onrender.com/",
  },
  {
    number: "04",
    context: "DICT411",
    stack: ["Electron", "Node.js", "Express", "MongoDB"],
    title: "Savanna Lodge Booking System",
    image: savannaImg,
    imageAlt: "Savanna Lodge management dashboard with revenue, bookings and room status",
    body: "A desktop hotel and lodge booking management system built for DICT411. Staff manage rooms, guests, and bookings from one dashboard, with a booking status workflow, add-on services like room service and airport transfers, and built-in reports covering revenue by room type, monthly bookings, occupancy, average stay, and top guests. Runs on an Express and Mongoose API backed by MongoDB.",
    repo: GITHUB,
    demo: null,
  },
];

export const heroFacts = [
  { value: "4", label: "Full-stack projects" },
  { value: "React · Spring Boot", label: "Core stack" },
  { value: "Visionary Coders", label: "Team" },
];

export const journeyPillars = [
  {
    label: "Football",
    title: "Resilience",
    body: "Football taught me to keep showing up, game after game, especially when it's hard.",
  },
  {
    label: "Faith",
    title: "Grounded",
    body: "Faith keeps me steady and reminds me why I'm building in the first place.",
  },
  {
    label: "Technology",
    title: "Impact",
    body: "Code is my tool for solving real problems for real people.",
  },
];

export const glance = [
  { label: "Studying", value: "Advanced Diploma in ICT, University of Mpumalanga" },
  { label: "Completed", value: "Diploma in ICT: Application Development (2023 – 2025)" },
  { label: "Experience", value: "2-month ICT internship" },
  { label: "Team", value: "Visionary Coders" },
  { label: "Builds with", value: "React · Spring Boot · MySQL" },
];

export const drives = [
  {
    title: "Discipline",
    body: "Consistency matters more than motivation. I keep showing up.",
  },
  {
    title: "Growth",
    body: "Committed to learning, improving, and becoming stronger in every season.",
  },
  {
    title: "Purpose",
    body: "Building software that solves real problems and reflects who I am.",
  },
];

export const contact = {
  email: "222509120@ump.ac.za",
  github: "https://github.com/siyabongakhosa04-ctrl",
  linkedin: "https://linkedin.com/in/siyabongakhosa",
};
