import React from 'react'
import Card from './Card';

const CardGrid = (props) => {
  return (
    <div>
        {props.options.map(option => {
            return (
                <Card key={option} value = {option} handlePick = {props.handlePick}/>
            )
        })}
    </div>
  )
}

export default CardGrid
