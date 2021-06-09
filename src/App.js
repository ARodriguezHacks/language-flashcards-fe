import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flashcards from "./views/flashcards/Flashcards";
import Landing from "./views/landing/Landing";
import Navbar from "./components/Navbar";
import Login from "./views/login/Login";
import About from "./views/about/About";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-green-200">
        <Switch>
          <Route exact path="/flashcards" component={Flashcards} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <footer className="bg-green-900">Footer</footer>
    </Router>
  );
}

export default App;
