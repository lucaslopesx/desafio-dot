import React from 'react';
import styles from './styles.module.scss';
import { VscSearch } from 'react-icons/vsc';
import { IoCart, IoHeart } from 'react-icons/io5';
import logo from '../../assets/logo.svg';

export function Header(props: any) {
  let searchIconStyled = { paddingLeft: '8px' };
  return (
    <header className={styles.header}>
      <img src={logo} alt='project logo' />
      <div>
        <input />
        <a href='#'>
          <VscSearch size='28' style={searchIconStyled} />
        </a>
      </div>
      <div>
        <a href='#'>
          <IoHeart size='35' />
        </a>
        <a href='#'>
          <IoCart size='35' />
        </a>
      </div>
    </header>
  );
}
