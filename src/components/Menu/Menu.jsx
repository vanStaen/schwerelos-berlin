import React, { useState } from "react";
import {
  MailOutlined,
  QuestionOutlined,
  FileTextOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import federLogo from "../../img/logos/federLogo.png";

import "./Menu.less";
import { cubeSliderStore } from "../CubeSlider/cubeSliderStore";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div className="menu">
        <div
          className={showMenu ? "menu-bar" : "menu-bar change"}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div id="bar1" className="bar"></div>
          {showMenu && <div className="spacer"></div>}
          <div id="bar2" className="bar"></div>
          {showMenu && <div className="spacer"></div>}
          <div id="bar3" className="bar"></div>
        </div>
        <nav className={showMenu ? "nav" : "nav change"}>
          <ul className="list">
            <li>
              <a
                onClick={() => {
                  cubeSliderStore.showRight(1);
                }}
              >
                <TeamOutlined /> Artists
              </a>
            </li>
            <li>
              <a href="#">
                <FileTextOutlined /> Presskit
              </a>
            </li>
            <li>
              <a href="#">
                <MailOutlined /> Booking
              </a>
            </li>
            <li>
              <a href="#">
                <QuestionOutlined /> About
              </a>
            </li>
            <img src={federLogo} className="federLogo" />
          </ul>
        </nav>
      </div>
      <div
        className={showMenu ? "menu-bg" : "menu-bg change-bg"}
        id="menu-bg"
      ></div>
    </>
  );
};
