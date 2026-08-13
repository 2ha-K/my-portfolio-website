// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dogImageDiv.innerHTML = `<img src='${json.message}'>`
    })
    console.log('得到狗狗!')
}

dogButton.onclick = () => getNewDog()