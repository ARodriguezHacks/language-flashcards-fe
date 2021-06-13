import { useState } from "react";

function Flashcard({ flashcardEn, flashcardEs }) {
  const [cardFront, setCardFront] = useState(true);
  const [cardBack, setCardBack] = useState(false);
  const [addFlip, setAddFlip] = useState("");

  const flipTopCard = () => {
    setAddFlip("card-flip");
  };

  const flipBottomCard = () => {
    setAddFlip("");
  };

  return (
    <li>
      <div
        className={`${addFlip} card bg-gray-50 h-80 flex flex-col justify-center gap-1 rounded relative`}
      >
        <div className="h-80 absolute w-full top-card bg-blue-300">
          <h4 className="text-center text-2xl leading-normal p-4">
            {flashcardEs}
          </h4>
          <div className="flex justify-around">
            <button className="bg-yellow-200 p-2 rounded hover:text-gray-50 transition duration-500 ease-in-out transform hover:bg-yellow-400 hover:scale-110">
              Get a Hint
            </button>
            <button
              className="click p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110"
              onClick={flipTopCard}
            >
              Get Answer
            </button>
          </div>
        </div>

        <div className="h-80 absolute w-full bottom-card bg-pink-200">
          <h4 className="text-center text-2xl leading-normal p-4">
            {flashcardEn}
          </h4>
          <div className="flex justify-around">
            <button className="bg-yellow-200 p-2 rounded hover:text-gray-50 transition duration-500 ease-in-out transform hover:bg-yellow-400 hover:scale-110">
              Get a Hint
            </button>
            <button
              className="p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110"
              onClick={flipBottomCard}
            >
              Flip Back
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Flashcard;
