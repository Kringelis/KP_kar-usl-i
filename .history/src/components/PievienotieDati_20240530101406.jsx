import React, { useState } from "react";
import "./AccordionComponent.scss";

const AccordionComponent = () => {
  const [isUserGraphicsOpen, setUserGraphicsOpen] = useState(true);
  const [isWMSResourcesOpen, setWMSResourcesOpen] = useState(false);

  const toggleUserGraphics = () => setUserGraphicsOpen(!isUserGraphicsOpen);
  const toggleWMSResources = () => setWMSResourcesOpen(!isWMSResourcesOpen);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title">Importēt ģeometriju</div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title">Eksportēt ģeometriju</div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title">Pievienot WMS slāni</div>
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleUserGraphics}>
          Lietotāja grafika
        </div>
        {isUserGraphicsOpen && (
          <div className="accordion-content">
            <div className="graphic-item">
              <span>Poligona objekts 1</span>
              {/* Icons will go here */}
            </div>
            <div className="graphic-item">
              <span>Poligona objekts 2</span>
              {/* Icons will go here */}
            </div>
            <div className="graphic-item">
              <span>Rīgas iela 8</span>
              {/* Icons will go here */}
            </div>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleWMSResources}>
          Pievienotie WMS resursi
        </div>
        {isWMSResourcesOpen && (
          <div className="accordion-content">
            <label>
              <input type="checkbox" />
              LVM GEO WMS
            </label>
            <label>
              <input type="checkbox" />
              Mežaudzū plāns
            </label>
            <label>
              <input type="checkbox" />
              Augsnes laukum
            </label>
            <label>
              <input type="checkbox" />
              Rekreācijas zonas
            </label>
            <label>
              <input type="checkbox" />
              Kvartāra nogulumu karte
            </label>
            <label>
              <input type="checkbox" />
              Digitālā reljefa modelis
            </label>
            <label>
              <input type="checkbox" />
              Vēja ātrums
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionComponent;
