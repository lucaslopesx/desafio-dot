import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IoHeart } from 'react-icons/io5';
import { VscStarFull } from 'react-icons/vsc';


type Movie = {
  title: string;
  poster_path: string;
};

export default function MovieList() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const getMovieRequest = async () => {
    const url =
      'https://api.themoviedb.org/3/movie/popular?api_key=dc35ea9a8f93b99ec2a67ce9ce0238b2&language=en-US&page=1://api.themoviedb.org/3/trending/all/day?api_key=dc35ea9a8f93b99ec2a67ce9ce0238b2';

    const response = await fetch(url);
    const responseJSON = await response.json();

    console.log(responseJSON.results);
    setMovie(responseJSON.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className={styles.movieListWrapper}>
      {movie.map((movie) => {
        return (
          <div className={styles.movieWrapper}>
            <div>
              <img
                className={styles.imageStyle}
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt=''
              />
            </div>
            <p className={styles.title}>{movie.title}</p>
            <div className={styles.actions}>
              <a href='#'>
                <VscStarFull size='22' />
              </a>
              <a href='#'>
                <IoHeart size='22' />
              </a>
            </div>
            <p className={styles.genre}>Genre</p>
            <p className={styles.price}>R$9.99</p>
            <button className={styles.add}>Adicionar</button>
          </div>
        );
      })}
    </div>
  );
}
