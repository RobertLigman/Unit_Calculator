const input = document.querySelector('input');
const select = document.querySelector('select');
// console.log(select.value);
const btn = document.querySelector('.calc');
const output = document.querySelector('.output');
const chooseButtons = document.querySelectorAll('.main')
const buttonArray = ['meter']
const optionsArr = Array.from(select.children);

function generateObjects(value) {
    switch (value.toLowerCase()) {
        case 'temperature':
            {
                return temperature;
            }
        case 'meter':
            {
                return meter;
            }
    }
}
const temperature = new Unit(['Celsjusz na Fahrenheit', 'Fahrenheit na Celsjusz'], ['toFahrenheit', 'toCelsius']);
temperature.formulaForFirstValue = function(inputValue) {
    return (inputValue * 1.8 + 32)
};
temperature.formulaForSecondValue = function(inputValue) {
    return (inputValue - 32) / 1.8;
};


// const temperature = {
//     option: ['Celsjusz na Fahrenheit', 'Fahrenheit na Celsjusz'],
//     value: ['toFahrenheit', 'toCelsius'],
//     formulaForFirstValue(inputValue) {
//         return (inputValue * 1.8 + 32)
//     },
//     formulaForSecondValue(inputValue) {
//         return (inputValue - 32) / 1.8;
//     },
//     calculateFromThisObject(inputValue) {
//         if (inputValue) {
//             if (select.value == this.value[0]) {

//                 return this.formulaForFirstValue(inputValue).toFixed(2);

//             } else if (select.value == this.value[1]) {

//                 return this.formulaForSecondValue(inputValue).toFixed(2);

//             }
//         }
//     }
// }

const meter = new Unit(['Kilometry na Mile', 'Mile na Kilometry'], ['toMiles', 'toKiloMeters']);
meter.formulaForFirstValue = function(inputValue) {
    return inputValue / 1.609344;
}
meter.formulaForSecondValue = function(inputValue) {
        return inputValue * 1.609344;
    }
    // const meter = {
    //     option: ['Kilometry na Mile', 'Mile na Kilometry'],
    //     value: ['toMiles', 'toKiloMeters'],
    //     calculateFromThisObject(inputValue) {
    //         if (inputValue) {
    //             if (select.value == this.value[0]) {

//                 return (inputValue / 1.609344).toFixed(4);

//             } else if (select.value == this.value[1]) {

//                 return (inputValue * 1.609344).toFixed(4);

//             }
//         }
//     }
// }

const calculateLenghtUnit = (inputValue) => {

    let outputValue;
    if (select.value == "toMiles") {
        console.log('Zamieniam na mile');
        outputValue = (inputValue / 1.609344).toFixed(4);
        output.textContent = outputValue;

    } else {
        outputValue = (inputValue * 1.609344).toFixed(4);
        output.textContent = outputValue;
    }
}


const calculate = () => {

    // if (chooseButtons[0].classList.contains('active') && chooseButtons[0].id === buttonArray[0]) { calculateLenghtUnit(input.value); }
    chooseButtons.forEach(el => {
        if (el.classList.contains('active')) {
            let actionToCalculate = generateObjects(el.textContent);
            output.textContent = actionToCalculate.calculateFromThisObject(input.value);
        }
    });


}
chooseButtons.forEach(el => {

    el.addEventListener('click', function() {
        console.log(this)
        chooseButtons.forEach(item => {
            item.classList.remove('active');
        })
        el.classList.add('active');


        // console.log(this.el.id.option[1])

        optionsArr.forEach((item, index) => {
            // console.log(this.textContent);
            let options = generateObjects(this.textContent);
            item.textContent = options.option[index];
            item.value = options.value[index];
            // item.textContent = temperature.option[index];
            // =temperature.index
        })
    })
})
btn.addEventListener('click', calculate);