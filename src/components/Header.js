import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">
      <Link to="/" className="logo">X</Link>
      {/* Бургер-кнопка */}
      <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`header__nav ${menuOpen ? 'active' : ''}`}>
      
        <a href="/projects" className="nav__links">Пет-проекты</a>
        <Link to="/about" className="nav__links">Обо мне</Link>
        <Link to="/contacts" className="nav__links">Контакты</Link>
    
      </div>
    </header>
  );
}
