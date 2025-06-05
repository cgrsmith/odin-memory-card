export default function optionGenerator() {

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

    return {generateOptions}
}