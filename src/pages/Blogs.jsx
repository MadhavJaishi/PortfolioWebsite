import { blogsList } from "../portfolioData";

const Blogs = () => {
  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display">Writing</h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-sans">Thoughts, guides, and engineering tutorials on web development and frontend design.</p>
      </div>

      <div className="space-y-6">
        {blogsList.map((blog, idx) => (
          <article
            key={idx}
            className="group block p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted mb-3 font-semibold font-display">
              <span>{blog.date}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span>{blog.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
              <span className="text-accent">{blog.category}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 font-display">
                {blog.title}
              </h3>
              <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                {blog.summary}
              </p>
            </div>
            
            <div className="mt-4 flex items-center text-xs font-semibold text-accent group-hover:underline font-display">
              Read article &rarr;
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
