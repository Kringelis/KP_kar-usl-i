import React, { useState } from "react";
import FonaKartes from "./FonaKartes";
import DatuSlani from "./DatuSlani";
import PievienotieDati from "./PievienotieDati";
import "./Sidebar.scss";
import pirmais from "./pirmais.svg";
import otrais from "./otrais.svg";
import tresais from "./tresais.svg";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("FonaKartes");

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <div
          className={`tab ${activeSection === "FonaKartes" ? "active" : ""}`}
          onClick={() => setActiveSection("FonaKartes")}
        >
          <div className="tab-square">
            <img src={pirmais} alt="Fona kartes" />
          </div>
          <div className="tab-text">Fona kartes</div>
        </div>
        <div
          className={`tab ${activeSection === "DatuSlani" ? "active" : ""}`}
          onClick={() => setActiveSection("DatuSlani")}
        >
          <div className="tab-square">
            <img src={otrais} alt="Datu slāņi" />
          </div>
          <div className="tab-text">Datu slāņi</div>
        </div>
        <div
          className={`tab ${
            activeSection === "PievienotieDati" ? "active" : ""
          }`}
          onClick={() => setActiveSection("PievienotieDati")}
        >
          <div className="tab-square">
            <img src={tresais} alt="Pievienotie dati" />
          </div>
          <div className="tab-text">Pievienotie dati</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="sidebar-content">
        {activeSection === "FonaKartes" && <FonaKartes />}
        {activeSection === "DatuSlani" && <DatuSlani />}
        {activeSection === "PievienotieDati" && <PievienotieDati />}
      </div>
    </div>
  );
};

export default Sidebar;
