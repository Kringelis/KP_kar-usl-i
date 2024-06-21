import React, { useState } from "react";
import "./PievienotieDati.scss";
import Arrow from "./Vector.png";

const PievienotieDati = () => {
  const [isUserGraphicsOpen, setUserGraphicsOpen] = useState(true);
  const [isWMSResourcesOpen, setWMSResourcesOpen] = useState(false);

  const toggleUserGraphics = () => setUserGraphicsOpen(!isUserGraphicsOpen);
  const toggleWMSResources = () => setWMSResourcesOpen(!isWMSResourcesOpen);

  return (
    <div className="datu-slani">
      <div className="section-title" onClick={toggleUserGraphics}>
        <span className={`accordion-icon ${isUserGraphicsOpen ? "open" : ""}`}>
          <img
            className={`accordion-icon ${accordionOpen2 ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
        Lietotāja grafika
      </div>
      {isUserGraphicsOpen && (
        <div className="sub-section">
          <div className="toggle-item">
            <span>Poligona objekts 1</span>
            <div className="icons">{/* Icons will go here */}</div>
          </div>
          <div className="toggle-item">
            <span>Poligona objekts 2</span>
            <div className="icons">{/* Icons will go here */}</div>
          </div>
          <div className="toggle-item">
            <span>Rīgas iela 8</span>
            <div className="icons">{/* Icons will go here */}</div>
          </div>
        </div>
      )}
      <div className="section-title" onClick={toggleWMSResources}>
        <span className={`accordion-icon ${isWMSResourcesOpen ? "open" : ""}`}>
          <img
            className={`accordion-icon ${accordionOpen2 ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
        Pievienotie WMS resursi
      </div>
      {isWMSResourcesOpen && (
        <div className="sub-section">
          <div className="sub-title">LVM GEO WMS</div>
          <div className="toggle-item">
            <span>Mežaudzū plāns</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Augsnes laukum</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Rekreācijas zonas</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Kvartāra nogulumu karte</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Digitālā reljefa modelis</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Vēja ātrums</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default PievienotieDati;
