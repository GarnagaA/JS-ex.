const buttons = Array.from(document.querySelectorAll('.btn'))

function onClick (event) {
    if (this.id === 'btn1') {
        console.log('Ты лох!')
        console.log(event.type)
        console.log(event.currentTarget)
        console.log(event.target)
    }
    if (this.id === 'btn2') {
        console.log('Цветочный, жирный хуй!')
    }
    if (this.id === 'btn3') {
        console.log('И кенты твои такие же!')
    }
}

buttons.forEach((e)  => {
    e.addEventListener('click', onClick)
    e.addEventListener('contextmenu', onClick)
})

document.body.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget)
})


// Пример с textarea
const textarea = document.querySelector('textarea')

let prev = null;
const onKey = (e) => {
    if ((e.code === 'KeyW' && prev === 'KeyA') ||
        (e.code === 'KeyA' && prev === 'KeyW')) {
        console.log('нажата комбинация: W + A ')
    }
    console.log(e.code)
    prev = e.code
}
// const scroll = document.documentElement.onscroll

window.onscroll = function () {
    const scroolTop = document.documentElement.scrollWidth
    console.log(scroolTop + 'px')
}
// const onKey = (e) => {
//     if ( e.code === 'Enter' && e.shiftKey) {
//         console.log('Перенос строки --->>>')
//     } else console.log(e.key, e.shiftKey)
// }

textarea.addEventListener('keydown', onKey)


