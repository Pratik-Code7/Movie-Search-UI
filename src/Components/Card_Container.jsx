import { useRef } from "react";
import Card from "./Card";
const Card_Container = ({ movie, title }) => {
  const btndiv = useRef(null);
  const moveright = () => {
    btndiv.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  const moveleft = () => {
    btndiv.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black px-5 py-3 flex flex-col gap-3  w-full  ">
      <h1 className="text-3xl font-bold text-white ">{title}</h1>
      <div className=" relative group/con">
        <div
          ref={btndiv}
          className="flex gap-3   overflow-x-auto scrollbar  scroll-smooth "
        >
          {/* <div className="  w-full h-60 flex items-center justify-between z-10 text-white font-bold text-xl absolute opacity-0 hover:opacity-100 transition duration-300 "> */}

          {movie.map((elem) => {
            return (
              <Card
                key={elem.id}
                a={elem.poster_path}
                id={elem.id}
                name={elem.title}
                star={elem.vote_average.toFixed(1)}
              />
            );
          })}
          <button
            onClick={() => moveleft()}
            className="rounded-full h-9 w-9 bg-black  flex items-center justify-center text-white font-bold text-xl absolute  z-40  top-1/2  opacity-0 group-hover/con:opacity-100 transition duration-300 "
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            onClick={() => moveright()}
            className=" rounded-full h-9 w-9 bg-black  flex items-center justify-center  text-white font-bold text-xl absolute z-40 right-0 top-1/2 opacity-0 group-hover/con:opacity-100 transition duration-300"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card_Container;
