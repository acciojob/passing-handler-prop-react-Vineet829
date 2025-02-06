import React from "react";
import "../styles/Child.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;
  console.log(props);
  return (
    <button
      data-testid={config.key}
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;