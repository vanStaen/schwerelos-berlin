import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Tooltip } from "antd";

import { artistStore } from "../../store/artistStore";
import { pageStore } from "../../store/pageStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";

import InstaLogo from "../../img/logos/instaLogo.png";
import ResidentAdvisorLogo from "../../img/logos/residentAdvisorLogo.png";
import SoundcloudLogo from "../../img/logos/soundcloudLogo.png";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";
import b0ys_cry from "../../img/artists/b0ys_cry.jpg";
import nostique from "../../img/artists/nostique.jpg";
import johanneshillmer from "../../img/artists/johanneshillmer.jpg";
import lukasedler from "../../img/artists/lukasedler.jpg";
import sommersonnenwende from "../../img/artists/sommersonnenwende.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  useEffect(() => {
    //Meema
    const meemaElement = document.getElementById(`div_meema`);
    meemaElement.style.backgroundImage = `url(${meema})`;
    //vanStaen
    const vanstaenElement = document.getElementById(`div_vanstaen`);
    vanstaenElement.style.backgroundImage = `url(${vanstaen})`;
    //b0ys_cry
    const b0ys_cryElement = document.getElementById(`div_b0ys_cry`);
    b0ys_cryElement.style.backgroundImage = `url(${b0ys_cry})`;
    //nostique
    const nostiqueElement = document.getElementById(`div_nostique`);
    nostiqueElement.style.backgroundImage = `url(${nostique})`;
    //vanStaen
    const jhElement = document.getElementById(`div_johanneshillmer`);
    jhElement.style.backgroundImage = `url(${johanneshillmer})`;
    //lukasedler
    const lukasElement = document.getElementById(`div_lukasedler`);
    lukasElement.style.backgroundImage = `url(${lukasedler})`;
    //lukasedler
    const sommersonnenwendeElement = document.getElementById(
      `div_sommersonnenwende`
    );
    sommersonnenwendeElement.style.backgroundImage = `url(${sommersonnenwende})`;
  }, []);

  const artistProfile = artistStore.artists.map((artist, index) => {
    const handleMouseOver = () => {
      const social = document.getElementById(`social_${index}`);
      const bio = document.getElementById(`bio_${index}`);
      social.style.display = "block";
      bio.style.display = "block";
    };
    const handleMouseOut = () => {
      const social = document.getElementById(`social_${index}`);
      const bio = document.getElementById(`bio_${index}`);
      social.style.display = "none";
      bio.style.display = "none";
    };

    return (
      <div
        id={`div_${artist.name.replace(/ /g, "").toLowerCase()}`}
        className="artist"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div id={`bio_${index}`} className="artistBio">
          <span className="artistBioTitle">{artist.name}</span>
          <span className="artistBioMain">{artist.bio.en}</span>
        </div>
        <div id={`social_${index}`} className="artistSocial">
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
        {/*<div className="artistFooter">{artist.name}</div>*/}
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
