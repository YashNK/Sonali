import React from "react";
import "./main-container.css";
// import { Header } from "../header";
import { Outlet } from "react-router-dom";

export const MainContainer = () => {
  return (
    <div className="main_container w-100 h-100 d-flex flex-column">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};
