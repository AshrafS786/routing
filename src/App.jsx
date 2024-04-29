import Nav from "./components/Nav";
import RoutesComponent from "./routing/RoutesComponent";

const App = () => {
  
  return (
    <div className="w-[80%] m-auto h-screen ">
      <Nav />
      <hr />
      
      <RoutesComponent />
    </div>
  );
};

export default App;
