import React from "react";
import logo from "../assets/logo_2.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

function Header() {
  return (
    <div className="header container">
      <a href="https://www.github.com/thekiwidev/">
        <img src={logo} alt="the-kiwi-dev_logo" className="logo" />
      </a>
      <nav>
        <a href="https://www.github.com/thekiwidev/">
          <FaWhatsapp />
        </a>
        <a href="https://www.github.com/thekiwidev/">
          <FiGithub />
        </a>
        <a href="https://www.instagram.com/thekiwidev/">
          <FiInstagram />
        </a>
        <a href="https://www.twitter.com/thekiwidev/">
          <FiTwitter />
        </a>
      </nav>
    </div>
  );
}
export default Header;
