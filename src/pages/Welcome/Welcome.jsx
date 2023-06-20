import React from "react";
import { Tooltip } from "antd";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { Artist } from "../Artist/Artist";
import { Logo } from "./Logo";
import { LinksProfiles } from "./LinksProfiles";
import { Menu } from "./Menu";

import InstaLogo from "../../img/instaLogo.png";
import LinkTreeLogo from "../../img/linkTreeLogo.png";
import ResidentAdvisorLogo from "../../img/residentAdvisorLogo.png";

import "./Welcome.less";

export const Welcome = observer(() => {
  const artistClickHandler = (id) => {
    pageStore.setSelectedArtistId(id);
  };

  return pageStore.selectedArtistId ? (
    <Artist id={pageStore.selectedArtistId} />
  ) : (
    <div className="welcome">
      <LinksProfiles />
      <Menu />
      <Logo />
      <div className="container">
        <div className="link">
          <Tooltip title="Instagram" color="#2bc487">
            <a
              href="https://www.instagram.com/schwerelos_berlin/"
              target="_blank"
            >
              <img src={InstaLogo} className="logoInsta" />
            </a>
          </Tooltip>
        </div>
        <div className="link">
          <Tooltip title="Linktr.ee" color="#9F44D9">
            <a href="https://linktr.ee/schwerelos_berlin" target="_blank">
              <img src={LinkTreeLogo} className="logoLinkTree" />
            </a>
          </Tooltip>
        </div>
        <div className="link">
          <Tooltip title="Resident Advisor" color="#F70069">
            <a href="https://ra.co/labels/21798" target="_blank">
              <img src={ResidentAdvisorLogo} className="logoRa" />
            </a>
          </Tooltip>
        </div>
      </div>
      <br />
    </div>
  );
});
