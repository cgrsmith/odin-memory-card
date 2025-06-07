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
                        props.setGameSettings({
                            ...props.gameSettings,
                            choices: props.generateBaseOptions(e.target.value)
                        })
                    }}
                />
            </label>
            <button onClick={props.playGame}>Play</button>
        </div>
  )
}

export default GameSettings
