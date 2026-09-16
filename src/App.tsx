import React from "react";
import "./constants/index.css";
import "./assets/fonts/index.css";
import { RouterProvider } from "react-router-dom";
import { webRouter } from "./locations";

export const App = () => {
  return <RouterProvider router={webRouter} />;
};
