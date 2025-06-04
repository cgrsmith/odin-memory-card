import React from 'react'

const GameSettings = (props) => {


    return (
        <div>
            <h2>Game Setup</h2>
            <label htmlFor="setOptions">
                <span>Number of Options:</span> 
                <input
                    id="setOptions"
                    type="number"
                    value={props.gameSettings.numOptions}
                    onChange={(e) => {
                        props.setGameSettings({
                            ...props.gameSettings,
                            numOptions: e.target.value
                        })
                    }}
                />
            </label>
            <label htmlFor="setOptions">
                <span>Number of Choices:</span> 
                <input
                    id="setOptions"
                    type="number"
                    defaultValue={props.gameSettings.choices.length}
                    onChange={(e) => {
                        console.log([...Array(parseInt(e.target.value)).keys()]);
                        props.setGameSettings({
                            ...props.gameSettings,
                            choices: [...Array(parseInt(e.target.value)).keys()]
                        })
                    }}
                />
            </label>
            <button onClick={props.playGame}>Play</button>
        </div>
  )
}

export default GameSettings
