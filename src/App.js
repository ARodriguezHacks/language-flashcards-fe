import { BrowserRouter as Router, Route } from "react-router-dom";
import Flashcard from "./views/flashcards/Flashcard";
import Landing from "./views/landing/Landing";

function App() {
  return (
    <Router>
      <Route exact path="/flashcards" component={Flashcard} />
      <Route exact path="/" component={Landing} />
    </Router>
  );
}

export default App;
