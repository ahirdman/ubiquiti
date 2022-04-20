import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../assets/Ubiquiti_logo.svg';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="logo" />
    </Link>
    <section className="header__text">
      <p className="header__text--title">Devices</p>
      <p className="header__text--author">Alexander Hirdman</p>
    </section>
  </header>
);

export default Header;
