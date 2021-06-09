import { useState } from "react";

function Flashcard({ flashcardEn, flashcardEs }) {
  const [cardFront, setCardFront] = useState(true);
  const [cardBack, setCardBack] = useState(false);

  const flipCard = (e) => {
    // console.log(e);
    setCardFront(!cardFront);
    setCardBack(!cardBack);
  };

  return (
    <li>
      <div className="bg-gray-50 h-80 flex flex-col justify-center space-y-2 rounded relative">
        {cardFront && (
          <div
            className={
              cardFront
                ? "z-10 h-80 absolute w-full"
                : "-z-10 h-80 absolute w-full"
            }
          >
            <h4 className="text-center text-2xl leading-normal p-4">
              {flashcardEs}
            </h4>
            <div className="flex justify-around">
              <button className="bg-yellow-200 p-2 rounded hover:text-gray-50 transition duration-500 ease-in-out transform hover:bg-yellow-400 hover:scale-110">
                Get a Hint
              </button>
              <button
                className="p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110"
                onClick={flipCard}
              >
                Get Answer
              </button>
            </div>
          </div>
        )}

        {cardBack && (
          <div
            className={
              cardBack
                ? "z-1 h-80 absolute w-full"
                : "-z-1 h-80 absolute w-full"
            }
          >
            <h4 className="text-center text-2xl leading-normal p-4">
              {flashcardEn}
            </h4>
            <div className="flex justify-around">
              <button className="bg-yellow-200 p-2 rounded hover:text-gray-50 transition duration-500 ease-in-out transform hover:bg-yellow-400 hover:scale-110">
                Get a Hint
              </button>
              <button
                className="p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110"
                onClick={flipCard}
              >
                Flip Back
              </button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default Flashcard;
