export default function optionGenerator() {

    async function generateBaseOptions(numOptions, numChoices = 151) {
        const baseOptions = new Set();
        while (baseOptions.size < numOptions) {
            const randomNumber = Math.floor(Math.random() * numChoices);
            if (randomNumber !== 0) baseOptions.add(randomNumber);
        }
        const filledBaseOptions = await Promise.all(Array.from(baseOptions).map(getPokeData));
        return filledBaseOptions;
    }

    async function getPokeData(option) {
        // return new Promise(resolve => {
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${option}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         resolve ({
        //             id: option,
        //             name: data.name,
        //             frontSpriteURL: data.sprites.front_default
        //         })
            
        //     })}
        // )
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${option}`);
        const data = await res.json();
        return {
            id: option,
            name: data.name,
            frontSpriteURL: data.sprites.front_default
        }
    }

    function generateOptions(numOptions, totalChoices) {
        const options = [];
        const shuffledOptions = [];
        for (let i = 0; i < totalChoices; i++){
            options.push(i);
        }
        while(shuffledOptions.length < numOptions) {
            shuffledOptions.push(options.splice(Math.floor(Math.random() * options.length),1)[0]);
        }
        return shuffledOptions;
    }

    return {generateBaseOptions, generateOptions}
}