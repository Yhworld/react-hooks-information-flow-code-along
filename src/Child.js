import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


function Child({ onChangeColor, color}) {

function handleClick() {
  const childColorBlahBlah = getRandomColor();
  onChangeColor(childColorBlahBlah)
}

  return <div className="child" onClick={handleClick} style={{ backgroundColor: color }} />;
}

export default Child;
