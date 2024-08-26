import React from "react";
import "../popup.css";
import DashboardLayout from "../layouts/Dashboard";
import { useRecoilState } from "recoil";
import { activeLinkState } from "../../atoms";
import { UserROles } from "../../types/urls";
import HomeComponent from "../pages/home";
import SupportPage from "../pages/support";
import AffiliarSePage from "../pages/affiliar_se";
import KitdropshippingPage from "../pages/kit_droppshipping";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeLinkState);
  return (
    <DashboardLayout>
      {activeTab.toString() == UserROles.HOME.toString() && <HomeComponent />}
      {activeTab.toString() == UserROles.SUPORTE.toString() && <SupportPage />}
      {activeTab.toString() == UserROles.AFILIAR_SE.toString() && (
        <AffiliarSePage />
      )}
      {activeTab.toString() == UserROles.KIT_DROPSHIPPING.toString() && (
        <KitdropshippingPage />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
