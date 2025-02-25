import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className='logo'>X</Link>
      <div className='header__nav'>
        <a href="#projects" className='nav__link'>Пет-проекты</a>
        <Link to="/about" className='nav__links'>Обо мне</Link>
        <Link to="/contacts" className='nav__links'>Контакты</Link>
      </div>
    </header>
  );
}