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
        <div
          className={`tab ${activeSection === "FonaKartes" ? "active" : ""}`}
          onClick={() => setActiveSection("FonaKartes")}
        >
          Fona kartes
        </div>
        <div
          className={`tab ${activeSection === "DatuSlani" ? "active" : ""}`}
          onClick={() => setActiveSection("DatuSlani")}
        >
          Datu slāņi
        </div>
        <div
          className={`tab ${
            activeSection === "PievienotieDati" ? "active" : ""
          }`}
          onClick={() => setActiveSection("PievienotieDati")}
        >
          Pievienotie dati
        </div>
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
