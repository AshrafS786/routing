import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Entry from "../components/Entry";
import Library from "../components/Library";
import Details from "../components/Details";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Entry />} />
        <Route path="/page" element={<Entry />} />
        <Route path="/show" element={<Library />}>
          <Route path="/show/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  )
}

export default RoutesComponent
