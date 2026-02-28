import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = ({ filter, setFilter, filtered }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-black py-2 px-5 w-full min-h-16 items-center gap-5">
      <div
        className="flex items-center gap-2 text-white font-bold text-2xl   "
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="" className="h-8 object-cover cursor-pointer" />
        <h1 className="cursor-pointer">AURAVERSE</h1>
      </div>
      <div className="relative">
        <div className="flex  justify-center items-center bg-gray-500 border border-gray-400 rounded">
          <i className="ri-search-line text-white mx-5 my-2 "></i>
          <input
            type="text"
            placeholder="Search movies"
            value={filter}
            className=" w-96  h-9 rounded outline-0 text-white"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <div className="bg-gray-600 w-full max-h-96 absolute z-30  a1 overflow-auto flex flex-col items-center rounded  text-white my-2">
          {filter &&
            filtered.map((elem, idx) => {
              return (
                <div
                  key={elem.id}
                  value={filter}
                  className="w-106 h-9 bg-gray-500 m-1 flex items-center p-3 rounded  cursor-pointer"
                  onClick={() => {
                    navigate(`/Details/${elem.id}`);
                    setFilter("");
                  }}
                >
                  {elem.title}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
