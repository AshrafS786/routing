import { Link, Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div>
      <h1 className="text-2xl">Library</h1>
      <ul className="m-3 list-none">
        <li className="list-item">
          <Link to="/show/1">Book 1</Link>
        </li>
        <li className="list-item">
          <Link to="/show/2">Book 2</Link>
        </li>
        <li className="list-item">
          <Link to="/show/3">Book 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet/>
    </div>
  );
};

export default Library;
