import React from 'react'
import { VscCode } from "react-icons/vsc";

export default function AboutMe() {
  return (
    <div className='about-me'>

        <div className='about-me__container'>
          <div class="about-me__card">

            <div class="about-me__card__content">
            <p>Привет! Меня зовут Хилол, я начинающий веб-разработчик и студент СКФУ (Северо-Кавказский федеральный университет) по направлению "Информатика и вычислительная техника".
                <br></br>
                Активно развиваюсь в сфере веб-разработки и стремлюсь стать профессиональным веб-разработчиком. Изучаю современные технологии, создаю проекты и совершенствую свои навыки.
                
                <ul>

                Навыки и технологии:
                <li> <VscCode /> Frontend: HTML, CSS, Sass/SCSS, Tailwind CSS, BEM-methodology</li>
                <li> <VscCode /> JavaScript & TypeScript</li>
                <li> <VscCode /> React: React JS, React DOM, JSX, React Hook Form, работа с компонентами</li>
                <li> <VscCode /> Маршрутизация: React Router</li>
                <li> <VscCode /> Состояние приложения: Redux, Redux Toolkit</li>
                <li> <VscCode /> Backend: Node.js, MongoDB</li>
                <li> <VscCode /> DevOps: Docker</li>
                <li> <VscCode /> Системы контроля версий: Git</li>
                <li> <VscCode /> Создание и настройка проектов: React App</li>
                </ul>
                Всегда открыт новым знаниям и готов к развитию! 🚀</p>
       
            </div>
          </div>
        </div>
    </div>
  )
}
