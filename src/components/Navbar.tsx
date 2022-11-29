import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="px-4 mb-5 font-bold text-gray-500 py-5 flex justify-end gap-10">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Navbar;
