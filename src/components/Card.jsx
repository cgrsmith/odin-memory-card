import React from 'react'

const Card = (props) => {
  return (
    <div onClick={() => props.handlePick(props.value)}>
    <img src={null} alt={props.value} />
      val: {props.value}
    </div>
  )
}

export default Card
