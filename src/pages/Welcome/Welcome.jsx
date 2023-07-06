import React from "react";
import { observer } from "mobx-react";

import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { Links } from "./Links/Links";

import "./Welcome.less";

export const Welcome = observer(() => {

  return (<div className="welcome">
    <Menu />
    <Logo />
    <div className="container">
      <Links />
    </div>
    <br />
  </div>)
});
