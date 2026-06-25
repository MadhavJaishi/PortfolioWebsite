import { FaFolder } from 'react-icons/fa'
import { projectsList } from '../portfolioData'

const Projects = () => {
  return (
    <div className="p-4 sm:p-6 space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display">
          Projects
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-sans">
          A selected showcase of software systems, web platforms, and
          open-source contributions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex-col text-muted group-hover:text-accent transition-colors duration-300">
                <FaFolder className="w-8 h-8" />
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
  )
}

export default Projects
