import React from "react";
import "../popup.css";
import DashboardLayout from "../layouts/Dashboard";
import FavoritesPage from "../pages/favorites";

const FavoritesComponent = () => {
  return (
    <DashboardLayout>
      <FavoritesPage />
    </DashboardLayout>
  );
};

export default FavoritesComponent;