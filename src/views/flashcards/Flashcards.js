import { useState, useEffect } from "react";
import axios from "axios";
import FlashCard from "./Flashcard";

function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);
  // const [cardFlip, setCardFlip] = useState(false);
  // const [cardFront, setCardFront] = useState(true);
  // const [cardBack, setCardBack] = useState(false);

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

  const flipCard = (e) => {
    console.log(e);
    // setCardFront(!cardFront);
    // setCardBack(!cardBack);
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl p-4">Flashcards Page</h1>
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
        <h4>No Flashcards! :( </h4>
      )}
    </div>
  );
}

export default Flashcards;
