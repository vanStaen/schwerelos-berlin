import React from "react";
import { TweenMax, Cubic } from "gsap/all";

import logoSchwerelos from "../../img/image00006.jpeg";

import "./Logo.less";

export const Logo = () => {
  return (
    <img src={logoSchwerelos} alt="Logo Schwerelos Berlin" className="logo" />
  );
};
