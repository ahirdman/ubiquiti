import React from 'react';
import './Header.scss';
import logo from '../assets/Ubiquiti_logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="logo" />
      <section className="header__text">
        <p className="header__text--title">Devices</p>
        <p className="header__text--author">Alexander Hirdman</p>
      </section>
    </header>
  );
}

export default Header;
