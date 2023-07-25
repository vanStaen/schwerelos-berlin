import React from "react";
import { observer } from "mobx-react";

import { Logo } from "./Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import { Links } from "./Links/Links";
import { NextGigsBanner } from "./NextGigsBanner/NextGigsBanner";
import { pageStore } from "../../store/pageStore";

import "./Welcome.less";

export const Welcome = observer(() => {
  return (
    <>
      <div className="container">
        <div className="background"></div>
        <div className="backgroundOpacity"></div>
        <div className="backgroundDegrade"></div>
        <div className="welcome">
          <Menu />
          <Logo />
          <Links />
          <NextGigsBanner />
          <br />
          {pageStore.showSwipe && <span className="swipe">← SWIPE →</span>}
        </div>
      </div>
    </>
  );
});
