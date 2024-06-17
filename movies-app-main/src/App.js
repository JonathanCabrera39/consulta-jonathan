import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMoviesFetch } from "./api/getMoviesFetch";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesFetch()
    
    .then((data) => setMovies(data))
    
    .catch((error) => console.error("error fechhing movie", error));
    }, []);
    
    console.log(movies);
    
  return (
    <>
      <div className="container my-5 text-center">
        <h2 className="mb-4 text-primary">Movies App</h2>
        <div className="row">
          {movies.map((item) =>( 
            <MovieCard  key={item._id} item = {item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
