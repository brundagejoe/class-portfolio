import React from "react";
import JoeProfilePicture from "../images/joe_rounded_profile.png";

const Home: React.FC = () => {
  return (
    <div className="p-5 md:p-20">
      <div className="flex justify-center space-x-40">
        <div className="py-2 flex flex-col justify-between">
          <h1 className="text-5xl font-bold">Hi!</h1>
          <p className="text-xl max-w-lg">
            My name is Joe Brundage and I'm a computer science student at
            Brigham Young University. I focus on computer graphics and software
            engineering.
          </p>
        </div>
        <img
          className="max-w-[12rem]"
          src={JoeProfilePicture}
          alt="joe-profile"
        />
      </div>
    </div>
  );
};
export default Home;
