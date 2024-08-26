import React from "react";
import "../popup.css";
import DashboardLayout from "../layouts/Dashboard";

import Recents from "../pages/recents";

const RecentsComponent = () => {
  return (
    <DashboardLayout>
      <Recents />
    </DashboardLayout>
  );
};

export default RecentsComponent;
