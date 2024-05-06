import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Pagination = () => {
  const [images, setimages] = useState([]);
  const [page, setpage] = useState(1);

  const getImages = async () => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      console.log(data);
      setimages(data);
    } catch (error) {
      console.log(error);
    }
  };

  let renderedimages = "Loading...";
  if (images.length > 0) {
    renderedimages = images.map((image) => (
      <div className="shadow w-[25%] p-3 mr-2 mb-2" key={image.id}>
        <img className="" src={image.download_url} />

        <small>{images.author}</small>
      </div>
    ));
  }

  useEffect(() => {
    getImages();
  }, [page]);

  console.log(page);

  return (
    <div className="text-center">
      <h1 className="font-extrabold text-2xl">Book Entry</h1>
      <br />

      <div className="flex justify-center flex-wrap ">{renderedimages}</div>
      {/* <div className="gap-4 text-center"> */}
      <span onClick={page + 1} className="bg-blue-500 font-3xl ">
        Prev
      </span>
      <span onClick={page - 1} className="bg-blue-500 font-3xl">
        Next
      </span>
      {/* </div> */}
    </div>
  );
};

export default Pagination;
