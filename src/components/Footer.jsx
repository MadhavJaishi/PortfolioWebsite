import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-sm text-muted">
      {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div></div>


      </div> */}

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-border/40 text-xs">
        <p>&copy; {new Date().getFullYear()} Madhav Jaishi. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MadhavJaishi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/madhavjaishi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:madhavjaishi0@gmail.com"
            className="hover:text-text transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        <div className="flex gap-4">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/projects" className="hover:underline">Projects</NavLink>
          <NavLink to="/blogs" className="hover:underline">Blogs</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
