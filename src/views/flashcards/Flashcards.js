import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FlashCard from "./Flashcard";
// import NewFlashcard from "./NewFlashcard";

function Flashcards({ match }) {
  console.log(match);
  const [flashcards, setFlashcards] = useState([]);

  const getFlashcards = async () => {
    const { data } = await axios.get("/flashcards");
    console.log(data);
    setFlashcards(data);
    localStorage.setItem("flashcards", JSON.stringify(data));
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <div className="container mx-auto space-y-2">
      <div className="grid grid-cols-12">
        <h1 className="text-3xl p-4 col-span-3">Flashcards Page</h1>
        <Link to={match.url + "/new"}>
          <button className="flex justify-around items-center	col-span-1 click p-2 rounded hover:text-gray-50 transition bg-red-400 duration-500 ease-in-out transform hover:bg-red-600 hover:scale-110">
            Create{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
      {flashcards.length > 0 ? (
        <ul className="grid grid-cols-4 gap-2">
          {flashcards.map((flashcard) => (
            <FlashCard
              key={flashcard.id}
              flashcardEn={flashcard.en}
              flashcardEs={flashcard.es}
            />
          ))}
        </ul>
      ) : (
        <div>
          <h4>No Flashcards! :( </h4>

          <button>Start creating flashcards</button>
        </div>
      )}
    </div>
  );
}

export default Flashcards;
