class Unit {
    constructor(option, value) {
        this.value = value;
        this.option = option;

    }
    calculateFromThisObject(inputValue) {
        if (inputValue) {
            if (select.value == this.value[0]) {

                return this.formulaForFirstValue(inputValue).toFixed(2);

            } else if (select.value == this.value[1]) {

                return this.formulaForSecondValue(inputValue).toFixed(2);

            }
        }
    }
}