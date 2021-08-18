import React from "react";
import Rect from "./component/Rect";

const App = () => {
  return (
    <>
      <div className="main">
        <h1>Hello</h1>
        <div>
          <h1>
            Hello<span>Hello</span>
            <span>Hello</span>
          </h1>
        </div>

        <Rect />
      </div>
    </>
  );
};

export default App;
