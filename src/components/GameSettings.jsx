import React from 'react'

const GameSettings = (props) => {


    return (
        <div className="gameSettings">
            <h2>Game Setup</h2>
            <label htmlFor="setOptions">
                <span>Options per Round:</span> 
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
            <label htmlFor="setChoices">
                <span>Total Choices:</span> 
                <input
                    id="setChoices"
                    type="number"
                    value={props.gameSettings.totalChoices}
                    onChange={(e) => {
                        props.setGameSettings({
                            ...props.gameSettings,
                            totalChoices: e.target.value
                        })
                    }}
                />
            </label>
            <button onClick={props.playGame}>Play</button>
        </div>
  )
}

export default GameSettings
