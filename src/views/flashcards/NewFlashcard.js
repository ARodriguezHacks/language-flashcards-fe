import { useState } from "react";

function NewFlashcard() {
  const [lang, setLang] = useState("");
  const [word, setWord] = useState("");

  return (
    <div className="container mx-auto space-y-2">
      <h1 className="text-3xl p-4 col-span-3">Create Flashcard</h1>
      <div className="grid grid-cols-12 grid-rows-6 gap-8 h-80 py-4">
        <form className="grid grid-cols-6 col-start-4 col-end-10 gap-y-2">
          <label htmlFor="lang" className="block col-span-6">
            Language
          </label>
          <input
            type="text"
            name="lang"
            className="col-span-6 rounded-md h-8"
            value={lang}
            onChange={setLang}
          />

          <label htmlFor="word" className="block col-span-6">
            Word
          </label>
          <input
            type="text"
            name="word"
            className="col-span-6 rounded-md h-8"
            value={word}
            onChange={setWord}
          />

          <button
            type="submit"
            className="col-span-3 rounded bg-gradient-to-r from-blue-500 to-green-400 py-1"
          >
            Create Flashcard
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewFlashcard;
