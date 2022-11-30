import { useEffect, useState } from "react";
import Biography from "../components/Bio";
import Resume from "../components/Resume";

const Home: React.FC = () => {
  const [resumeIsVisable, setResumeIsVisable] = useState(false);

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

  return (
    <div className="container mx-auto mt-40 p-5 lg:w-8/12 md:p-20">
      <Biography />
      <div
        className={`transition-all duration-700 ${
          resumeIsVisable ? "opacity-100 mt-20" : "opacity-0 mt-60"
        }`}
      >
        <Resume />
      </div>
    </div>
  );
};
export default Home;
