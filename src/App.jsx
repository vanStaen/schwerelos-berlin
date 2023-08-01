import React, { useLayoutEffect, useEffect } from "react";
import { observer } from "mobx-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Main } from "./pages/Main";
import { TicketValidation } from "./pages/Tickets/TicketValidation/TicketValidation";
import { Admin } from "./pages/Admin/Admin";
import { pageStore } from "./store/pageStore";
import { NewPassword } from "./pages/NewPassword/NewPassword";
import { LanguageDropDown } from "./components/LanguageDropDown/LanguageDropDown";

import "../src/lib/i18n";
import "./App.less";

const defineVariableHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("resize", defineVariableHeight);

const App = observer(() => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    // Define variable height
    defineVariableHeight();
  }, []);

  useEffect(() => {
    if (pageStore.language === "fr-FR") {
      i18n.changeLanguage("fr-FR");
    } else if (pageStore.language === "de-DE") {
      i18n.changeLanguage("de-DE");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [pageStore.language, i18n]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <LanguageDropDown />
          <Routes>
            <Route index element={<Main />} />
            <Route
              path="ticket/:event/:ticketId"
              element={<TicketValidation />}
            />
            <Route path="admin/" element={<Admin />} />
            <Route path="recoverpwd/:key" element={<NewPassword />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
