import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Landingdiv = ({ b, l }) => {
  const [movie1, setMovie1] = useState(null);

  useEffect(() => {
    const fetchd = async () => {
      let res1 = await axios.get(
        "https://api.themoviedb.org/3/movie/1236153?api_key=7ab9ab34432e0448cbe46edd644420d7",
      );
      setMovie1(res1.data);
    };
    fetchd();
  }, []);
  if (!movie1 || !l) {
    return <div className="text-white p-5">Loading...</div>;
  }
  return (
    <div className="bg-amber-300 w-full min-h-[45vh]  justify-center relative z-0 ">
      <div className="w-full h-full overlay absolute z-10 "></div>
      <div className="absolute  max-w-2xl  p-5  z-20">
        <p className="mt-1 mb-1 text-amber-400 flex flex-wrap gap-2 sm:gap-3">
          {movie1.genres.map((elem) => {
            return <span key={elem.id}>{elem.name}</span>;
          })}
        </p>
        <p className="text-7xl font-bold py-2 text-white mb-2 ">{l.title}</p>
        <div className="my-3 text-gray-400">
          <span>
            <i className="ri-star-s-fill me-5 text-amber-300 ">
              {l.vote_average.toFixed(1)}
            </i>
          </span>
          <span className="me-5">{l.release_date.slice(0, 4)}</span>
          <span>{l.popularity.toFixed(1)}</span>
        </div>
        <div className="my-3 text-gray-400 ">{l.overview}</div>
        <Link to={`/Details/${l.id}`}>
          <button className="h-10 rounded-md bg-amber-300 px-3 flex justify-center items-center mt-5 hover:bg-amber-400  ">
            <i className="ri-play-line pe-1  i "></i>
            <span className="font-bold">View Details</span>
          </button>
        </Link>
      </div>
      <img
        src={b}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default Landingdiv;
