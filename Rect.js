import React, { useState } from "react";

const Rect = () => {
  const red = "#FF0000";
  const [bg, setBg] = useState(red);
  const [name, setName] = useState();

  const bgChange = () => {
    // console.log("clicked");
    let newBg = "#00FF00";
    setBg(newBg);
    setName("button clicked");
  };
  return (
    <>
      <div className="maindiv" style={{ backgroundColor: bg }}></div>
      <span>
        <button onClick={bgChange}>Press Me</button>
      </span>
      <div className="div2">
        <p>{name}</p>
      </div>
    </>
  );
};

export default Rect;
