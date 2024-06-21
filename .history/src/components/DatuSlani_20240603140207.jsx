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

  const handleSelectAll = (accordion) => {
    const keys = [
      "1:50 000 TKS-93",
      "1:100 000 TKS-93",
      "1:10 000 TKS-93",
      "1:5 000 TKS-93",
      "1:2 000 TKS-93",
      "1:50 000 UTM",
      "1:10 000 UTM",
    ];
    const newToggleStates = { ...toggleStates };
    keys.forEach((key) => {
      newToggleStates[key] = !accordion;
    });
    setToggleStates(newToggleStates);
  };

  return (
    <div className="datu-slani">
      <div className="section-toggle">
        <div>
          <div className="section-title">Augstumlīknes</div>
          <div className="section-subtitle">Pieejams M 1:1 000 - 1:25 000</div>
        </div>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={toggleStates.augstumliknes}
            onChange={() => handleToggle("augstumliknes")}
          />
          <span className="slider"></span>
        </label>
      </div>
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
          <div className="accordion-left">
            <img
              className={`accordion-icon ${accordionOpen1 ? "open" : ""}`}
              src={Arrow}
              alt="V"
            />
            <span className="accordion-text">Karšu rāmji (nomenklatūra)</span>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={toggleStates["Karšu rāmji"]}
              onChange={() => handleToggle("Karšu rāmji")}
            />
            <span className="slider"></span>
          </label>
        </div>
        {accordionOpen1 && (
          <div className="accordion-content">
            <div className="select-all">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAll(accordionOpen1)}
                />
                <span className="select-all-text">Rādīt visu</span>
              </label>
            </div>
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
          <div className="accordion-left">
            <img
              className={`accordion-icon ${accordionOpen2 ? "open" : ""}`}
              src={Arrow}
              alt="V"
            />
            <span className="accordion-text">Kaut kas cits</span>
          </div>
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
