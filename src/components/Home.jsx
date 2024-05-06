import { useEffect, useRef, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
  const [users, setusers] = useState([]);

  const focusRef = useRef(null);

  useEffect(() => {
    console.log("Home.js Mounted!");
    focusRef.current.focus();
    //api call

    return () => {
      console.log("Home.js UnMounted!");
    }
  }, []);
  console.log("Home.js Loaded!");

  // const getUsers = async () => {
  //   try {
  //     const { data } = await axios.get("/users");
  //     console.log(data);
  //     setusers(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
  //   getUsers();
  // }, []); //deletion

  return (
    <div>
      <h1 className="font-extrabold text-2xl">HomePage</h1> <br />
      <input type="text" placeholder="Username" className="py-1 px-3 rounded-sm text-black" />
      <br />
      <br />
      <input ref={focusRef} type="text" placeholder="Name" className="py-1 px-3 rounded-sm text-black" />
      <br />
      <br />
      <input type="text" placeholder="Email" className="py-1 px-3 rounded-sm text-black" />
      <br />
      <br />
      {/* <div className="flex justify-center flex-wrap ">{renderedusers}</div> */}
    </div>
  );
};

export default Home;
