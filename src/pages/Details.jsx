import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [yt, setYt] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=7ab9ab34432e0448cbe46edd644420d7`,
      );
      setMovie(res.data);
    };
    fetch();
  }, [id]);
  useEffect(() => {
    const fetch1 = async () => {
      let res1 = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7ab9ab34432e0448cbe46edd644420d7`,
      );
      setYt(res1.data.results[1].key);
      console.log(res1.data.results[1].key);
    };
    fetch1();
  }, [id]);
  //   console.log(id);
  if (!movie) return <div>Loading...</div>;
  return (
    <div>
      <div className="bg-violet-200 h-84 relative ">
        <div className="w-full h-full overlay2 absolute z-10 "></div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full bg-black flex flex-col p-5">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="bg-gray-700 h-9 w-16 my-3 flex justify-center items-center rounded-2xl px-10 cursor-pointer text-white"
        >
          <i class="ri-arrow-go-back-line me-1"></i>
          <p>Back</p>
        </div>
        <div className="flex">
          <div className="h-92 w-72 rounded-xl overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full  px-8">
            <div className="flex gap-10 text-gray-400">
              {movie.genres.map((elem, idx) => {
                return <span>{elem.name}</span>;
              })}
              {/* <span>Drama</span>
            <span>Action</span>
            <span>Crime</span>
            <span>Thriller</span> */}
            </div>
            <h1 className="text-6xl font-bold py-5 text-white">
              {movie.title}
            </h1>

            <div className="my-2 flex gap-8">
              <span className="text-gray-400">
                <i className="ri-star-s-fill  text-amber-300  ">
                  {movie.vote_average.toFixed(1)}
                </i>
                /10
              </span>
              <span className="text-gray-400">({movie.vote_count} votes)</span>
              <span className="text-gray-400">{movie.release_date}</span>
            </div>
            <h1 className="font-bold text-2xl text-white  my-3">Overview</h1>
            <p className="text-gray-400">{movie.overview}</p>
            <h1 className="font-bold text-2xl text-white  my-3">
              Production Companies
            </h1>
            <div className="flex gap-9">
              {movie.production_companies.map((elem, idx) => {
                return (
                  <div className=" flex flex-col items-center">
                    <div className="rounded-full h-14 w-14 bg-white overflow-hidden ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.production_companies[idx].logo_path}`}
                        alt=""
                        className="h-full w-full object-contain p-1  "
                      />
                    </div>
                    <h1 className="text-gray-400 text-center m-2">
                      {movie.production_companies[idx].name}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className="font-bold text-2xl text-white  my-3">Teaser</div>
            <div>
              {/* width="560"
              height="315" */}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube-nocookie.com/embed/${yt}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
