import { useState } from 'react';
import { Header } from './components/Header';
import MovieList from './components/MovieList';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.contentWrapper}>
        <MovieList />
      </main>
    </div>
  );
}

export default App;
