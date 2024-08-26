import React from "react";
// import './popup.css'
import { useRecoilValue } from "recoil";
import { activeTabState } from "../atoms";
import GeneratingProductDescription from "./screens/ProductDescription/GeneratingProductDescription";
import SelectPlatform from "./screens/Ads/SelectPlatform";

const Popup = () => {
    const activeTab = useRecoilValue(activeTabState);

    return (
        <div className="main-container w-[450px] min-h-[700px]">
            {/* {activeTab === "login" && <Login />}
            {activeTab === "selectOption" && <ShooseOption />} */}
            {/* <OriginalDescription /> */}
            {/* <ProductName /> */}
            {/* <SelectGender /> */}
            {/* <SelectPlatform /> */}
            <GeneratingProductDescription />
        </div>
    )
};

export default Popup;