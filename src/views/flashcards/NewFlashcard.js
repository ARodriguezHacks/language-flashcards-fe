import { useState } from "react";

function NewFlashcard() {
  const [lang, setLang] = useState("");
  const [word, setWord] = useState("");

  return (
    <form>
      <label htmlFor="lang">Language</label>
      <input type="text" name="lang" value={lang} />

      <label htmlFor="word">Word</label>
      <input type="text" name="word" value={word} />

      <button>Create Flashcard</button>
    </form>
  );
}

export default NewFlashcard();
