import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="bg-red-300">
      <ul className="grid grid-cols-12 grid-cols-1 py-4 justify-items-center">
        <li className="col-span-4">
          <NavLink to="/">
            <Logo height="34" width="34" />
          </NavLink>
        </li>
        <li className="col-span-2 hover:text-white">
          <NavLink to="/flashcards" activeClassName="text-white">
            FlashCards
          </NavLink>
        </li>
        <li className="col-span-2 hover:text-white">
          <NavLink to="/about" activeClassName="text-white">
            About
          </NavLink>
        </li>
        <li className="col-span-2 hover:text-white">
          <NavLink to="/login" activeClassName="text-white">
            Login
          </NavLink>
        </li>
        <li className="col-span-2 hover:text-white">
          <NavLink to="/signup" activeClassName="text-white">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
