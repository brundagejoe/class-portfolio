import React, { useState } from "react";
import { GradientText } from "../components/UI";
import bookOfMormon from "../data/book_of_mormon.json";
import { useParams } from "react-router-dom";

const ScriptureChapter: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const { bookName: rawBookName, chapter: selectedChapter } = useParams();

  const bookName = rawBookName?.replace(/_/g, " ");

  //get all the verses from the book and chapter
  const book = bookOfMormon.find((book) => book.name === bookName);
  const chapter = book?.chapters.find(
    (chapter) => chapter.number === parseInt(selectedChapter as string)
  );

  const getNumbers = (array: string[]) => {
    const numbers = array.map((item) => {
      const number = item.match(/\d+/);
      return number ? parseInt(number[0]) : -1;
    });
    if (numbers[0] === -1 && numbers.length > 1) {
      numbers[0] = numbers[1] - 1;
    }

    return numbers.length > 1
      ? [numbers[0], numbers[numbers.length - 1]]
      : [numbers[0]];
  };

  const handleOnMouseUp = () => {
    const selection = window.getSelection();
    let highlightedText = selection?.toString();

    const highlightedTextArray = highlightedText?.split(/\n{2,}/);
    const selectedVerses = getNumbers(highlightedTextArray || []);
    if (selectedVerses[0] === -1) {
      const verse = chapter?.verses.find((verse) =>
        verse.text.includes(highlightedTextArray?.[0] as string)
      );
      selectedVerses[0] = verse?.number || -1;
    }

    //Remove the number from the highlighted text
    highlightedText = highlightedText?.replace(/\d+/g, "");

    //replace the new line characters with a space
    highlightedText = highlightedText?.replace(/(\r\n|\n|\r)/gm, "");

    //if there is a space at the start of the string, remove it
    highlightedText = highlightedText?.replace(/^\s+/, "");

    //Put quotes around highlightedText
    highlightedText = `"${highlightedText}"`;

    //add the book name and chapter number to the end
    highlightedText = `${highlightedText} (${bookName} ${chapter?.number}:${
      selectedVerses[0]
    }${selectedVerses[1] ? `-${selectedVerses[1]}` : ""})`;

    // highlightedText = `${bookName} ${chapter?.number}:${selectedVerses[0]}${
    //   selectedVerses[1] ? `-${selectedVerses[1]}` : ""
    // } ${highlightedText}`;

    //put the highlighted text into the clipboard
    navigator.clipboard.writeText(highlightedText || "");

    //set show toast to true for 2 seconds
    //if the highlighted text is not empty
    if (highlightedText) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      //deselect the selection
      selection?.removeAllRanges();
    }
  };
  return (
    <div className="container mx-auto pb-10">
      <div
        className={`${
          showToast ? "opacity-100" : "opacity-0"
        } fixed transition-opacity duration-200 bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md`}
      >
        Copied to clipboard!
      </div>
      <GradientText size="5xl">
        {bookName} {chapter?.number}
      </GradientText>
      <div className="space-y-4 px-4" onMouseUp={handleOnMouseUp}>
        {chapter?.verses.map((verse, index) => (
          <p key={index} className="text-xl font-bold">
            {verse.number} {verse.text}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ScriptureChapter;
