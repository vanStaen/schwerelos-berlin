import React from "react";
import { useTranslation } from "react-i18next";

import "./FourOfour.less";

export const FourOfour = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="stripe">
        <div className="stripe_inner">404</div>
        <div className="nothinghere">{t("404.endOfInternet")}</div>
      </div>
    </>
  );
};
