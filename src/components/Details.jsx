import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  console.log(pathname);
  return (
    <div>
      <h1 className="text-2xl">Details</h1>
      <h1 className="text-xl mt-5">
        Book Id: <span className="font-bold">{id}</span>
      </h1>
      <br />
      <Link className="text-blue-500" to={`${pathname}/profile`}>
        Profile
      </Link>
      <br />
      <button
        className="mt-5 bg-red-300 px-3 py-1 rounded-md
      "
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default Details;
