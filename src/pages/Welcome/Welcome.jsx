import React, { useState } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { Logo } from "./Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import { Links } from "./Links/Links";
import { pageStore } from "../../store/pageStore";


import "./Welcome.less";

export const Welcome = observer(() => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="backgroundOpacity"></div>
      <div className="backgroundDegrade"></div>
      <div className="welcome">
        <Menu setShowLoginForm={setShowLoginForm} />
        {pageStore.showAbout && <div className="welcome__about" onClick={() => pageStore.setShowAbout(false)}>{t('welcome.about')}</div>}
        <Logo opacity={pageStore.showAbout ? .25 : 1} />
        <Links />
      </div>
    </div>
  )
});
