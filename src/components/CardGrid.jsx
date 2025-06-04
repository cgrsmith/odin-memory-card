import React from 'react'
import Card from './Card';

const CardGrid = (props) => {
  return (
    <div>
        <p>High Score: {props.highScore}</p>
        <p>Current Streak: {props.streak}</p>
        {props.options.map(option => {
            return (
                <Card key={option} value = {option} handlePick = {props.handlePick}/>
            )
        })}
        <p>Debug: {props.debug}</p>
        <button onClick={props.goSettings}>Settings</button>
    </div>
  )
}

export default CardGrid
