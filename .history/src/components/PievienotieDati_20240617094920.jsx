import React, { useState } from "react";
import "./PievienotieDati.scss";
import Arrow from "./Vector.png";

const PievienotieDati = () => {
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

  const toggleSection = (id) => {
    const updatedGraphics = userGraphics.map((item) =>
      item.id === id ? { ...item, showColors: !item.showColors } : item
    );
    setUserGraphics(updatedGraphics);
  };

  return (
    <div className="pievienotie-dati">
      {userGraphics.map((item) => (
        <div key={item.id} className="graphic-item">
          <div className="section-title" onClick={() => toggleSection(item.id)}>
            {item.name}
            <span className={`accordion-icon ${item.showColors ? "open" : ""}`}>
              <img className="accordion-icon" src={Arrow} alt="V" />
            </span>
          </div>
          {item.showColors && (
            <div className="color-selection">
              <div className="color-row">
                <span
                  className="color-block"
                  style={{ backgroundColor: "#FF0000" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#FFFF00" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#FFA500" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#00FF00" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#00FFFF" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#0000FF" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#FF00FF" }}
                ></span>
              </div>
              <div className="color-row">
                <span
                  className="color-block"
                  style={{ backgroundColor: "#FFC0CB" }}
                ></span>
                <span
                  className="color-block"
                  style={{ backgroundColor: "#000000" }}
                ></span>
              </div>
            </div>
          )}
          <div className="button-row">
            {/* Replace with your buttons */}
            <div className="button">Button 1</div>
            <div className="button">Button 2</div>
            <div className="button">Button 3</div>
            <div className="button">Button 4</div>
            <div className="button">Button 5</div>
            <div className="button">Button 6</div>
            <div className="button" onClick={() => toggleSection(item.id)}>
              Outline Color
            </div>
            <div className="button" onClick={() => toggleSection(item.id)}>
              Fill Color
            </div>
          </div>
          <div className="dividing-line"></div>
        </div>
      ))}
    </div>
  );
};

export default PievienotieDati;
