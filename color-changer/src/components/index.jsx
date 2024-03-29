import React, { useState } from 'react';

const Changer = () => {

  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  console.log(color)
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function displayColor(typeOfColor) {
    if (typeOfColor === 'hex'){
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
    }

    else{
      const r = randomColorUtility(256);
      const g = randomColorUtility(256);
      const b = randomColorUtility(256);

      setColor(`rgb(${r},${g}, ${b})`);
    }

  }

  return (
    <div>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>

      <button onClick={() => displayColor(typeOfColor)}>Generate color</button>

      <div style={
        {color: '#ffffff',
      background: color,
      width: "100vw",
      height: "100vh",}
      }>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default Changer;