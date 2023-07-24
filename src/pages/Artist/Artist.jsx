import React from "react";
import { observer } from "mobx-react";
import { Tooltip } from "antd";

import { artistStore } from "../../store/artistStore";
import { pageStore } from "../../store/pageStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";

import InstaLogo from "../../img/logos/instaLogo.png";
import ResidentAdvisorLogo from "../../img/logos/residentAdvisorLogo.png";
import SoundcloudLogo from "../../img/logos/soundcloudLogo.png";

import "./Artist.less";

export const Artist = observer(() => {
  const artistProfile = artistStore.artists.map((artist) => {
    /*const handleMouseOver = (id) => {
      console.log("Here", id);
      const element = document.getElementById(id);
      element.style.display = "block";
    };
    const handleMouseOut = (id) => {
      console.log("Here", id);
      const element = document.getElementById(id);
      element.style.display = "none";
    };*/
    return (
      <div
        id={`div_${artist.name}`}
        className="artist"
        /*onMouseOver={() => {
        handleMouseOver(`social_${artist.name}`);
        }}
        onMouseOut={() => {
          handleMouseOut(`social_${artist.name}`);
        }}*/
      >
        <div id={`social_${artist.name}`} className="artistSocial">
          <div className="artistLink">
            <Tooltip title="Resident Advisor">
              <a href="https://ra.co/labels/21798" target="_blank">
                <img src={ResidentAdvisorLogo} className="artistLinkLogoRa" />
              </a>
            </Tooltip>
          </div>
          <div className="artistLink">
            <Tooltip title="Soundcloud">
              <a
                href="https://soundcloud.com/schwerelos-berlin"
                target="_blank"
              >
                <img src={SoundcloudLogo} className="artistLinkLogoSc" />
              </a>
            </Tooltip>
          </div>
          <div className="artistLink">
            <Tooltip title="Instagram">
              <a href="https://instagram.com/schwerelos_berlin" target="_blank">
                <img src={InstaLogo} className="artistLinkLogoInsta" />
              </a>
            </Tooltip>
          </div>
        </div>
        {/*<div className="artistName">{artist.name}</div>*/}
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <div className="backgroundOpacity"></div>
      <div className="artistContainer">
        <GlitchText
          glitchText={artistStore.artists[pageStore.selectedArtistId].name}
          overText="schwerelos is"
        />
        <div className="artistCarousel">
          <Carousel faces={artistProfile} />
        </div>
      </div>
    </div>
  );
});
