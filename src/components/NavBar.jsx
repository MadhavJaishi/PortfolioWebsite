import { useContext, useEffect } from "react";
import { DarkModeContext } from "../themeService/DarkModeProvider";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  useEffect(() => {
    // Toggle the `dark` class based on the darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    `relative mr-4 text-md font-medium
   ${
     isActive
       ? "dark:text-fuchsia-300 text-fuchsia-800 after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-2/3 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-blue-500 after:to-transparent"
       : ""
   }`;

  return (
    <nav className="sticky-nav flex justify-between items-center px-4 text-zinc-900 dark:text-white  bg-opacity-60 pt-4">
      <button className="" onClick={toggleTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex rounded-lg shadow-2xl px-4 py-2 font-normal">
        <NavLink to="/" className={linkClass}>
          <button>Home</button>
        </NavLink>
        <NavLink to="/blogs" className={linkClass}>
          <button>Blogs</button>
        </NavLink>
        <NavLink to="/resources" className={linkClass}>
          <button>Resources</button>
        </NavLink>
        <NavLink to="/snippets" className={linkClass}>
          <button>Snippets</button>
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          <button>Projects</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
