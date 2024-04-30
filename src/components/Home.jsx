import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      console.log(data);
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderedusers = "Loading...";
  if (users.length > 0) {
    renderedusers = users.map((user) => (
      <div className="bg-green-600 p-3 mr-2 mb-2" key={user.id}>
        <h1 className="font-2xl ">Name: {user.name}</h1>
        <small className="text-[#cad435]">Email: {user.email}</small>
      </div>
    ));

  }

// useEffect(() => {}) //Creation
// useEffect(() => {}, []) //updation
// useEffect(() => {

// }, []) //deletion

  return (
    <div>
      <h1 className="font-extrabold text-2xl">HomePage</h1>
      <button
        className="mt-5 px-2 py-1 bg-blue-400 rounded-sm"
        onClick={getUsers}
      >
        Get Users
      </button>
      <br />
      <br />
      <hr className="mb-4" />
      <div className="flex justify-center flex-wrap ">{renderedusers}</div>
    </div>
  );
};

export default Home;
