import React from "react";
import { observer } from "mobx-react";

import { pageStore } from "../../store/pageStore";
import { Artist } from "../Artist/Artist";
import { Logo } from "./Logo";

import "./Welcome.less";

export const Welcome = observer(() => {
  const artistClickHandler = (id) => {
    pageStore.setSelectedArtistId(id);
  };

  return pageStore.selectedArtistId ? (
    <Artist id={pageStore.selectedArtistId} />
  ) : (
    <div className="welcome">
      <div className="container">
        <div className="artistLinks">
          <div className="artistLink" onClick={() => artistClickHandler(1)}>
            b0ys_cry
          </div>
          <div className="artistLink" onClick={() => artistClickHandler(2)}>
            Johannes Hillmer
          </div>
          <div className="artistLink" onClick={() => artistClickHandler(3)}>
            MEEMA
          </div>
          <div className="artistLink" onClick={() => artistClickHandler(4)}>
            Nostique
          </div>
          <div className="artistLink" onClick={() => artistClickHandler(5)}>
            Sommersonnenwende
          </div>
          <div className="artistLink" onClick={() => artistClickHandler(6)}>
            van Staen
          </div>
        </div>
      </div>

      <Logo />

      <div className="container">
        <div className="link">
          <a
            href="https://www.instagram.com/schwerelos_berlin/"
            target="_blank"
          >
            insta
          </a>
        </div>
        <div className="link">
          <a href="https://linktr.ee/schwerelos_berlin" target="_blank">
            Linktree
          </a>
        </div>
        <div className="link">
          <a href="https://ra.co/labels/21798" target="_blank">
            resident advisor
          </a>
        </div>
      </div>
    </div>
  );
});
