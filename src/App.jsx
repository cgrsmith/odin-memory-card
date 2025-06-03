import { useState } from 'react'
import './styles//App.css'
import CardGrid from './components/CardGrid';

function App() {
    const initChoices = [0,1,2,3,4,5,6,7,8,9];
    const initNumOptions = 4;

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
        setOptions(generateOptions(initNumOptions, initChoices));
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

    const [selected, setSelected] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [options, setOptions] = useState(
        generateOptions(initNumOptions, initChoices)
    );

    return (
        <>
        <div>
            <h1>Memory Game</h1>
            <p>High Score: {highScore}</p>
            <p>Current Streak: {selected.length}</p>
            <CardGrid options = {options} handlePick = {handlePick} />
            <p>Debug: {selected}</p>
        </div>
        </>
    )
}

export default App
