// Вторая версия кода

function onAssignColor () {
    const rotatorArray = Array.from(document.querySelectorAll('.rotator__case'))
    rotatorArray.forEach( e => e.setAttribute('style', `color: ${e.dataset.color}`))
}

onAssignColor();

function onChangePhrase () {
    let activeRotator = document.querySelector('.rotator__case_active')
    let speed = Number(activeRotator.dataset.speed)
     if (activeRotator.nextElementSibling !== null) {
         activeRotator.nextElementSibling.classList.add('rotator__case_active')
         activeRotator.classList.remove('rotator__case_active')
         intervalId = setInterval(onChangePhrase, speed)
     } else {
         document.querySelector('.rotator').firstElementChild.classList.add('rotator__case_active')
         document.querySelector('.rotator').lastElementChild.classList.remove('rotator__case_active')
         intervalId = setInterval(onChangePhrase, speed)
     }
    clearInterval(intervalId)
}


let intervalId = setInterval(
    onChangePhrase, document.querySelector('.rotator__case_active').dataset.speed)
console.log(document.querySelector('.rotator__case_active').dataset.speed)