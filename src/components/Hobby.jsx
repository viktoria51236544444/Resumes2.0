import React from "react";
import Avatar from "./images/photo1700553688.jpeg";
const Hobby = () => {
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
          <h2 class="block">Хобби и увлечения</h2>
          <ul id="li">
            <li>
              Люблю читать книги, изучать политику, изучать культуру разных
              стран, их законы и мировозрение. Рисовать, люблю кататься во время
              горнолыжного сезона на сноуборде, Также мне нравится проводить
              время за собиранием пазла и лего, люблю катание на велосипеде,
              роликах, скейте, коньках. Также питаю большую любовь к дальним
              поездкам и всему новому
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
