import React, { useState } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { Logo } from "./Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import { Links } from "./Links/Links";
import { NextGigsBanner } from "./NextGigsBanner/NextGigsBanner";
import { pageStore } from "../../store/pageStore";
import { LoginForm } from "../../components/LoginForm/LoginForm";

import Swipe from "../../img/swipe.png";

import "./Welcome.less";

export const Welcome = observer(() => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {showLoginForm && <LoginForm close={setShowLoginForm} />}
      <div className="container">
        <div className="background"></div>
        <div className="backgroundOpacity"></div>
        <div className="backgroundDegrade"></div>
        <div className="welcome">
          <Menu showLoginForm={setShowLoginForm} />
          {pageStore.showAbout && <div className="welcome__about">{t('welcome.about')}</div>}
          <Logo opacity={pageStore.showAbout ? .25 : 1} />
          <Links />
          <NextGigsBanner />
          <br />
          {!pageStore.hideSwipe && <img src={Swipe} className="swipe" />}
        </div>
      </div>
    </>
  );
});
