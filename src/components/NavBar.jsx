import { useContext, useEffect } from "react";
import { DarkModeContext } from "../themeService/DarkModeProvider";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    `relative py-2 px-3 text-sm font-medium transition-all duration-300 rounded-md
   ${isActive
      ? "dark:text-fuchsia-300 text-fuchsia-800 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-blue-500 after:to-transparent"
      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-2 mb-8 border-b border-border/40 backdrop-blur-md bg-background/80 transition-all duration-300">
      <button
        className="p-2.5 rounded-xl border border-border bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 text-muted hover:text-text"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun className="w-4 h-4 text-amber-400" /> : <FaMoon className="w-4 h-4 text-violet-600" />}
      </button>

      <div className="flex gap-1.5 p-1 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/blogs" className={linkClass}>
          Blogs
        </NavLink>
        <NavLink to="/snippets" className={linkClass}>
          Snippets
        </NavLink>
        <NavLink to="/resources" className={linkClass}>
          Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
