import React from "react";
import { GradientText } from "../components/UI";
import GithubLogo from "../images/github_logo.png";
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
          <img
            className="invisible md:visible max-w-[2rem]"
            src={GithubLogo}
            alt="joe-profile"
          />
          <div>
            My Github (I'll list & show individual projects here later on)
          </div>
        </a>
      </div>
    </div>
  );
};
export default Projects;
