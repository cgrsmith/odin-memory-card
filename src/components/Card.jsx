import React from 'react'

const Card = (props) => {
  return (
    <div>
      <button onClick={() => props.handlePick(props.value)}>val: {props.value}</button>
    </div>
  )
}

export default Card
