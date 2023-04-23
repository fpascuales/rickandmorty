import React, { useEffect } from 'react'
import "./Planets.css"
import { getPlanets, selectPlanet } from '../../redux/planets/planets.actions'
import { useSelector } from 'react-redux'
import Planet from '../../components/Planet/Planet'
import { useNavigate } from 'react-router-dom'



const Planets = () => {
  useEffect(() => {
    getPlanets();
  }, []);

  const { planets } = useSelector((state) => state.planets);
  const navigate = useNavigate()

  return (
    <>
      <div className="planets">
        {planets.map((planet) => {
          return (
            <div className="planet" key={planet.id}>
              <Planet planet={planet} />
              <button
                className="planet-btn"
                onClick={() => selectPlanet(planet, navigate)}
              >
                DETALLES
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Planets