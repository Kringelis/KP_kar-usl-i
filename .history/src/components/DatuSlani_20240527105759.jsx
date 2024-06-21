import React, { useState } from "react";
import "./DatuSlani.scss";

const DatuSlani = () => {
  const [toggleStates, setToggleStates] = useState({
    augstumlīknēs: true,
    las2000: false,
    "1:50 000 TKS-93": false,
    "1:100 000 TKS-93": false,
    "1:10 000 TKS-93": false,
    "1:5 000 TKS-93": false,
    "1:2 000 TKS-93": false,
    "1:50 000 UTM": false,
    "1:10 000 UTM": false,
  });

  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="datu-slani">
      <div className="section-title">Augstumlīknēs</div>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={toggleStates.augstumlīknēs}
          onChange={() => handleToggle("augstumlīknēs")}
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
      <div className="sub-section">
        <div className="sub-title">Kartšu rāmji (nomenklatūra)</div>
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
    </div>
  );
};

export default DatuSlani;