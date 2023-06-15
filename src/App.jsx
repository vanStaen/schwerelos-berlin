import React, { useLayoutEffect } from "react";
import { observer } from "mobx-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Welcome } from "./pages/Welcome/Welcome";

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

  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Welcome />}></Route>)
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
});

export default App;
