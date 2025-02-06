import React, { useState } from "react";
import "../styles/Child.css";

function Selection(props) {
  console.log(props);
  const { applyColor } = props;
  const [style, setStyle] = useState({ background: "" });
  const handleClick = () => {
    applyColor(setStyle);
  };
  return (
    <div className="fix-box" style={style} onClick={handleClick}>
      <p className="subheading">Selection</p>
    </div>
  );
}
export default Selection;