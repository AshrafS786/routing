import { useState } from "react";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const [posts, setposts] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/show");
  };

  const getPosts = async () => {
    try {
      const { data } = await axios.get("/posts");
      console.log(data);
      setposts(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderedposts = "Loading...";
  if (posts.length > 0) {
    renderedposts = posts.map((user) => (
      <div className="bg-green-600 p-3 mr-2 mb-2" key={user.id}>
        <h1 className="font-2xl">{user.name}</h1>
        <small>{user.email}</small>
      </div>
    ));
  }

  return (
    <div>
      <h1>Book Entry</h1>
      <button
        className="mt-5 px-2 py-1 bg-blue-400 rounded-sm"
        onClick={getPosts}
      >
        Get Posts
      </button>
      <br />
      <br />
      <button
        className="bg-blue-800 py-1 px-4 rounded-md "
        onClick={handleSubmit}
      >
        Submit
      </button>
<br />
      <br />
      <hr className="mb-4" />
      <div className="flex justify-center flex-wrap ">{renderedposts}</div>
    </div>
    
  );
};

export default Entry;
