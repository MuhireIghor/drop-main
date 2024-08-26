import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import Popup from "./popup";
import { RecoilRoot } from "recoil";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(
        <RecoilRoot>
            <Popup />
        </RecoilRoot>
    );
}

init();