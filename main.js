const input = document.querySelector('input');
const select = document.querySelector('select');
// console.log(select.value);
const btn = document.querySelector('.calc');
const output = document.querySelector('.output');
const chooseButtons = document.querySelectorAll('.main')
const buttonArray = ['meter']


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

const temperature = {
    option: ['Celsjusz na Fahrenheit', 'Fahrenheit na Celsjusz'],
    temperature: 10,
}
const meter = {
    option: ['Kilometry na Mile', 'Mile na Kilometry']
}
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

    if (chooseButtons[0].classList.contains('active') && chooseButtons[0].id === buttonArray[0]) { calculateLenghtUnit(input.value); }


}
chooseButtons.forEach(el => {

    el.addEventListener('click', function() {
        console.log(this)
            // console.log(this.el.id.option[1])
        const optionsArr = Array.from(select.children);
        optionsArr.forEach((item, index) => {
            // console.log(this.textContent);
            let options = generateObjects(this.textContent);
            item.textContent = options.option[index];
            // item.textContent = temperature.option[index];
            // =temperature.index
        })
    })
})
btn.addEventListener('click', calculate);