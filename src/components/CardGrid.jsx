import React, { useEffect } from 'react'
import Card from './Card';

const CardGrid = (props) => {
    // useEffect(() => {
    //     if(props.streak === 0) {
    //         console.log(1);
    //     }
    // },[props.streak])
    
  return (
    <div className="gameDisplay">
        <button onClick={props.goSettings}>New Game</button>
        <p className="gameStat">High Score: {props.highScore}</p>
        <p className="gameStat">Current Streak: {props.streak}</p>
        <div className={"alert " + (props.alert ? "show" : "hide")}>
            <p>REPEAT</p>
        </div>
        <div className="cardGrid">
            {props.options.map(option => {
                return (
                    <Card key={option} value = {props.baseOptions[option]} handlePick = {props.handlePick}/>
                )
            })}
        </div>
        {/* <p>Debug: {props.debug}</p> */}
    </div>
  )
}

export default CardGrid
