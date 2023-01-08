import React from "react";
import { GradientText } from "../components/UI";
import bookOfMormon from "../data/book_of_mormon.json";
import { Link } from "react-router-dom";

const Scriptures: React.FC = () => {
  return (
    <div className="container flex justify-center mx-auto pb-10">
      {bookOfMormon.map((book, index) => (
        <Link key={index} to={`/scriptures/${book.name.replace(" ", "_")}`}>
          <GradientText className="cursor-pointer" size="2xl">
            {book.name}
          </GradientText>
        </Link>
      ))}
    </div>
  );
};
export default Scriptures;
