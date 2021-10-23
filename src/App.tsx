import { useState } from 'react';
import { Header } from './components/Header';
import MovieList from './components/MovieList';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>
        <MovieList />
      </main>
    </>
  );
}

export default App;
