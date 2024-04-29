import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center gap-6 p-3">
      <NavLink className={(e) => (e.isActive ? "bg-red-400 px-2 py-1 rounded-sm" : "")} to="/">
        Home
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "bg-red-400 px-2 py-1 rounded-sm" : "")} to="/create">
        Book Entry
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "bg-red-400 px-2 py-1 rounded-sm" : "")} to="/show">
        Library
      </NavLink>
    </nav>
  );
};

export default Nav;
