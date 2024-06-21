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
      type: "polygon",
      area: 2644,
      perimeter: 219,
      coordinates: null,
      outlineColor: "#000000",
      fillColor: "#00762C",
      showColors: false, // To track if color blocks are visible
    },
    {
      id: 2,
      name: "Poligona objekts 2",
      type: "polygon",
      area: 2644,
      perimeter: 219,
      coordinates: null,
      outlineColor: "#000000",
      fillColor: "#00762C",
      showColors: false,
    },
    {
      id: 3,
      name: "Rīgas iela 8",
      type: "point",
      area: null,
      perimeter: null,
      coordinates: [56.946, 24.105],
      outlineColor: "#000000",
      fillColor: "#00762C",
      showColors: false,
    },
  ]);

  const toggleSection = (setFunction) => {
    setFunction((prevState) => !prevState);
  };

  const toggleColorSelection = (id) => {
    const updatedGraphics = userGraphics.map((item) =>
      item.id === id ? { ...item, showColors: !item.showColors } : item
    );
    setUserGraphics(updatedGraphics);
  };

  const handleColorChange = (id, type, color) => {
    const updatedGraphics = userGraphics.map((item) =>
      item.id === id ? { ...item, [type]: color } : item
    );
    setUserGraphics(updatedGraphics);
  };

  return (
    <div className="pievienotie-dati">
      <div
        className="section-title"
        onClick={() => toggleSection(setImportGeometryOpen)}
      >
        Importēt ģeometriju
        <span
          className={`accordion-icon ${isImportGeometryOpen ? "open" : ""}`}
        >
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isImportGeometryOpen && (
        <div className="sub-section">Importēt ģeometriju</div>
      )}
      <div className="dividing-line"></div>

      <div
        className="section-title"
        onClick={() => toggleSection(setExportGeometryOpen)}
      >
        Eksportēt ģeometriju
        <span
          className={`accordion-icon ${isExportGeometryOpen ? "open" : ""}`}
        >
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isExportGeometryOpen && (
        <div className="sub-section">Eksportēt ģeometriju</div>
      )}
      <div className="dividing-line"></div>

      <div
        className="section-title"
        onClick={() => toggleSection(setAddWMSLayerOpen)}
      >
        Pievienot WMS slāni
        <span className={`accordion-icon ${isAddWMSLayerOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isAddWMSLayerOpen && (
        <div className="sub-section">Pievienot WMS slāni</div>
      )}
      <div className="dividing-line"></div>

      <div
        className="section-title"
        onClick={() => toggleSection(setUserGraphicsOpen)}
      >
        Lietotāja grafika
        <span className={`accordion-icon ${isUserGraphicsOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isUserGraphicsOpen && (
        <div className="sub-section">
          {userGraphics.map((item) => (
            <div key={item.id} className="graphic-item">
              <div
                className="section-title"
                onClick={() => toggleSection(item.id)}
              >
                {item.name}
                <span
                  className={`accordion-icon ${item.showColors ? "open" : ""}`}
                >
                  <img className="accordion-icon" src={Arrow} alt="V" />
                </span>
              </div>
              {item.showColors && (
                <div className="color-selection">
                  <div className="color-row">
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#FF0000" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#FF0000")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#FFFF00" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#FFFF00")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#FFA500" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#FFA500")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#00FF00" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#00FF00")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#00FFFF" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#00FFFF")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#0000FF" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#0000FF")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#FF00FF" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#FF00FF")
                      }
                    ></span>
                  </div>
                  <div className="color-row">
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#FFC0CB" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#FFC0CB")
                      }
                    ></span>
                    <span
                      className="color-block"
                      style={{ backgroundColor: "#000000" }}
                      onClick={() =>
                        handleColorChange(item.id, "outlineColor", "#000000")
                      }
                    ></span>
                  </div>
                </div>
              )}
              <div className="button-row">
                <div className="button">Button 1</div>
                <div className="button">Button 2</div>
                <div className="button">Button 3</div>
                <div className="button">Button 4</div>
                <div className="button">Button 5</div>
                <div className="button">Button 6</div>
                <div
                  className="button"
                  onClick={() => toggleColorSelection(item.id)}
                >
                  Outline Color
                </div>
                <div
                  className="button"
                  onClick={() => toggleColorSelection(item.id)}
                >
                  Fill Color
                </div>
              </div>
              <div className="dividing-line"></div>
            </div>
          ))}
        </div>
      )}

      <div
        className="section-title"
        onClick={() => toggleSection(setWMSResourcesOpen)}
      >
        Pievienotie WMS resursi
        <span className={`accordion-icon ${isWMSResourcesOpen ? "open" : ""}`}>
          <img className="accordion-icon" src={Arrow} alt="V" />
        </span>
      </div>
      {isWMSResourcesOpen && (
        <div className="sub-section">
          <div
            className="sub-title"
            onClick={() => toggleSection(setLVMGeoWMSOpen)}
          >
            LVM GEO WMS
            <span className={`accordion-icon ${isLVMGeoWMSOpen ? "open" : ""}`}>
              <img className="accordion-icon" src={Arrow} alt="V" />
            </span>
          </div>
          {isLVMGeoWMSOpen && (
            <div className="sub-sub-section">
              {[
                "Mežaudzu plāns",
                "Augsnes laukumi",
                "Rekreācijas zonas",
                "Kvartāra nogulumu karte",
                "Digitālā reljefa modelis",
                "Vēja ātrums",
              ].map((layer, index) => (
                <div className="toggle-item" key={index}>
                  <span>{layer}</span>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PievienotieDati;
