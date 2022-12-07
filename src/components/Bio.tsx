import JoeProfilePicture from "../images/joe_rounded_profile.png";
import { GradientText } from "./UI";

const Biography: React.FC = () => {
  return (
    <div className="flex flex-col-reverse gap-y-5 xl:flex-row justify-between">
      <div className="py-2 flex flex-col justify-between">
        <GradientText size="5xl">Hi!</GradientText>
        <p className="text-xl max-w-lg">
          My name is Joe Brundage and I'm a computer science student at Brigham
          Young University. I focus on computer graphics and software
          engineering.
        </p>
        <p className="mt-4 text-xl max-w-lg">
          I'm currently working on BYU's animated capstone project as an FX TD.
          I'm looking for work as a software engineer in the computer graphics
          industry. You can contact me by{" "}
          <a
            href="mailto: joebrundage@icloud.com"
            className="font-bold cursor-pointer text-blue-500 hover:text-blue-700"
          >
            email
          </a>{" "}
          or through{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/brundagejoe/"
            rel="noreferrer"
            className="font-bold cursor-pointer text-blue-500 hover:text-blue-700"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
      <img
        className="rounded-full shadow-lg max-w-[17rem]"
        src={JoeProfilePicture}
        alt="joe-profile"
      />
    </div>
  );
};

export default Biography;
