import { useContext } from "react";
import { DarkModeContext } from "../themeService/DarkModeProvider";
const Home = () => {
  return (
    <div className="mt-10 p-6 font-sans font-bold flex flex-col gap-4">
      <h1 className="text-3xl">Madhav Jaishi</h1>

      <h2 className="font-normal text-md dark:text-zinc-400 text-zinc-700">
        Working at{" "}
        <a
          href="https://www.linkedin.in/company/anugraha-exceed-incorporated"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Anugraha Exceed Incorporated
        </a>{" "}
        as a Software Engineer. Contributed to{" "}
        <span class="relative group cursor-pointer text-blue-600">
          TMS
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 
         opacity-0 group-hover:opacity-100 transition-opacity duration-200
         bg-black text-white text-xs px-3 py-2 rounded whitespace-nowrap"
          >
            Training Management System
          </span>
        </span>{" "}
        and{" "}
        <span class="relative group cursor-pointer text-blue-600">
          LMS
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 
         opacity-0 group-hover:opacity-100 transition-opacity duration-200
         bg-black text-white text-xs px-3 py-2 rounded whitespace-nowrap"
          >
            Learning Management System
          </span>
        </span>{" "}
        systems, enhancing training and learning management. <br />
        Passionate about coding, problem-solving, and continuous learning.
      </h2>
    </div>
  );
};

export default Home;
