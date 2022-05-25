import React from "react";
import logo from "../Assets/logo_2.svg";
import { Logo, Nav, SocialIcon } from "./Styled";
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <Logo src={logo} />
      <Nav>
        <SocialIcon href="https://www.github.com/thekiwidev" target="_blank">
          <FiGithub />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/thekiwidev" target="_blank">
          <FiInstagram />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com/thekiwidev" target="_blank">
          <FiTwitter />
        </SocialIcon>
      </Nav>
    </div>
  );
}
export default Header;
