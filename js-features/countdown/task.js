

const addTimer = function () {
    let timerSeconds = document.getElementById('timer__seconds')
    timerSeconds.textContent -= 1;
    // const location ="https://developer.mozilla.org/ru/docs/Web/API/Window/location";
    if (timerSeconds.textContent === '25') {
        const link = document.getElementById('link')
        alert('Подтвердите переход на сайт---->>> ')
        link.click()
        // alert(location)
    }
}

const timerSeconds= setInterval(addTimer, 1000)



// const addText = function () {
//     const timer = document.getElementById("timer")
//     timer.textContent -= 1;
// }
//
//
// let timer__1;
//
// const buttonStartTimer = document.getElementById('button__startTimer')
// buttonStartTimer.onclick = () => {
//     timer__1 = setInterval(addText, 1000)
// }
//
// const buttonEndTimer = document.getElementById('button__endTimer')
// buttonEndTimer.onclick = () => clearInterval(timer__1)
