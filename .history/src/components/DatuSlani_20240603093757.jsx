import React, { useState } from "react";
import "./DatuSlani.scss";
import Arrow from "./Vector.png";

const DatuSlani = () => {
  const [toggleStates, setToggleStates] = useState({
    augstumliknes: false,
    las2000: false,
    "1:50 000 TKS-93": false,
    "1:100 000 TKS-93": false,
    "1:10 000 TKS-93": false,
    "1:5 000 TKS-93": false,
    "1:2 000 TKS-93": false,
    "1:50 000 UTM": false,
    "1:10 000 UTM": false,
    kautKasCits: false, // Adding the missing key for the new switch
  });

  const [accordionOpen1, setAccordionOpen1] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);

  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleAccordionClick1 = () => {
    setAccordionOpen1(!accordionOpen1);
    if (accordionOpen2) {
      setAccordionOpen2(false);
    }
  };

  const handleAccordionClick2 = () => {
    setAccordionOpen2(!accordionOpen2);
    if (accordionOpen1) {
      setAccordionOpen1(false);
    }
  };

  return (
    <div className="datu-slani">
      <div className="section-title">Augstumlīknes</div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={toggleStates.augstumliknes}
          onChange={() => handleToggle("augstumliknes")}
        />
        <span className="slider"></span>
      </label>
      <div className="sub-section">
        <div className="sub-title">
          Augstumu starpība LAS-2000,5 pret BAS-77
        </div>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={toggleStates.las2000}
            onChange={() => handleToggle("las2000")}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div className="accordion">
        <div className="accordion-title" onClick={handleAccordionClick1}>
          <img
            className={`accordion-icon ${accordionOpen1 ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
          <span className="accordion-text">Karšu rāmji (nomenklatūra)</span>
        </div>
        {accordionOpen1 && (
          <div className="accordion-content">
            {[
              "1:50 000 TKS-93",
              "1:100 000 TKS-93",
              "1:10 000 TKS-93",
              "1:5 000 TKS-93",
              "1:2 000 TKS-93",
              "1:50 000 UTM",
              "1:10 000 UTM",
            ].map((item) => (
              <div key={item} className="toggle-item">
                <div>{item}</div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={toggleStates[item]}
                    onChange={() => handleToggle(item)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="accordion">
        <div className="accordion-title" onClick={handleAccordionClick2}>
          <img
            className={`accordion-icon ${accordionOpen2 ? "open" : ""}`}
            src={Arrow}
            alt="V"
          />
          <span className="accordion-text">Kaut kas cits</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={toggleStates.kautKasCits}
              onChange={() => handleToggle("kautKasCits")}
            />
            <span className="slider"></span>
          </label>
        </div>
        {accordionOpen2 && (
          <div className="accordion-content">
            {[
              "1:50 000 TKS-93",
              "1:100 000 TKS-93",
              "1:10 000 TKS-93",
              "1:5 000 TKS-93",
              "1:2 000 TKS-93",
              "1:50 000 UTM",
              "1:10 000 UTM",
            ].map((item) => (
              <div key={item} className="toggle-item">
                <div>{item}</div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={toggleStates[item]}
                    onChange={() => handleToggle(item)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DatuSlani;
