import React from "react";
import { observer } from "mobx-react";

import { artistStore } from "../../store/artistStore";

export const Artist = observer(() => {  
  return (
    <div>
      Artist name:
      {artistStore.artistNames[0]}
    </div>
  );
});
