import React, { useState } from "react";
import "./FonaKartes.scss";

const FonaKartes = () => {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "Pārskata (topogrāfiskā) karte",
      subtitle: "Traditional topographic map",
    },
    {
      id: 2,
      title: "Topogrāfiskā karte ar reljefu",
      subtitle: "Topographic map with relief",
    },
    {
      id: 3,
      title: "Kombinētā fona karte",
      subtitle: "Combined background map",
    },
    {
      id: 4,
      title: "Melnbaltā fona karte",
      subtitle: "Black and white background map",
    },
    { id: 5, title: "Ortofoto karte", subtitle: "Orthophoto map" },
    {
      id: 6,
      title: "Digitālais reljefa modelis",
      subtitle: "Digital relief model",
    },
    {
      id: 7,
      title: "Digitālais reljefa modelis ar horizontālēm",
      subtitle: "Digital relief model with contours",
    },
    {
      id: 8,
      title: "Digitālais virsmas modelis",
      subtitle: "Digital surface model",
    },
    {
      id: 9,
      title: "Vēsturiskā topogrāfiskā karte mērogā 1: 75 000",
      subtitle: "Historical topographic map at 1:75,000 scale",
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
          <div className="item-square"></div>
          <div>
            <div className="item-title">{item.title}</div>
            <div className="item-subtitle">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FonaKartes;
