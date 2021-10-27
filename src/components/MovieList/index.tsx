import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IoHeart } from 'react-icons/io5';
import { VscStarFull, VscAdd, VscRemove } from 'react-icons/vsc';

type Movie = {
  title: string;
  poster_path: string;
};

export default function MovieList() {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const getMovieRequest = async (page: number) => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=dc35ea9a8f93b99ec2a67ce9ce0238b2&language=en-US&page=${page}`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    console.log(responseJSON.results);
    setMovie(responseJSON.results);
  };

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    getMovieRequest(page);
  }, [page]);

  function pageUp() {
    let input = document.getElementById('input-num');
  }

  return (
    <>
      <div className={styles.pageSearch}>
        <div>
          <h2>Página: {page}</h2>
        </div>
        <div className={styles.controllers}>
          <VscAdd
            size='23'
            className={styles.add}
            onClick={() => setPage((page) => page + 1)}
          />
          <VscRemove
            size='23'
            className={styles.remove}
            onClick={() =>
              setPage((page) => {
                if (page > 1) {
                  page--;
                }
                return page;
              })
            }
          />
        </div>
      </div>
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
    </>
  );
}
