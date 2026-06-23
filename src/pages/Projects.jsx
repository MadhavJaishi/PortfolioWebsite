import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

const Projects = () => {
  const projectsList = [
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

  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display">Projects</h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-sans">A selected showcase of software systems, web platforms, and open-source contributions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center text-muted group-hover:text-accent transition-colors duration-300">
                <FaFolder className="w-8 h-8" />
                {/* <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text transition-colors duration-200"
                    title="View Source"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text transition-colors duration-200"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div> */}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 font-display">
                  {project.title}
                </h3>
                <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="py-1 px-2.5 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
