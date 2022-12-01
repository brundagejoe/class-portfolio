import React from "react";
const Contact: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-auto w-fit space-y-4">
        <h1 className="w-fit bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 to-indigo-500 text-5xl font-bold ">
          Get In Touch
        </h1>
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
