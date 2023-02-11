const imgCookie = document.getElementById('cookie')
const counter = document.getElementById('clicker__counter')
const counterPlus = document.getElementById('button__plus')
const counterMinus = document.getElementById('button__minus')
const clickerSpeed = document.getElementById('clicker__speed')
const startTime = Date.now()

const time = document.getElementById('time__start')

const setTime = () => time.textContent++;
setInterval(setTime, 1000)



imgCookie.onclick = () => {
    imgCookie.width = 220;
    const id = setTimeout(() => imgCookie.width = 200, 10)
}


counterPlus.onclick = () => {
    counter.textContent++;
    imgCookie.onclick();
    clickerSpeed.textContent = 1/((Date.now() - startTime)/1000)*time.textContent
        setInterval(clickerSpeed.textContent, 1000)
}

counterMinus.onclick = () => {
    counter.textContent--;
    imgCookie.onclick();
    clickerSpeed.textContent = 1/((Date.now() - startTime)/1000)*time.textContent

}

