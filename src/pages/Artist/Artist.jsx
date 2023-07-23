import React from "react";
import { observer } from "mobx-react";

import { artistStore } from "../../store/artistStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  /* const artistProfile = artistStore.artists.map((artist) => {
    return (
      <div className="artist">
        {artist.name}
        {<img src={meema} alt={artist.name} />}
      </div>
    );
  }); */

  const artistProfile = [
    <div className="artist">1</div>,
    <div className="artist">2</div>,
    <div className="artist">3</div>,
    <div className="artist">4</div>,
    <div className="artist">5</div>,
    <div className="artist">6</div>,
    <div className="artist">7</div>,
    <div className="artist">8</div>,
  ];

  return (
    <div className="artistPageContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <div className="artistContainer">
        <GlitchText glitchText="Schwerelos" overText="we are" />
        <div className="artistCarousel">
          <Carousel faces={artistProfile} />
        </div>
      </div>
    </div>
  );
});
