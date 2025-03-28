import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import {
  MailOutlined,
  QuestionOutlined,
  FileTextOutlined,
  BarcodeOutlined,
  SkinOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import federLogo from "../../img/logos/federLogo.png";
import { userStore } from "../../store/userStore";
import { pageStore } from "../../store/pageStore";
import { logout } from "./logout";

import "./Menu.less";

export const Menu = observer((props) => {
  const [showMenu, setShowMenu] = useState(true);
  const { t } = useTranslation();

  const handleClickAbout = () => {
    pageStore.setShowAbout(!pageStore.showAbout);
    if (pageStore.showAbout) { setShowMenu(!showMenu); }
  }

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
              <a href='https://drive.google.com/drive/folders/16I5nQsiBJvO0Eg-2NqBtDmeOf67yyg__' target='_blank'>
                Presskit <FileTextOutlined />
              </a>
            </li>
            <li>
              <a href='mailto:booking@schwerelos-berlin.com'>
                Booking <MailOutlined />
              </a>
            </li>
            <li onClick={handleClickAbout}>
              <a >
                {t("menu.about")} <QuestionOutlined />
              </a>
            </li>
            {/* <li>
              <a
                onClick={() => {
                  userStore.isAdmin
                    ? logout(t("login.logoutSuccess"))
                    : props.setShowLoginForm(true);
                }}
              >
                {userStore.isAdmin ? "Logout" : "Login"} <LockOutlined />
              </a>
            </li> */}
            {userStore.isAdmin ? (
              <Tooltip title="Admin" color="#2BC487" placement="bottom">
                <Link to="/admin/">
                  <img src={federLogo} className="federLogo" />
                </Link>
              </Tooltip>
            ) : (
              <img src={federLogo} className="federLogo" />
            )}
          </ul>
        </nav>
      </div>
      <div
        className={showMenu ? "menu-bg" : "menu-bg change-bg"}
        id="menu-bg"
      ></div>
    </>
  );
});
