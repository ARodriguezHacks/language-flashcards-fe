import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flashcards from "./views/flashcards/Flashcards";
import Landing from "./views/landing/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./views/login/Login";
import SignUp from "./views/login/SignUp";
import About from "./views/about/About";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-green-200 min-h-screen">
        <Switch>
          <Route exact path="/flashcards" component={Flashcards} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
