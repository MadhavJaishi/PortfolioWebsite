import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const Snippets = () => {
  const [copiedId, setCopiedId] = useState(null);

  const snippetsList = [
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

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Snippets</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Handy custom hooks, styling patterns, and helper utility scripts.</p>
      </div>

      <div className="space-y-6">
        {snippetsList.map((snippet) => (
          <div
            key={snippet.id}
            className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="space-y-1">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300">
                  {snippet.title}
                </h3>
                <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400">
                  {snippet.description}
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-accent">
                {snippet.language}
              </span>
            </div>

            <div className="relative mt-4 rounded-xl overflow-hidden border border-border bg-zinc-50 dark:bg-zinc-950/60 p-4 font-mono text-xs text-zinc-800 dark:text-zinc-300 overflow-x-auto whitespace-pre">
              <button
                onClick={() => handleCopy(snippet.id, snippet.code)}
                className="absolute top-3 right-3 p-2 rounded-lg border border-border bg-card text-muted hover:text-text transition-colors duration-200"
                title="Copy Code"
              >
                {copiedId === snippet.id ? <FaCheck className="w-3.5 h-3.5 text-emerald-500" /> : <FaCopy className="w-3.5 h-3.5" />}
              </button>
              <code>{snippet.code}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snippets;
