import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Tooltip } from "antd";

import { artistStore } from "../../store/artistStore";
import { pageStore } from "../../store/pageStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";
import { useTranslation } from "react-i18next";

import InstaLogo from "../../img/logos/instaLogo.png";
import ResidentAdvisorLogo from "../../img/logos/residentAdvisorLogo.png";
import SoundcloudLogo from "../../img/logos/soundcloudLogo.png";
import SpotifyLogo from "../../img/logos/spotifyLogo.png";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";
import b0ys_cry from "../../img/artists/b0ys_cry.jpg";
import nostique from "../../img/artists/nostique.jpg";
import lukasedler from "../../img/artists/lukasedler.jpg";
import sommersonnenwende from "../../img/artists/sommersonnenwende.jpg";
import missingdj from "../../img/artists/missingdj.jpg";

import SwipeUp from "../../img/swipeup.png";

import "./Artist.less";

export const Artist = observer(() => {
  const { t } = useTranslation();

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
    //lukasedler
    const lukasElement = document.getElementById(`div_lukasedler`);
    lukasElement.style.backgroundImage = `url(${lukasedler})`;
    //sommersonnenwende
    const sswdElement = document.getElementById(`div_sommersonnenwende`);
    sswdElement.style.backgroundImage = `url(${sommersonnenwende})`;
    //missingdj
    const missingdjElement = document.getElementById(`div_missingdj`);
    missingdjElement.style.backgroundImage = `url(${missingdj})`;
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

    let artistLinks = [];
    for (const [key, value] of Object.entries(artist.links)) {
      let logo;
      let classNameLogo;
      switch (key) {
        case "Instagram":
          logo = InstaLogo;
          classNameLogo = "artistLinkLogoInsta";
          break;
        case "ResidentAdvisor":
          logo = ResidentAdvisorLogo;
          classNameLogo = "artistLinkLogoRa";
          break;
        case "Soundcloud":
          logo = SoundcloudLogo;
          classNameLogo = "artistLinkLogoSc";
          break;
        case "Spotify":
          logo = SpotifyLogo;
          classNameLogo = "artistLinkLogoSpotify";
          break;
      }

      artistLinks.push(
        <Tooltip title={key}>
          <div className="artistLink">
            <a href={value} target="_blank">
              <img src={logo} className={classNameLogo} />
            </a>
          </div>
        </Tooltip>
      );
    }

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
          {artistLinks}
        </div>
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <GlitchText
        glitchText={artistStore.artists[pageStore.selectedArtistId].name}
        overText={`schwerelos ${t("artist.is")}`}
      />
      <div className="backgroundOpacity"></div>
      <div className="artistContainer">
        {!pageStore.hideSwipeArtist && <img src={SwipeUp} className="swipe" />}{" "}
        <div className="artistCarousel">
          <Carousel faces={artistProfile} />
        </div>
      </div>
    </div>
  );
});
