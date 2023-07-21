import React from "react";
import { observer } from "mobx-react";

import { artistStore } from "../../store/artistStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  const artistPics = artistStore.artists.map((artist) => {
    return (
      <div className="artist">
        {artist.name}
        {/*<img src={meema} alt={artist.name} />*/}
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <div className="background"></div>
      <div className="backgroundOpacity"></div>
      <div className="artistContainer">
        <GlitchText glitchText="Schwerelos" overText="we are" />
        <div className="artistCarousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
});
