import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

import vs2 from "../../img/artists/vs2.jpg";

import "./Artist.less";
import "./Images.less";

export const Artist = observer((props) => {
  const artistPics = artistStore.artists.map((artist, index) => {
    return (
      <figure className="artist-effect">
        <img src={vs2} alt="Cat&#39;n&#39;Sonus" />
        <figcaption>
          <small className="mobilelink" id="nostique">
            Cat'n'Sonus
          </small>
          <h2>{artist.name}</h2>
          <div>
            <a href="https://soundcloud.com/nostique" target="_blank">
              Soundcloud
            </a>
            <a
              href="https://www.facebook.com/catnsonus?fref=ts"
              target="_blank"
            >
              Facebook
            </a>
            <a href="mailto:basti@schwerelos-berlin.de">Book them</a>
          </div>
        </figcaption>
      </figure>
    );
  });

  return (
    <div className="artistContainer">
      <div id="artists" className="artists">
        <div className="grid">{artistPics}</div>
      </div>
    </div>
  );
});
