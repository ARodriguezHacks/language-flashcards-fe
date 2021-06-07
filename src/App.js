import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flashcard from "./views/flashcards/Flashcard";
import Landing from "./views/landing/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-green-200">
        <Switch>
          <Route exact path="/flashcards" component={Flashcard} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
      <footer className="bg-green-900">Footer</footer>
    </Router>
  );
}

export default App;
