import React, { useState } from "react";
import "./PievienotieDati.scss";
import Arrow from "./Vector.png";

const PievienotieDati = () => {
  const [isImportGeometryOpen, setImportGeometryOpen] = useState(false);
  const [isExportGeometryOpen, setExportGeometryOpen] = useState(false);
  const [isAddWMSLayerOpen, setAddWMSLayerOpen] = useState(false);
  const [isUserGraphicsOpen, setUserGraphicsOpen] = useState(true);
  const [isWMSResourcesOpen, setWMSResourcesOpen] = useState(false);
  const [isLVMGeoWMSOpen, setLVMGeoWMSOpen] = useState(false);

  const toggleImportGeometry = () =>
    setImportGeometryOpen(!isImportGeometryOpen);
  const toggleExportGeometry = () =>
    setExportGeometryOpen(!isExportGeometryOpen);
  const toggleAddWMSLayer = () => setAddWMSLayerOpen(!isAddWMSLayerOpen);
  const toggleUserGraphics = () => setUserGraphicsOpen(!isUserGraphicsOpen);
  const toggleWMSResources = () => setWMSResourcesOpen(!isWMSResourcesOpen);
  const toggleLVMGeoWMS = () => setLVMGeoWMSOpen(!isLVMGeoWMSOpen);

  return (
    <span className="datu-slani">
      <span className="section-title" onClick={toggleImportGeometry}>
        Importēt ģeometriju
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isImportGeometryOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </span>
      {isImportGeometryOpen && (
        <span className="sub-section">
          {/* Content for Importēt ģeometriju */}
        </span>
      )}

      <span className="section-title" onClick={toggleExportGeometry}>
        Eksportēt ģeometriju
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isExportGeometryOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </span>
      {isExportGeometryOpen && (
        <span className="sub-section">
          {/* Content for Eksportēt ģeometriju */}
        </span>
      )}

      <span className="section-title" onClick={toggleAddWMSLayer}>
        Pievienot WMS slāni
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isAddWMSLayerOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </span>
      {isAddWMSLayerOpen && (
        <span className="sub-section">
          {/* Content for Pievienot WMS slāni */}
        </span>
      )}

      <span className="section-title" onClick={toggleUserGraphics}>
        Lietotāja grafika
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isUserGraphicsOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </span>
      {isUserGraphicsOpen && (
        <span className="sub-section">
          <span className="toggle-item">
            <span>Poligona objekts 1</span>
            <span className="icons">{/* Icons will go here */}</span>
          </span>
          <span className="toggle-item">
            <span>Poligona objekts 2</span>
            <span className="icons">{/* Icons will go here */}</span>
          </span>
          <span className="toggle-item">
            <span>Rīgas iela 8</span>
            <span className="icons">{/* Icons will go here */}</span>
          </span>
        </span>
      )}
      <span className="section-title" onClick={toggleWMSResources}>
        Pievienotie WMS resursi
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isWMSResourcesOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </span>
      {isWMSResourcesOpen && (
        <span className="sub-section">
          <span className="sub-title" onClick={toggleLVMGeoWMS}>
            LVM GEO WMS
            <span className="accordion-icon">
              <img
                className={`accordion-icon ${isLVMGeoWMSOpen ? "open" : ""}`}
                src={Arrow}
                alt="V"
              />
            </span>
          </span>
          {isLVMGeoWMSOpen && (
            <span className="sub-sub-section">
              <span className="toggle-item">
                <span>Mežaudzu plāns</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
              <span className="toggle-item">
                <span>Augsnes laukumi</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
              <span className="toggle-item">
                <span>Rekreācijas zonas</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
              <span className="toggle-item">
                <span>Kvartāra nogulumu karte</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
              <span className="toggle-item">
                <span>Digitālā reljefa modelis</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
              <span className="toggle-item">
                <span>Vēja ātrums</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </span>
            </span>
          )}
        </span>
      )}
    </span>
  );
};

export default PievienotieDati;
