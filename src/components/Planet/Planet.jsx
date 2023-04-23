import React from "react";
import "./Planet.css";

const Planet = ({ planet }) => {
  return (
    <div className="planet-shortinfo">
      <h3>{planet.name}</h3>
      <p>Dimension: {planet.dimension}</p>
      <p>Type: {planet.type}</p>
      <p>Residentes: {planet.residents.length}</p>
    </div>
  );
};

export default Planet;
