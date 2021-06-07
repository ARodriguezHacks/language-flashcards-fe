import { useState, useEffect } from "react";
import axios from "axios";

function Flashcard() {
  const [flashcards, setFlashcards] = useState([]);
  const [cardFlip, setCardFlip] = useState(false);

  const getFlashcards = async () => {
    const { data } = await axios.get("/flashcards");
    console.log(data);
    // return data.json();
    setFlashcards(data);
    localStorage.setItem("flashcards", JSON.stringify(data));
  };

  // const onClick = () => {
  //   getFlashcards();
  // };

  const flipCard = () => {
    setCardFlip(true);
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Flashcards Page</h1>
      {flashcards.length > 0 ? (
        <ul className="grid grid-cols-4 gap-2">
          {flashcards.map((flashcard) => (
            <li key={flashcard.id}>
              <div className="bg-gray-50 h-80 flex flex-col justify-center space-y-2 rounded relative">
                <div className="z-10 h-80 absolute w-full">
                  <h4 className="text-center text-2xl leading-normal p-4">
                    {flashcard.es}
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

                <div className="-z-1 h-80 absolute w-full">
                  <h4 className="text-center text-2xl leading-normal p-4">
                    {flashcard.en}
                  </h4>
                  <div className="flex justify-around">
                    <button className="bg-yellow-200 p-2 rounded hover:text-gray-50 transition duration-500 ease-in-out transform hover:bg-yellow-400 hover:scale-110">
                      Get a Hint
                    </button>
                    <button className="p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110">
                      Get Answer
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h4>No Flashcards! :( </h4>
      )}
    </div>
  );
}

export default Flashcard;
