import React from "react";
import { GradientText } from "../components/UI";
const Contact: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto w-fit space-y-4">
        <GradientText size="5xl">Get In Touch</GradientText>
        <a
          className="font-bold text-xl hover:text-blue-500 flex transition-colors"
          href="mailto: joebrundage@icloud.com"
        >
          joebrundage@icloud.com
        </a>
        <a
          className="font-bold text-xl hover:text-blue-500 flex transition-colors"
          target="_blank"
          href="https://www.linkedin.com/in/brundagejoe/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
export default Contact;
