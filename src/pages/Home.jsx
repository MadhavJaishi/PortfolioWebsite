import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFolder,
  FaBookmark,
  FaCopy,
  FaCheck,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  skills,
  projectsList,
  blogsList,
  snippetsList,
  resourcesList,
} from '../portfolioData'

const Home = () => {
  const [copiedId, setCopiedId] = useState(null)

  const previewProjects = projectsList.slice(0, 2)
  const previewBlogs = blogsList.slice(0, 2)
  const previewSnippets = snippetsList.slice(0, 1)
  // Flatten categories items for simple homepage previews
  const previewResources = resourcesList
    .flatMap((category) => category.items)
    .slice(0, 2)

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="p-4 sm:p-6 space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 pt-4">
        <div
          className="flex-1 space-y-4 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
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

          <p className="text-lg font-semibold text-accent font-display">
            Software Engineer
          </p>

          <h2 className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal text-base font-sans">
            I enjoy building products that solve real business problems. My work
            focuses on creating maintainable applications, improving user
            experiences, and delivering features that balance technical quality
            with business needs.
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal text-base">
            I have experience developing enterprise applications, designing
            reusable component systems, integrating complex APIs, optimizing
            performance, and translating requirements into production ready
            solutions. Currently contributing to training and learning platforms
            at{' '}
            <a
              href="https://www.linkedin.in/company/anugraha-exceed-incorporated"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
            >
              Anugraha Exceed Incorporated
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
            .
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/MadhavJaishi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/madhavjaishi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:madhavjaishi0@gmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card text-muted hover:text-text hover:shadow-sm hover:scale-110 active:scale-95 transition-all duration-300"
              title="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Avatar Frame */}
        <div
          className="relative group self-start md:self-center animate-fade-in-up"
          style={{ animationDelay: '250ms' }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-pink-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-md transform hover:rotate-6 transition-transform duration-300">
            <span className="text-3xl sm:text-4xl font-extrabold text-zinc-700 dark:text-zinc-300">
              MJ
            </span>
          </div>
        </div>
      </section>

      {/* Featured Skills / Technology Badges */}
      <section
        className="space-y-4 pt-6 border-t border-border/40 animate-fade-in-up"
        style={{ animationDelay: '400ms' }}
      >
        <h3 className="text-xl font-bold tracking-tight font-display">
          Core Technologies
        </h3>
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

      {/* Projects Preview Section */}
      <section className="space-y-6 pt-6 border-t border-border/40">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight font-display">
              Featured Projects
            </h3>
            <p className="text-sm text-muted font-sans">
              A selection of tools and applications built recently.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-semibold px-4 py-2 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-accent transition-all duration-200 font-display"
          >
            Explore Projects &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {previewProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center text-muted group-hover:text-accent transition-colors duration-300">
                  <FaFolder className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 font-display">
                    {project.title}
                  </h4>
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
      </section>

      {/* Blogs Preview Section */}
      <section className="space-y-6 pt-6 border-t border-border/40">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight font-display">
              Latest Writing
            </h3>
            <p className="text-sm text-muted font-sans">
              Read my thoughts on technology, frontend design, and architecture.
            </p>
          </div>
          <Link
            to="/blogs"
            className="text-xs font-semibold px-4 py-2 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-accent transition-all duration-200 font-display"
          >
            Discover More &rarr;
          </Link>
        </div>

        <div className="space-y-4">
          {previewBlogs.map((blog, idx) => (
            <article
              key={idx}
              className="group block p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted mb-3 font-semibold font-display">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                <span>{blog.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="text-accent">{blog.category}</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 font-display">
                  {blog.title}
                </h4>
                <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {blog.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Snippets Preview Section */}
      <section className="space-y-6 pt-6 border-t border-border/40">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight font-display">
              Useful Snippets
            </h3>
            <p className="text-sm text-muted font-sans">
              Quick reference solutions and utility templates.
            </p>
          </div>
          <Link
            to="/snippets"
            className="text-xs font-semibold px-4 py-2 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-accent transition-all duration-200 font-display"
          >
            Open Library &rarr;
          </Link>
        </div>

        <div className="space-y-4">
          {previewSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold group-hover:text-accent transition-colors duration-300 font-display">
                    {snippet.title}
                  </h4>
                  <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400 font-sans">
                    {snippet.description}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-accent font-display">
                  {snippet.language}
                </span>
              </div>
              <div className="relative mt-4 rounded-xl overflow-hidden border border-border bg-zinc-50 dark:bg-zinc-950/60 p-4 font-mono text-xs text-zinc-800 dark:text-zinc-300 overflow-x-auto whitespace-pre">
                <button
                  onClick={() => handleCopy(snippet.id, snippet.code)}
                  className="absolute top-3 right-3 p-2 rounded-lg border border-border bg-card text-muted hover:text-text transition-colors duration-200"
                  title="Copy Code"
                >
                  {copiedId === snippet.id ? (
                    <FaCheck className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <FaCopy className="w-3.5 h-3.5" />
                  )}
                </button>
                <code>{snippet.code}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="space-y-6 pt-6 border-t border-border/40">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight font-display">
              Bookmarks & Resources
            </h3>
            <p className="text-sm text-muted font-sans">
              Curated utilities, blogs, and books I highly recommend.
            </p>
          </div>
          <Link
            to="/resources"
            className="text-xs font-semibold px-4 py-2 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-accent transition-all duration-200 font-display"
          >
            Explore Directory &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {previewResources.map((item, itemIdx) => (
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
                    <h4 className="text-sm font-bold group-hover:text-accent transition-colors duration-300 font-display">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs font-normal text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <FaExternalLinkAlt className="w-3.5 h-3.5 text-muted group-hover:text-text transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
