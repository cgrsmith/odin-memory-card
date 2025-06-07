export default function optionGenerator() {

    function generateBaseOptions(numOptions, numChoices = 151) {
        const baseOptions = new Set();
        while (baseOptions.size < numOptions) {
            const randomNumber = Math.floor(Math.random() * numChoices);
            baseOptions.add(randomNumber);
        }
        return Array.from(baseOptions).map(option => {
            return {
                id: option,
                name: null,
                frontSpriteURL: null
            }
        });
    }

    function getPokeData(option) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${option}`)
            .then(response => response.json())
            .then(data => {
                return {
                    id: option,
                    name: data.name,
                    frontSpriteURL: data.sprites.front_default
                }
            });
    }

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
            option = choices[Math.floor(Math.random() * choices.length)].id;
            found = curOptions.includes(option);
        }
        return [...curOptions, option];
    }

    return {generateBaseOptions, generateOptions}
}