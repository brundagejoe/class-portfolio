import React from "react";
import { GradientText } from "../components/UI";
import bookOfMormon from "../data/book_of_mormon.json";
import { Link, useParams } from "react-router-dom";

const Chapters: React.FC = () => {
  const { bookName: rawBookName } = useParams();
  const bookName = rawBookName?.replace(/_/g, " ") as string;

  const book = bookOfMormon.find((book) => book.name === bookName);

  const chapters = book?.chapters;

  return (
    <div className="container flex flex-col items-center mx-auto pb-10">
      <GradientText size="4xl">{bookName}</GradientText>
      <div>
        {chapters?.map((chapter, index) => (
          <Link
            className="flex hover:text-blue-500"
            key={index}
            to={`/scriptures/${rawBookName}/${chapter.number}`}
          >
            Chapter {chapter.number}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Chapters;
