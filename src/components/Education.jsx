import React from "react";
import Avatar from "./images/photo1700553688.jpeg";
const Education = () => {
  return (
    <div>
      <div className="resumes">
        <div class="sidebar">
          <img src={Avatar} alt="" />
          <h2>Личные данные</h2>
          <ul>
            <li>
              Ф.И.О <br />
              Братских Виктория
            </li>
            <li>
              Адрес <br />
              ул. 7 апреля, 2/19. <br />
              гр. Бишкек
            </li>
            <li>
              Номер телефона
              <br />
              +996501304053
            </li>
            <li>
              Email
              <br />
              peace.kokos@gmail.com
            </li>
          </ul>
          <h2>Навыки</h2>
          <ul>
            <li>Коммуникабельность</li>
            <li>Исполнительность</li>
            <li>Способность адаптироваться</li>
            <li>Организованность</li>
          </ul>
          <h2>Интересы</h2>
          <ul>
            <li>Политика</li>
            <li>Культуры разных стран</li>
            <li>Чтеник книг</li>
          </ul>
        </div>
        <div className="content_resumes">
          <h2 class="block">Образование</h2>
          <span class="period">сенябрь 2018-июнь2021</span>
          <span>
            <b>Среднее Профессиальное Образование</b>
          </span>
          <ul id="li">
            <li>Азиастский инновационный коллеж.</li>
            <li>адрес: 60 ул. Тоголок Молдо, Бишкек</li>
          </ul>
          <span class="period">сенябрь 2008-июнь2018</span>
          <span>
            <b>Среднее Образование</b>
          </span>
          <ul id="li">
            <li>Средне образовательная школа гэс-5 имени "Давида".</li>
            <li>пос. Дачный. Аламудунский район, Чуйская Область.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
