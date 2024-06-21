import React, { useState } from "react";
import "./FonaKartes.scss";
import copy from "./copyright.png";
import one from "./Rectangle 4.png";
import two from "./Rectangle 4(1).png";
import three from "./Rectangle 4(2).png";
import four from "./Rectangle 4(3).png";
import five from "./Rectangle 4(4).png";
import six from "./Rectangle 4(5).png";
import seven from "./Rectangle 4(6).png";
import eight from "./Rectangle 4(7).png";
import nine from "./Rectangle 4(8).png";

const FonaKartes = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "Pārskata (topogrāfiskā) karte",
      subtitle: "Tradicionālā tipogrāfijas versija",
      image: one,
    },
    {
      id: 2,
      title: "Topogrāfiskā karte ar reljefu",
      subtitle: "WEB versija kombinācijā ar DTM",
      image: one,
    },
    {
      id: 3,
      title: "Kombinētā fona karte",
      subtitle: "Dažādas detalitātes fona karte",
      image: one,
    },
    {
      id: 4,
      title: "Melnbaltā fona karte",
      subtitle: "Dažādas detalitātes fona karte",
      image: one,
    },
    {
      id: 5,
      title: "Ortofoto karte",
      subtitle: "6., 7. un 8. cikla jaunāko datu pārklājums",
      image: one,
    },
    {
      id: 6,
      title: "Digitālais reljefa modelis",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
      image: one,
    },
    {
      id: 7,
      title: "Digitālais reljefa modelis ar horizontālēm",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
      image: one,
    },
    {
      id: 8,
      title: "Digitālais virsmas modelis",
      subtitle: "LIDAR 2013. - 2021.g. (40 cm)",
      image: one,
    },
    {
      id: 9,
      title: "Vēsturiskā topogrāfiskā karte mērogā 1: 75 000",
      subtitle: "No 1921. līdz 1940. gadam",
      image: one,
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
          <div className="item-square">
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
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
