import React from 'react';
import './Header.scss';
import logo from '../assets/Ubiquiti_logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='logo' />
      <section className='header__text' >
        <h1 className='header__text--title'>Devices</h1>
        <h2 className='header__text--author'>Alexander Hirdman</h2>
      </section>
    </header>
  )
}

export default Header