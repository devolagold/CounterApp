const incrementBtn = document.getElementById('increment-btn')
const resetBtn = document.getElementById('reset-btn')
const decrementBtn = document.getElementById('decrement-btn')
const countContainer = document.getElementById('count-container')
let count = document.querySelector('#count')

resetBtn.addEventListener('click', () => {
    count.textContent = 0
    countContainer.style.borderColor = "white"
})

incrementBtn.addEventListener('click', () => {
    count.textContent++
    if (count.textContent > 0) {
        countContainer.style.borderColor = "#148E88"
    }
})

decrementBtn.addEventListener('click', () => {
    count.textContent--
    if (count.textContent < 0) {
        countContainer.style.borderColor = "#F25B36"
    }
})