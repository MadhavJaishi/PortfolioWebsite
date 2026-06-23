import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {
  const skills = [
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

  return (
    <div className="p-4 sm:p-6 space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 pt-4">
        <div className="flex-1 space-y-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold font-display">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            Madhav Jaishi
          </h1>
          <p className="text-lg font-semibold text-accent font-display">Software Engineer</p>

          <h2 className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal text-base font-sans">
            Working at{" "}
            <a
              href="https://www.linkedin.in/company/anugraha-exceed-incorporated"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
            >
              Anugraha Exceed Incorporated <FaExternalLinkAlt className="w-3 h-3" />
            </a>{" "}
            as a Software Engineer. Contributed to{" "}
            <span className="relative group cursor-help border-b border-dashed border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-medium">
              TMS
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all duration-200 bg-zinc-950 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50">
                Training Management System
              </span>
            </span>{" "}
            and{" "}
            <span className="relative group cursor-help border-b border-dashed border-zinc-400 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-medium">
              LMS
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 scale-0 group-hover:scale-100 transition-all duration-200 bg-zinc-950 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-50">
                Learning Management System
              </span>
            </span>{" "}
            systems, enhancing training and learning management.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal text-base">
            Passionate about writing clean, optimized code, resolving complex problems, and continuously scaling web apps.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Avatar Frame */}
        <div className="relative group self-start md:self-center animate-fade-in-up" style={{ animationDelay: '250ms' }}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-md transform hover:rotate-6 transition-transform duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-zinc-700 dark:text-zinc-300">MJ</span>
          </div>
        </div>
      </section>

      {/* Featured Skills / Technology Badges */}
      <section className="space-y-4 pt-6 border-t border-border/40 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <h3 className="text-xl font-bold tracking-tight font-display">Core Technologies</h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="py-1.5 px-3.5 text-xs font-semibold rounded-xl border border-border bg-card/60 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 hover:border-accent/40 hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
