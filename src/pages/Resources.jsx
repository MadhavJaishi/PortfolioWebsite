import { FaBookmark, FaExternalLinkAlt } from "react-icons/fa";

const Resources = () => {
  const categoriesList = [
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

  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Resources</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Curated software tools, design methodologies, and literature that help build better systems.</p>
      </div>

      <div className="space-y-8">
        {categoriesList.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg font-bold text-accent tracking-wide uppercase text-xs">
              {category.title}
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {category.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FaBookmark className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors duration-300" />
                        <h4 className="text-sm font-bold group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <FaExternalLinkAlt className="w-3 h-3 text-muted group-hover:text-text transition-colors duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
