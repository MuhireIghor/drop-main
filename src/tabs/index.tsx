import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import Tabs from "./tabs";
import "../assets/tailwind.css";
import { RecoilRoot } from "recoil";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(
    <Router>
      <RecoilRoot>
        <Tabs />
      </RecoilRoot>
    </Router>
  );
}

init();