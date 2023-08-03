import React from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { GlitchText } from "../../components/GlitchText/GlitchText";

import "./Merch.less";

export const Merch = observer(() => {
  const { t } = useTranslation();
  return (
    <div className="pageMerchContainer">
      <div className="backgroundOpacity"></div>
      <div className="merchContainer">
        <GlitchText glitchText={t('merch.merch')} overText={t('merch.comeGetSome')} />
      </div>
    </div>
  );
});
