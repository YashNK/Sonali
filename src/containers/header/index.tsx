import React from "react";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Locations } from "../../constants";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header d-flex align-items-center justify-content-between">
      <span className="header_title">Sonali's World</span>

      <div className="header_links">
        <span
          className={location.pathname === Locations.home ? "active_link" : ""}
          onClick={() => navigate(Locations.home)}
        >
          Home
        </span>

        <span
          className={
            location.pathname === Locations["1990s"] ? "active_link" : ""
          }
          onClick={() => navigate(Locations["1990s"])}
        >
          1990s
        </span>

        <span
          className={
            location.pathname === Locations["2000s"] ? "active_link" : ""
          }
          onClick={() => navigate(Locations["2000s"])}
        >
          2000s
        </span>

        <span
          className={
            location.pathname === Locations["2010s"] ? "active_link" : ""
          }
          onClick={() => navigate(Locations["2010s"])}
        >
          2010s
        </span>

        <span
          className={
            location.pathname === Locations["2020s"] ? "active_link" : ""
          }
          onClick={() => navigate(Locations["2020s"])}
        >
          2020s
        </span>
      </div>
    </div>
  );
};
