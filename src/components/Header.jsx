import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Movies
      </NavLink>
    </header>
  );
}
