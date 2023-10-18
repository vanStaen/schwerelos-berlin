import React, { useLayoutEffect, useEffect } from "react";
import { observer } from "mobx-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Main } from "./pages/Main";
//import { TicketValidation } from "./pages/Tickets/TicketValidation/TicketValidation";
//import { Admin } from "./pages/Admin/Admin";
//import { NewPassword } from "./pages/NewPassword/NewPassword";
//import { FourOfour } from "./pages/FourOfour/FourOfour";
import { LanguageDropDown } from "./components/LanguageDropDown/LanguageDropDown";
import { consoleGreetings } from "./helpers/consoleGreetings";

import "./lib/i18n";
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
    const language = navigator.language || navigator.userLanguage;
    if (language === "de-DE") {
      i18n.changeLanguage("de-DE");
    } else {
      i18n.changeLanguage("en-US");
    }
  }, [i18n]);

  useEffect(() => {
    consoleGreetings();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <LanguageDropDown />
          <Main />
          {/*
            <Routes>
              <Route index element={<Main />} />
              <Route path="/:page" index element={<Main />} />
              <Route
                path="ticket/:event/:ticketId"
                element={<TicketValidation />}
              />
              <Route path="admin/" element={<Admin />} />
              <Route path="recoverpwd/:key" element={<NewPassword />} />
              <Route path="*" element={<FourOfour />} />
            </Routes>
          */}
        </div>
      </div>
    </BrowserRouter>
  );
});

export default App;
