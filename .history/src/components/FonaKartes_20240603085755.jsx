import React, { useState } from "react";
import "./FonaKartes.scss";
import copy from "./copyright.png"; // Import the PNG image

const FonaKartes = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "Pārskata (topogrāfiskā) karte",
      subtitle: "Tradicionālā tipogrāfijas versija",
    },
    {
      id: 2,
      title: "Topogrāfiskā karte ar reljefu",
      subtitle: "WEB versija kombinācijā ar DTM",
    },
    {
      id: 3,
      title: "Kombinētā fona karte",
      subtitle: "Dažādas detalitātes fona karte",
    },
    {
      id: 4,
      title: "Melnbaltā fona karte",
      subtitle: "Dažādas detalitātes fona karte",
    },
    {
      id: 5,
      title: "Ortofoto karte",
      subtitle: "6., 7. un 8. cikla jaunāko datu pārklājums",
    },
    {
      id: 6,
      title: "Digitālais reljefa modelis",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
    },
    {
      id: 7,
      title: "Digitālais reljefa modelis ar horizontālēm",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
    },
    {
      id: 8,
      title: "Digitālais virsmas modelis",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
    },
    {
      id: 9,
      title: "Vēsturiskā topogrāfiskā karte mērogā 1: 75 000",
      subtitle: "No 1921. līdz 1940. gadam",
    },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="fona-kartes">
      {items.map((item) => (
        <div
          key={item.id}
          className={`fona-kartes-item ${
            activeItem === item.id ? "active" : ""
          }`}
          onClick={() => handleItemClick(item.id)}
        >
          <img src={copy} alt="info" className="info-icon" />
          <div className="item-square"></div>
          <div className="item-text">
            <div className="item-title">{item.title}</div>
            <div className="item-subtitle">{item.subtitle}</div>
            {activeItem === item.id && (
              <div className="slider-container">
                <div className="hollow-square"></div>
                <input type="range" className="item-slider" />
                <div className="black-square"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FonaKartes;
