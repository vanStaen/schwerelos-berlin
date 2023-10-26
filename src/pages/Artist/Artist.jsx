import React, { useEffect, useState } from "react";
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
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.slice(0, 2));

  useEffect(() => {
    setLanguage(i18n.language.slice(0, 2));
  }, [i18n.language])

  useEffect(() => {
    //Meema
    const meemaElementMain = document.getElementById(`divMain_meema`);
    const meemaElementBack = document.getElementById(`divBack_meema`);
    meemaElementMain.style.backgroundImage = `url(${meema})`;
    meemaElementBack.style.backgroundImage = `url(${meema})`;
    //vanStaen
    const vanstaenElementBack = document.getElementById(`divBack_vanstaen`);
    const vanstaenElementMain = document.getElementById(`divMain_vanstaen`);
    vanstaenElementBack.style.backgroundImage = `url(${vanstaen})`;
    vanstaenElementMain.style.backgroundImage = `url(${vanstaen})`;
    //b0ys_cry
    const b0ys_cryElementBack = document.getElementById(`divBack_b0ys_cry`);
    const b0ys_cryElementMain = document.getElementById(`divMain_b0ys_cry`);
    b0ys_cryElementBack.style.backgroundImage = `url(${b0ys_cry})`;
    b0ys_cryElementMain.style.backgroundImage = `url(${b0ys_cry})`;
    //nostique
    const nostiqueElementBack = document.getElementById(`divBack_nostique`);
    const nostiqueElementMain = document.getElementById(`divMain_nostique`);
    nostiqueElementBack.style.backgroundImage = `url(${nostique})`;
    nostiqueElementMain.style.backgroundImage = `url(${nostique})`;
    //lukasedler
    const lukasElementBack = document.getElementById(`divBack_lukasedler`);
    const lukasElementMain = document.getElementById(`divMain_lukasedler`);
    lukasElementBack.style.backgroundImage = `url(${lukasedler})`;
    lukasElementMain.style.backgroundImage = `url(${lukasedler})`;
    //sommersonnenwende
    const sswdElementBack = document.getElementById(`divBack_sommersonnenwende`);
    const sswdElementMain = document.getElementById(`divMain_sommersonnenwende`);
    sswdElementBack.style.backgroundImage = `url(${sommersonnenwende})`;
    sswdElementMain.style.backgroundImage = `url(${sommersonnenwende})`;
    //missingdj
    const missingdjElementBack = document.getElementById(`divBack_missingdj`);
    const missingdjElementMain = document.getElementById(`divMain_missingdj`);
    missingdjElementBack.style.backgroundImage = `url(${missingdj})`;
    missingdjElementMain.style.backgroundImage = `url(${missingdj})`;
  }, []);


  const artistProfile = artistStore.artists.map((artist, index) => {
    const handleMouseOver = () => {
      console.log('over');
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
        className="artist"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="artistBackgroundPic" id={`divBack_${artist.name.replace(/ /g, "").toLowerCase()}`}></div>
        <div className="artistMainPic" id={`divMain_${artist.name.replace(/ /g, "").toLowerCase()}`}></div>
        <div id={`bio_${index}`} className="artistBio">
          <span className="artistBioTitle">{artist.name}</span>
          <span className="artistBioMain">{artist.bio[language]}</span>
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
        {!pageStore.hideSwipeArtist && <img src={SwipeUp} className="swipe" />}
        <div className="artistCarousel">
          <Carousel faces={artistProfile} />
        </div>
      </div>
    </div>
  );
});
