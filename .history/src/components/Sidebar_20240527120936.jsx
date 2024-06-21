import React, { useState } from "react";
import FonaKartes from "./FonaKartes";
import DatuSlani from "./DatuSlani";
import PievienotieDati from "./PievienotieDati";
import "./Sidebar.scss";
import pirmais from "./pirmais.png";
import otrais from "./otrais.png";
import tresais from "./tresais.png";
import close from "./close.png";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("FonaKartes");

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Kartes slāņi</div>
        <img src={close} alt="Close" className="close-icon" />
      </div>
      <div className="sidebar-tabs">
        <div
          className={`tab ${activeSection === "FonaKartes" ? "active" : ""}`}
          onClick={() => setActiveSection("FonaKartes")}
        >
          <img src={pirmais} alt="Fona kartes" className="tab-square" />
          <div className="tab-text">Fona kartes</div>
        </div>
        <div
          className={`tab ${activeSection === "DatuSlani" ? "active" : ""}`}
          onClick={() => setActiveSection("DatuSlani")}
        >
          <img src={otrais} alt="Datu slāņi" className="tab-square" />
          <div className="tab-text">Datu slāņi</div>
        </div>
        <div
          className={`tab ${
            activeSection === "PievienotieDati" ? "active" : ""
          }`}
          onClick={() => setActiveSection("PievienotieDati")}
        >
          <img src={tresais} alt="Pievienotie dati" className="tab-square" />
          <div className="tab-text">Pievienotie dati</div>
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
