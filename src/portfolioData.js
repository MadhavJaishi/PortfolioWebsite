export const skills = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Redux Toolkit",
  "REST APIs",
  "SQL",
  "Realm DB",
  "Firebase",
  "Git",
];

export const projectsList = [
  {
    title: "Training Management System (TMS)",
    description: "A comprehensive enterprise system streamlining workflow coordination, schedules, tracking, and certification for specialized training cohorts.",
    tags: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Redux Saga",
      "Realm DB",
      "React Navigation",
      "REST API",
      "Calendar",
      "PDF Generation"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Learning Management System (LMS)",
    description: "An online education portal offering dynamic modules, quizzes, grading features, and course progress tracking for institutional learners.",
    tags: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Realm DB",
      "Firebase Cloud Messaging",
      "Push Notifications",
      "Document Management",
      "Calendar Scheduling",
      "PDF Generation",
      "Analytics Dashboard"
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Developer Portfolio Website",
    description: "A minimalist, responsive developer portfolio showing personal projects, resources, snippets, and blog posts with smooth dark mode switches.",
    tags: ["React", "Vite", "TailwindCSS", "React Router"],
    link: "#",
    github: "#",
  }
];

export const blogsList = [
  {
    title: "Building Scalable Training Management Systems",
    date: "June 15, 2026",
    readTime: "8 min read",
    category: "Architecture",
    summary: "Insights and lessons learned from developing custom enterprise training portals (TMS) servicing thousands of active candidates, with structural optimization techniques.",
  },
  {
    title: "TailwindCSS Tricks for Sleek Minimalist Portfolios",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "CSS",
    summary: "How to use native system color schemes, CSS custom properties, dynamic transparency levels, and backdrop blur to craft polished, Apple-level portfolio sites.",
  },
  {
    title: "A Deep Dive into React State Management in 2026",
    date: "April 10, 2026",
    readTime: "12 min read",
    category: "React",
    summary: "Analyzing modern state containers, context optimizations, server-side data synchronization strategies, and choosing the lightest, simplest approach for your project.",
  }
];

export const snippetsList = [
  {
    id: "use-media-query",
    title: "useMediaQuery React Hook",
    description: "A lightweight custom hook to subscribe to CSS media queries dynamically.",
    language: "JavaScript",
    code: `const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
};`,
  },
  {
    id: "tailwind-scroll",
    title: "Tailwind Scroll Hide Utility",
    description: "CSS base class custom utility to conceal scrollbars across major rendering engines.",
    language: "CSS",
    code: `/* Hide scrollbar for Chrome, Safari and Opera */
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scroll-hidden {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}`,
  }
];

export const resourcesList = [
  {
    title: "Development Tools",
    items: [
      {
        name: "Vite",
        desc: "Next generation, lightning-fast frontend tooling and bundle configurations.",
        url: "https://vite.dev",
      },
      {
        name: "React Router v7",
        desc: "Full stack routing framework offering clean transitions and layout nested hooks.",
        url: "https://reactrouter.com",
      }
    ]
  },
  {
    title: "Design & UX Inspiration",
    items: [
      {
        name: "Refactoring UI",
        desc: "A practical guide to designing gorgeous web interfaces from developer perspectives.",
        url: "https://www.refactoringui.com",
      },
      {
        name: "Linear Linear Method",
        desc: "Principles for product management and visually aesthetic SaaS design philosophy.",
        url: "https://linear.app/method",
      }
    ]
  }
];
