import React, { useState } from "react";
import Firstcard from "./components/Firstcard";
import Nsocard from "./components/Nsocard";
import AllCard from "./components/AllCard";
import "./App.css";

const App = () => {
  const [pageSwitch, setPageSwitch] = useState(true);
  const [selectedButton, setSelectedButton] = useState("buttonNso");
  const [dropDown, setDropDown] = useState("YoY1");

  const handleNso = (button) => {
    setSelectedButton(button);
    setPageSwitch(true);
  };

  const handleAll = (button) => {
    setSelectedButton(button);
    setPageSwitch(false);
  };

  const handleSelect = (e) => {
    setDropDown(e.target.value);
  };

  return (
    <>
      <header id="mainHeader">
        <h1>Monohead</h1>
        <div>
          <span>Compare</span>
          <select name="YOYS" id="YoY1" onChange={(e) => handleSelect(e)}>
            <option value="YoY1">YoY1</option>
            <option value="YoY2">YoY2</option>
            <option value="YoY3">YoY3</option>
          </select>
        </div>
      </header>

      <div className="toggleButtons">
        <button
          className={`button ${
            selectedButton === "buttonNso"
              ? "button-selected"
              : "button-unselected"
          }`}
          onClick={() => handleNso("buttonNso")}
        >
          NSO
        </button>
        <button
          className={`button ${
            selectedButton === "buttonAll"
              ? "button-selected"
              : "button-unselected"
          }`}
          onClick={() => handleAll("buttonAll")}
        >
          All
        </button>
      </div>

      <div className="main-content">
        <div className="majorTile">
          {pageSwitch ? (
            <Nsocard dropDown={dropDown} />
          ) : (
            <AllCard dropDown={dropDown} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
