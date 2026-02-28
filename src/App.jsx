import { useEffect, useState } from "react";
import Card_Container from "./Components/Card_Container";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Landingdiv from "./Components/Landingdiv";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
const App = () => {
  const [movie, setMovie] = useState([]);
  const [nowplay, setNowplay] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [filter, setFilter] = useState("");
  const [allmovies, setAllmovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7ab9ab34432e0448cbe46edd644420d7",
      );
      setMovie(res.data.results);
      console.log(res.data.results[0].backdrop_path);
      let res2 = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=7ab9ab34432e0448cbe46edd644420d7",
      );
      setNowplay(res2.data.results);
      let res3 = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=7ab9ab34432e0448cbe46edd644420d7",
      );
      setToprated(res3.data.results);
      const merged = [
        ...res.data.results,
        ...res2.data.results,
        ...res3.data.results,
      ];
      setAllmovies(merged);
    };
    fetch();
  }, []);
  const categories = [
    { title: "Trending Now", movie: movie },
    { title: "Popular", movie: nowplay },
    { title: "Top Rated", movie: toprated },
  ];
  const filtered = allmovies.filter((elem, idx) => {
    if (!filter) return true;
    return elem.title.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <div className="h-screen w-screen flex flex-col bg-violet-300 overflow-x-hidden">
      <Navbar filter={filter} setFilter={setFilter} filtered={filtered} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landingdiv
                b={
                  movie[0] &&
                  `https://image.tmdb.org/t/p/w500${movie[0].backdrop_path}`
                }
                l={movie[0]}
              />
              {categories.map((elem, idx) => {
                return <Card_Container movie={elem.movie} title={elem.title} />;
              })}
            </>
          }
        ></Route>
        <Route path="/Details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
