import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Biography from "../components/Bio";
import Resume from "../components/Resume";
import { DownArrow } from "../components/UI";

const Home: React.FC = () => {
  const [resumeIsVisable, setResumeIsVisable] = useState(false);
  const resumeRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setResumeIsVisable(true);
      } else {
        setResumeIsVisable(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToResume = () => {
    resumeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto mt-40 p-5 lg:w-8/12 md:p-20">
      <Biography />
      <div
        ref={resumeRef}
        className={classNames(
          "transition-all duration-700",
          resumeIsVisable ? "opacity-100 mt-20" : "opacity-0 mt-60"
        )}
      >
        <Resume />
      </div>
      <div
        className={classNames(
          "inset-x-0 justify-center fixed bottom-10 flex",
          "transition-all duration-300",
          resumeIsVisable ? "opacity-0" : "opacity-100"
        )}
      >
        <div className=" shadow-xl rounded-full p-2">
          <DownArrow
            //We do this so that the user can't click the arrow when the button is invisible
            onClick={!resumeIsVisable ? scrollToResume : undefined}
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
