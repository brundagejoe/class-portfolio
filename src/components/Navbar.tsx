import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="px-4 mb-5 font-bold text-gray-500 dark:text-white py-5 flex justify-end gap-10">
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/reel"}>Reel</Link>
      {/* <Link to={"/contact"}>Contact Me</Link> */}
    </div>
  );
};

export default Navbar;
