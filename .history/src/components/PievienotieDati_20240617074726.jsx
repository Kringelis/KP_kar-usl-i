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
  const [userGraphics, setUserGraphics] = useState([
    {
      id: 1,
      name: "Poligona objekts 1",
      area: 2644,
      perimeter: 219,
      outlineColor: "#000000",
      fillColor: "#00762C",
    },
    {
      id: 2,
      name: "Poligona objekts 2",
      area: 2644,
      perimeter: 219,
      outlineColor: "#000000",
      fillColor: "#00762C",
    },
    {
      id: 3,
      name: "Rīgas iela 8",
      area: 0,
      perimeter: 0,
      outlineColor: "#000000",
      fillColor: "#00762C",
    },
  ]);

  const toggleImportGeometry = () =>
    setImportGeometryOpen(!isImportGeometryOpen);
  const toggleExportGeometry = () =>
    setExportGeometryOpen(!isExportGeometryOpen);
  const toggleAddWMSLayer = () => setAddWMSLayerOpen(!isAddWMSLayerOpen);
  const toggleUserGraphics = () => setUserGraphicsOpen(!isUserGraphicsOpen);
  const toggleWMSResources = () => setWMSResourcesOpen(!isWMSResourcesOpen);
  const toggleLVMGeoWMS = () => setLVMGeoWMSOpen(!isLVMGeoWMSOpen);

  const handleColorChange = (id, type, color) => {
    const newUserGraphics = userGraphics.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [type]: color,
        };
      }
      return item;
    });
    setUserGraphics(newUserGraphics);
  };

  return (
    <div className="datu-slani">
      <div className="section-title" onClick={toggleImportGeometry}>
        Importēt ģeometriju
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isImportGeometryOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </div>
      {isImportGeometryOpen && <div className="sub-section">{}</div>}

      <div className="section-title" onClick={toggleExportGeometry}>
        Eksportēt ģeometriju
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isExportGeometryOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </div>
      {isExportGeometryOpen && <div className="sub-section">{}</div>}

      <div className="section-title" onClick={toggleAddWMSLayer}>
        Pievienot WMS slāni
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isAddWMSLayerOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </div>
      {isAddWMSLayerOpen && <div className="sub-section">{}</div>}

      <div className="section-title" onClick={toggleUserGraphics}>
        Lietotāja grafika
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isUserGraphicsOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </div>
      {isUserGraphicsOpen && (
        <div className="sub-section">
          {userGraphics.map((item) => (
            <div className="toggle-item" key={item.id}>
              <span>{item.name}</span>
              <div className="info">
                <div>Laukums: {item.area} ha</div>
                <div>Perimetrs: {item.perimeter} km</div>
              </div>
              <div className="icons">
                <input
                  type="color"
                  value={item.outlineColor}
                  onChange={(e) =>
                    handleColorChange(item.id, "outlineColor", e.target.value)
                  }
                />
                <input
                  type="color"
                  value={item.fillColor}
                  onChange={(e) =>
                    handleColorChange(item.id, "fillColor", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="section-title" onClick={toggleWMSResources}>
        Pievienotie WMS resursi
        <span className="accordion-icon">
          <img
            className={`accordion-icon ${isWMSResourcesOpen ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
        </span>
      </div>
      {isWMSResourcesOpen && (
        <div className="sub-section">
          <div className="sub-title" onClick={toggleLVMGeoWMS}>
            LVM GEO WMS
            <span className="accordion-icon">
              <img
                className={`accordion-icon ${isLVMGeoWMSOpen ? "open" : ""}`}
                src={Arrow}
                alt="V"
              />
            </span>
          </div>
          {isLVMGeoWMSOpen && (
            <div className="sub-sub-section">
              <div className="toggle-item">
                <span>Mežaudzu plāns</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="toggle-item">
                <span>Augsnes laukumi</span>
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
      )}
    </div>
  );
};

export default PievienotieDati;
