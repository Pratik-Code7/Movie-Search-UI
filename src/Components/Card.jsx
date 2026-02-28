import { Link } from "react-router-dom";

const Card = ({ a, id, name, star }) => {
  return (
    <Link to={`/Details/${id}`}>
      <div className="h-60 w-44 rounded-xl overflow-hidden shrink-0 relative  group ">
        <div
          className=" flex  flex-col justify-end absolute  translate-y-full  z-40  h-full w-full  group-hover:translate-y-0 opacity-100
       transition-transform duration-300 ease-in-out"
        >
          <div className="bg-red-300 flex justify-center flex-col h-16 poptxt ">
            <p className="    px-4 py-1">
              <span className="font-bold text-white">{name}</span>
              <br />
              <span>
                <i className="ri-star-s-fill me-5 st"> {star}</i>
              </span>
              <span>2008</span>
            </p>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${a}`}
          alt=""
          className="h-full w-full object-cover   group-hover:scale-110 transition duration-300  "
        />
      </div>
    </Link>
  );
};

export default Card;
