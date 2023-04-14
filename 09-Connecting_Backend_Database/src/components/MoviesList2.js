import React from 'react';

import Movie2 from './Movie2'
import classes from './MoviesList.module.css';

const MoviesList2 = (props) => {
  return (
    <ul className={classes['movie-list']}>
      {props.movies.map((movie) => (
        <Movie2
          key= {movie.id}
          title= {movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MoviesList2;