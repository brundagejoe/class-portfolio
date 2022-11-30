import Biography from "../components/Bio";
import Resume from "../components/Resume";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-5 w-8/12 md:p-20">
      <Biography />
      <div className="mt-80">
        <Resume />
      </div>
    </div>
  );
};
export default Home;
