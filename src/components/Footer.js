import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import { SiVk } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";



export default function Footer() {
  return (
<footer className="footer">
  <div className="footer__content">
    <div className="footer__section">
      <h3 className="footer__heading">Обо мне</h3>
      <p className="footer__text">Создаю крутые проекты и помогаю людям воплощать их идеи в жизнь.</p>
    </div>
    <div className="footer__section">
      <h3 className="footer__heading">Социальные сети</h3>
      <div className="footer__social">
        <a href="https://github.com/Hilolll" className="footer__social-link" aria-label="Github">
        <RiGithubLine />

        </a>
        <a href="https://vk.com/unthpre" className="footer__social-link" aria-label="VK">
        <SiVk />
        </a>
        <a href="https://www.instagram.com/sleepyxil?igsh=OGE5Y3BwMWphZHdw&utm_source=qr" className="footer__social-link" aria-label="Instagram">
        <FiInstagram />
        </a>
        <a href="https://t.me/inullllllll" className="footer__social-link" aria-label="Telegram">
        <RiTelegram2Fill />

        </a>
      </div>
    </div>
  </div>
  <div className="footer__bottom">
    <p className="footer__copyright">&copy; 2025 Все права защищены.</p>
  </div>
</footer>


  )
}
