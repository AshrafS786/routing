import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Entry from "./components/Entry";
import Library from "./components/Library";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="w-[80%] m-auto h-screen ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Entry />} />
        <Route path="/show" element={<Library />}>
          <Route path="/show/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
