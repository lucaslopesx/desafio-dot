import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { IoHeart } from 'react-icons/io5';
import { VscStarFull } from 'react-icons/vsc';
import api from '../../service/api';

import venomImg from '../../assets/venom.jpg';
import injusticeImg from '../../assets/injustice.jpg';

type Movie = {
  id: string; //
  results: [title: string, poster_path: string];
};

export default function MovieList() {
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    api.get<Movie[]>('').then((res: any) => {
      setMovie(res.data);
    });
    console.log(movie);
  }, []);

  return (
    <div className={styles.movieListWrapper}>
      {movie.map((movie) => {
        <div>{movie.results[0]}</div>;
      })}
      <div className={styles.movieWrapper}>
        <div>
          <img className={styles.imageStyle} src={injusticeImg} alt='' />
        </div>
        <p className={styles.title}>Venom</p>
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
    </div>
  );
}
