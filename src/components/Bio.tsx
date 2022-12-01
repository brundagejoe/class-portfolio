import JoeProfilePicture from "../images/joe_rounded_profile.png";

const Biography: React.FC = () => {
  return (
    <div className="flex flex-col-reverse gap-y-5 lg:flex-row justify-between">
      <div className="py-2 flex flex-col justify-between">
        <h1 className="w-fit bg-clip-text text-transparent bg-gradient-to-tr from-cyan-500 to-indigo-500 text-5xl font-bold">
          Hi!
        </h1>
        <p className="text-xl max-w-lg">
          My name is Joe Brundage and I'm a computer science student at Brigham
          Young University. I focus on computer graphics and software
          engineering.
        </p>
      </div>
      <img
        className="max-w-[12rem]"
        src={JoeProfilePicture}
        alt="joe-profile"
      />
    </div>
  );
};

export default Biography;
