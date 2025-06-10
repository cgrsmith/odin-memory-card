import { useEffect, useState } from 'react'
import './styles/App.css'
import CardGrid from './components/CardGrid';
import GameSettings from './components/GameSettings';
import optionGenerator from './optionGenerator';

function App() {
    const generator = optionGenerator();

    function handlePick(lastPick) {
        setOptions(generator.generateOptions(gameSettings.numOptions, gameSettings.totalChoices));
        if (selected.includes(lastPick)) {
            setSelected([]);
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 1200);
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
            loading: true,
            running: false
        })
    }

    function playGame() {
        setOptions(generator.generateOptions(gameSettings.numOptions, gameSettings.totalChoices));
        setSelected([]);
        setHighScore(0);
        setGameSettings({
            ...gameSettings,
            loading: true,
            running: true
        });
        loadPokemon();
    }

    async function loadPokemon() {
        setBaseOptions(await generator.generateBaseOptions(gameSettings.totalChoices));
        setGameSettings({
            ...gameSettings,
            loading: false,
            running: true
        })
    }

    const [gameSettings, setGameSettings] = useState({
            running: false,
            loading: true,
            numOptions: 9,
            totalChoices: 20
    });

    const [selected, setSelected] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [alert, setAlert] = useState(false);

    const [baseOptions, setBaseOptions] = useState([]);
    const [options, setOptions] = useState(
        generator.generateOptions(gameSettings.numOptions, gameSettings.totalChoices)
    );

    return (
        <>
        <div className="game">
            <h1>PokéMem</h1>
            {gameSettings.running ?
                (gameSettings.loading ?
                    <h2>Loading Pokemon</h2>
                    :
                    // (console.log(baseOptions))
                    <CardGrid options = {options} baseOptions = {baseOptions}
                        highScore = {highScore} streak = {selected.length} alert = {alert}
                        handlePick = {handlePick} goSettings = {goSettings} debug = {selected} />
                )
                :
                <GameSettings gameSettings = {gameSettings} setGameSettings = {setGameSettings} 
                    playGame = {playGame}/>
            }
        </div>
        </>
    )
}

export default App
