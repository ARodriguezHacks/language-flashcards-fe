import { useState, useEffect } from "react";
import axios from "axios";

function Flashcard() {
  const [flashcards, setFlashcards] = useState([]);

  const getFlashcards = async () => {
    const { data } = await axios.get("/flashcards");
    console.log(data);
    // return data.json();
    setFlashcards(data);
    localStorage.setItem("flashcards", JSON.stringify(data));
  };

  const onClick = () => {
    getFlashcards();
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <div className="container">
      <h1>Flashcards Page</h1>
      {flashcards.length > 0 ? (
        <ul>
          {flashcards.map((flashcard) => (
            <li key={flashcard.id}>{flashcard.en}</li>
          ))}
        </ul>
      ) : (
        <h4>No Flashcards! :( </h4>
      )}
      <button type="submit" onClick={onClick}>
        Get Flashcards
      </button>
    </div>
  );
}

export default Flashcard;
