import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="navbar">
        <div className="nav_resumes">
          <NavLink to="/experians">Опыт работы</NavLink>
          <NavLink to="/education">Образование</NavLink>
          <NavLink to="/hobby">Хобби и увлечения</NavLink>
        </div>
        <ul id="cap">
          <li>Город Бишкек</li>
          <li>+996501304053</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
