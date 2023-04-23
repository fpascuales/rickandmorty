import React from 'react'
import { useSelector } from 'react-redux'
import "./PlanetDetail.css"
import { useModal } from '../../customHooks/useModal'

const PlanetDetail = () => {

  const { planetSelected, residents } = useSelector(
    (state) => state.planets
  )

  const { isOpen, residentData, onOpen, onClose } = useModal()

  return (
    <div className='planet-info'>
      <div className='planet-data'>
        <h1>{planetSelected.name}</h1>
        <p>Dimension: {planetSelected.type}</p>
        <p>Type: {planetSelected.dimension}</p>
      </div>
      <div className="planet-residents">
        {residents.map((resident) => (
          <div className='resident' key={resident.id} onClick={() => onOpen(resident)}>
            <img className='resident-image' src={resident.image}/>
            <p className='resident-name'>{resident.name}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="modal">
          <button className='modal-close' onClick={onClose}>x</button>
          <img className='modal-resident-image' src={residentData.image}/>
          <h2>{residentData.name}</h2>
          <p>Gender: {residentData.gender}</p>
          <p>Species: {residentData.species}</p>
          <p>Status: {residentData.status}</p>
          <p>Type: {residentData.type}</p>
          <p>Origin: {residentData.origin.name}</p>
          <p>Location: {residentData.location.name}</p>
        </div>
      )}
    </div>
  )
}

export default PlanetDetail
