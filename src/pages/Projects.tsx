import React from "react";
import { GradientText } from "../components/UI";
const Projects: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto w-fit space-y-4">
        <GradientText className="py-1" size="5xl">
          My Projects
        </GradientText>
        <a
          className="font-bold text-xl space-x-4 items-center hover:text-blue-500 flex transition-colors"
          target="_blank"
          href="https://github.com/brundagejoe"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>

          <div>
            My Github (I'll list & show individual projects here later on)
          </div>
        </a>
      </div>
    </div>
  );
};
export default Projects;
