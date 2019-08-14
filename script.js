var name = "Victoria"
console.log("Hello " + name)

function getInputValue(id) {
    var input = document.getElementById(id)
    return Number(input.value)
}

function handleButtonClick() {
    var height = getInputValue('heightInput') / 100
    var weight = getInputValue('weightInput')
    
    var BMI = weight / (height * height)
    var category
    if (BMI < 18.5) {
        category = 'niedowaga'
    } else if (BMI < 25) {
        category = 'waga prawidłowa'
    } else {
        category = 'nadwaga'
    }
    
    console.log(BMI, category)
    document.getElementById('result').innerText = BMI.toFixed(2) + ' - ' + category
}

document.getElementById("button").onclick = handleButtonClick


