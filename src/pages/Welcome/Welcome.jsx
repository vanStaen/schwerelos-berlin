import React from "react";
import { observer } from "mobx-react";

import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { Links } from "./Links/Links";
import { Artist } from "../Artist/Artist";

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
          <br />
          <br />
        </div>
      </div>
      <Artist />
    </>
  );
});
