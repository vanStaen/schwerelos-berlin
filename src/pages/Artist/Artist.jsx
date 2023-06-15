import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { artistStore } from "../../store/artistStore";

export const Artist = observer((props) => {

  const closeHandler = () => {
    pageStore.setSelectedArtistId(null);
  }

  const artistName = artistStore.artistNames[props.id - 1];
  const artistBio = artistStore.artistBios[props.id - 1];
  const artistPic = artistStore.artistPics[props.id - 1];
  const artistLink = artistStore.artistLinks[props.id - 1];

  return (
    <div>
      <div>
        {artistName}
      </div>
      <div onClick={closeHandler}>
        close
      </div>
    </div>
  );
});
