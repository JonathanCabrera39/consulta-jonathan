import React from "react";

const MovieCard = ({ item }) => {
  const { title, releaseYear, genre, director, actors, rating, image } = item;

  //   const Actores = movie.Actores.split(",");
  //   const Directores = movie.Directores.split(",");
  //   const generos = movie.generos.split(",");

  return (
    <div className="col-md-4 ">
      <div className="card mb-4 shadow-sm movie-card">
        <img
          src={`http://localhost:3977/${image}`}
          className="card-img-top"
          alt="Img de la pelicula"
        />
        <div className="card-body">
          <h5 className="card-title fs-3">{title}</h5>
          <p className="card-text text-secondary">{releaseYear}</p>
          <div className="additional-info">
            <p>
              <span className="fw-bold">Calificacion</span>
              {`${rating}/10`}
            </p>
            <p>
              <span className="fw-bold">Actores: {actors} </span>
            </p>
            <p>
              <span className="fw-bold">Directores:{director} </span>
            </p>
            <p>
              <span className="fw-bold">Géneros:{genre} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
