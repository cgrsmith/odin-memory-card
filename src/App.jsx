import { useEffect, useState } from 'react'
import './styles//App.css'
import CardGrid from './components/CardGrid';
import GameSettings from './components/GameSettings';
import optionGenerator from './optionGenerator';

function App() {
    const generator = optionGenerator();

    function handlePick(lastPick) {
        setOptions(generator.generateOptions(gameSettings.numOptions, gameSettings.choices));
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
        console.log(gameSettings.choices.sort());
        setOptions(generator.generateOptions(gameSettings.numOptions, gameSettings.choices));
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
            choices: generator.generateBaseOptions(8)
    });

    const [selected, setSelected] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [options, setOptions] = useState(
        generator.generateOptions(gameSettings.numOptions, gameSettings.choices)
    );

    // useEffect(() => {
    //     async function fetchData() {
    //         const pokeData = await generator.generateBaseOptions(8);
    //         setGameSettings({
    //             ...gameSettings,
    //             choices: pokeData
    //         })
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => {
        console.log("useeffect");
        const filledChoices = [];
        gameSettings.choices.forEach(choice => {
            filledChoices.push({
                id: choice.id,
                name: "hi",
                frontSpriteURL: "bye"
            })
        })
        setGameSettings({
            ...gameSettings,
            choices: filledChoices
        })
    }, [])


    return (
        <>
        <div>
            <h1>Memory Game</h1>
            {gameSettings.running ?
                <CardGrid options = {options} baseOptions = {gameSettings.choices}
                    highScore = {highScore} streak = {selected.length} handlePick = {handlePick} goSettings = {goSettings} debug = {selected} />
                :
                <GameSettings gameSettings = {gameSettings} setGameSettings = {setGameSettings} generateBaseOptions = {generator.generateBaseOptions} playGame = {playGame}/>
            }
        </div>
        </>
    )
}

export default App
