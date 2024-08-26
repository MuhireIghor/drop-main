import * as React from "react";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-200">

    <div className="flex  h-[90vh] max-w-[95rem] w-full relative shadow-md rounded-xl ">
      <div className="w-1/4 sticky bg-slate-50 rounded-xl">
        <Sidebar />
      </div>
    <div className="w-4/5 space-y-8 bg-white h-full rounded-r-xl p-8 px-4 md:px-8 lg:px-12">
        <Navbar />
      
        {children}
      </div>
    </div>
    </div>
  );
};
export default DashboardLayout;