import React from "react";
import Telegram from "./images/121521.png";
import instagram from "./images/3991662.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer">
          <a
            href="https://www.instagram.com/p/CHXPvLzlS-y/?img_index=1"
            target="_blank"
          >
            <img src={Telegram} alt="" />
          </a>
          <a href="https://tlgrm.ru/channels/@CatsLand" target="_blank">
            <img src={instagram} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
