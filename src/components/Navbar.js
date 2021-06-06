import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-300">
      <ul>
        <li>
          <NavLink to="/">Logo</NavLink>
        </li>
        <li>
          <NavLink to="/flashcards" activeClassName="text-white">
            FlashCards
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="text-white">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="text-white">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
