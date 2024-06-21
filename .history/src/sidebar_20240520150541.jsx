import React, { useState } from "react";
import FonaKartes from "./FonaKartes";
import DatuSlani from "./DatuSlani";
import PievienotieDati from "./PievienotieDati";
import "./Sidebar.scss";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("FonaKartes");

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <img
          src="/path-to-fona-kartes-image.png"
          alt="Fona Kartes"
          className={`tab ${activeSection === "FonaKartes" ? "active" : ""}`}
          onClick={() => setActiveSection("FonaKartes")}
        />
        <img
          src="/path-to-datu-slani-image.png"
          alt="Datu Slāņi"
          className={`tab ${activeSection === "DatuSlani" ? "active" : ""}`}
          onClick={() => setActiveSection("DatuSlani")}
        />
        <img
          src="/path-to-pievienotie-dati-image.png"
          alt="Pievienotie Dati"
          className={`tab ${
            activeSection === "PievienotieDati" ? "active" : ""
          }`}
          onClick={() => setActiveSection("PievienotieDati")}
        />
      </div>
      <div className="sidebar-content">
        {activeSection === "FonaKartes" && <FonaKartes />}
        {activeSection === "DatuSlani" && <DatuSlani />}
        {activeSection === "PievienotieDati" && <PievienotieDati />}
      </div>
    </div>
  );
};

export default Sidebar;
