import React from "react";
import BannerAvatar from "./BannerAvatar";
import BannerTexts from "./BannerTexts";
import FloatingActionComponents from "./FloatingActionComponents";

function Banner() {
  return (
    <div className="banner">
      <BannerTexts />
      <BannerAvatar />
      <FloatingActionComponents />
    </div>
  );
}

export default Banner;
