import React from "react";
import "../popup.css";
import DashboardLayout from "../layouts/Dashboard";

import ContaPage from "../pages/conta";

const ContaComponent = () => {
  return (
    <DashboardLayout>
      <ContaPage />
    </DashboardLayout>
  );
};

export default ContaComponent;