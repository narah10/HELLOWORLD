
let button = document.querySelector(".changeText")

button.addEventListener("click", changeWord)

function changeWord() {
    let displayText = document.querySelector('.displayText')
    displayText.innerHTML = "Hello Fall"
}
