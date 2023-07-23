import React from "react";
import { observer } from "mobx-react";

import { artistStore } from "../../store/artistStore";
import { pageStore } from "../../store/pageStore";
import { GlitchText } from "../../components/GlitchText/GlitchText";
import { Carousel } from "../../components/Carousel/Carousel";

import meema from "../../img/artists/meema.jpg";
import vanstaen from "../../img/artists/vanstaen.jpg";

import "./Artist.less";

export const Artist = observer(() => {
  const artistProfile = artistStore.artists.map((artist) => {
    return (
      <div className="artist" id={`div_${artist.name}`}>
        <div className="artistName">{artist.name}</div>
      </div>
    );
  });

  return (
    <div className="artistPageContainer">
      <div className="background"></div>
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
