import React from 'react'

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.handlePick(props.value.id)}>
        <img src={props.value.frontSpriteURL} alt={props.value.id} />
      {/* val: {props.value.name} */}
    </div>
  )
}

export default Card
