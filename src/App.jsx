import { useState } from 'react'
import './styles//App.css'
import CardGrid from './components/CardGrid';
import GameSettings from './components/GameSettings';

function App() {

    function generateOptions(numOptions, choices) {
        let options = [];
        while (options.length < numOptions && options.length < choices.length) {
            options = addUniqueOption(options, choices);
        }
        return options;
    }

    function addUniqueOption(curOptions, choices) {
        let found = true;
        let option = - 1;
        while (found) {
            option = Math.floor(Math.random() * choices.length);
            found = curOptions.includes(option);
        }
        return [...curOptions, option];
    }

    function handlePick(lastPick) {
        setOptions(generateOptions(gameSettings.numOptions, gameSettings.choices));
        if (selected.includes(lastPick)) {
            setSelected([]);
        } else {
            if (selected.length + 1 > highScore) {
                setHighScore(selected.length + 1);
            }
            setSelected([
                ...selected,
                lastPick
            ]);
        }
    }

    function goSettings() {
        setGameSettings({
            ...gameSettings,
            running: false
        })
    }

    function playGame() {
        setOptions(generateOptions(gameSettings.numOptions, gameSettings.choices));
        setSelected([]);
        setHighScore(0);
        setGameSettings({
            ...gameSettings,
            running: true
        })
    }

    const [gameSettings, setGameSettings] = useState({
            running: false,
            numOptions: 4,
            choices: [0,1,2,3,4,5,6,7,8,9]
    });

    const [selected, setSelected] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [options, setOptions] = useState(
        generateOptions(gameSettings.numOptions, gameSettings.choices)
    );

    return (
        <>
        <div>
            <h1>Memory Game</h1>
            {gameSettings.running ?
                <CardGrid options = {options} highScore = {highScore} streak = {selected.length} handlePick = {handlePick} 
                    goSettings = {goSettings} debug = {selected} />
                :
                <GameSettings gameSettings = {gameSettings} setGameSettings = {setGameSettings} playGame = {playGame}/>
            }
        </div>
        </>
    )
}

export default App
