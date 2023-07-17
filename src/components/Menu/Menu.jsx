import React, { useState } from "react";
import {
  MailOutlined,
  QuestionOutlined,
  FileTextOutlined,
  BarcodeOutlined,
} from "@ant-design/icons";

import federLogo from "../../img/logos/federLogo.png";
import { cubeSliderStore } from "../CubeSlider/cubeSliderStore";

import "./Menu.less";

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
                  setShowMenu(!showMenu);
                  cubeSliderStore.showLeft(4);
                }}
              >
                <BarcodeOutlined /> Tickets
              </a>
            </li>
            <li>
              <a>
                <FileTextOutlined /> Presskit
              </a>
            </li>
            <li>
              <a>
                <MailOutlined /> Booking
              </a>
            </li>
            <li>
              <a>
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
