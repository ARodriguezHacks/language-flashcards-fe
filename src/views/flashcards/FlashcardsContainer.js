// import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import axios from "axios";
import Flashcards from "./Flashcards";
import NewFlashcard from "./NewFlashcard";

function FlashcardsContainer({ match }) {
  console.log(match);
  // const [flashcards, setFlashcards] = useState([]);

  // const getFlashcards = async () => {
  //   const { data } = await axios.get("/flashcards");
  //   console.log(data);
  //   setFlashcards(data);
  //   localStorage.setItem("flashcards", JSON.stringify(data));
  // };

  // useEffect(() => {
  //   getFlashcards();
  // }, []);

  return (
    <Switch>
      <Route exact path={match.url + "/new"} component={NewFlashcard} />
      <Route exact path={match.url} component={Flashcards} />
    </Switch>
  );
}

export default FlashcardsContainer;
