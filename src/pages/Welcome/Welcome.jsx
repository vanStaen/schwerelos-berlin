import React from "react";
import { observer } from "mobx-react";

import { Logo } from "./Logo/Logo";
import { Menu } from "../../components/Menu/Menu";
import { Links } from "./Links/Links";
import { NextGigsBanner } from "./NextGigsBanner/NextGigsBanner";
import { pageStore } from "../../store/pageStore";

import swipe from "../../img/logos/swipe.png";

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
          {pageStore.showSwipe && (
            <img
              className="swipe"
              src={swipe}
              alt="Swipe right & left"
              onClick={() => {
                pageStore.setShowSwipe(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
});
