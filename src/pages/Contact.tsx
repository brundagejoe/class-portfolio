import React from "react";
const Contact: React.FC = () => {
  return (
    <div className="container text-blue-500 text-xl font-bold mx-auto">
      <a
        href="mailto: joebrundage@icloud.com"
        className="flex hover:text-blue-800 mx-auto w-fit"
      >
        joebrundage@icloud.com
      </a>
      <a
        href="https://github.com/brundagejoe"
        className="flex hover:text-blue-800 mx-auto w-fit"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/brundagejoe/"
        className="flex hover:text-blue-800 mx-auto w-fit"
      >
        LinkedIn
      </a>
    </div>
  );
};
export default Contact;
