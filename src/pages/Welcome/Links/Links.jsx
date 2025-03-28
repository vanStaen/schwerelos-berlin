import React from "react";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

import InstaLogo from "../../../img/logos/instaLogo.png";
import LinkTreeLogo from "../../../img/logos/linkTreeLogo.png";
import ResidentAdvisorLogo from "../../../img/logos/residentAdvisorLogo.png";
import SoundcloudLogo from "../../../img/logos/soundcloudLogo.png";
import TelegramLogo from "../../../img/logos/telegramLogo.png";

import "./Links.less";

export const Links = () => {
  const { t } = useTranslation();
  return (
    <div className="containerLink">
      <div className="link">
        <Tooltip title={`Telegram ${t("welcome.channel")}`} color="#2BC487">
          <a href="https://t.me/+3zopKOUXZK5IMzBi" target="_blank">
            <img src={TelegramLogo} className="logoTelegram" />
          </a>
        </Tooltip>
      </div>
      <div className="link">
        <Tooltip title="Instagram" color="#9F44D9">
          <a
            href="https://www.instagram.com/schwerelos_berlin/"
            target="_blank"
          >
            <img src={InstaLogo} className="logoInsta" />
          </a>
        </Tooltip>
      </div>
      <div className="link">
        <Tooltip title="Linktr.ee" color="#F70069">
          <a href="https://linktr.ee/schwerelos_berlin" target="_blank">
            <img src={LinkTreeLogo} className="logoLinkTree" />
          </a>
        </Tooltip>
      </div>
      <div className="link">
        <Tooltip title="Resident Advisor" color="#2BC487">
          <a href="https://ra.co/labels/21798" target="_blank">
            <img src={ResidentAdvisorLogo} className="logoRa" />
          </a>
        </Tooltip>
      </div>
      {/*<div className="link">
            <Tooltip title="Soundcloud" color="#9F44D9">
                <a href="https://soundcloud.com/schwerelos-berlin" target="_blank">
                    <img src={SoundcloudLogo} className="logoSoundcloud" />
                </a>
            </Tooltip>
        </div>*/}
    </div>
  );
};
