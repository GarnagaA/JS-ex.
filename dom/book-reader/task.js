// document.querySelector('.book__content').setAttribute('style', `font-size: ""; color: ""; background-color: ""`)
//
//
// // Change font-size <<<--------------------------->>>
// const arrayControlSize = Array.from(document.querySelectorAll('.size'))
// function onChangeSize (event) {
//     const currentSize = event.currentTarget.dataset.size
//     event.preventDefault();
//
//     arrayControlSize.forEach( e => e.classList.remove('font-size_active'))
//     event.currentTarget.classList.add('font-size_active')
//     console.log(document.querySelector('.book__content').getAttribute('style'))
//
//     const fontSize = document.querySelector('.book__content').dataset.size = `font-size: ${currentSize};`
//     // document.querySelector('.book__content').setAttribute('style', `font-size: ${currentSize}`)
// }
//
// arrayControlSize.forEach( e => e.addEventListener( 'click', onChangeSize ));
//
//
// //Change text color // <<<----------------------------->>>
//
// const arrayControlColorText = document.querySelectorAll('.text-color')
// function onChangeTextColor (event) {
//     event.preventDefault()
//     const currentColor = event.currentTarget.dataset.textColor
//
//     arrayControlColorText.forEach( e => e.classList.remove('color_active'))
//     event.currentTarget.classList.add('color_active')
//
//     document.querySelector('.book__content').setAttribute('style', `color: ${currentColor}`)
// }
//
// arrayControlColorText.forEach( e => e.addEventListener('click', onChangeTextColor ))
//
// // Change background color // <<<----------------------------->>>
// const arrayControlColorBg = document.querySelectorAll('.bg-color')
// function onChangeBg (event) {
//     event.preventDefault()
//     const currentColorBg = event.currentTarget.dataset.bgColor
//
//     arrayControlColorBg.forEach( e => e.classList.remove('color_active'))
//     event.currentTarget.classList.add('color_active')
//
//     document.querySelector('.book__content').setAttribute('style', `background-color: ${currentColorBg}`)
// }
//
// arrayControlColorBg.forEach( e => e.addEventListener('click', onChangeBg ))




//Bad Try №2  <<<--------------------------->>>
let bgColor = "background-color: whitesmoke;",
    fontSize = "font-size: 16px;",
    color = "color: black;";

function onChange (event) {
    event.preventDefault();
    // let {fontSize, color, bgColor} = event.currentTarget.dataset


    if (event.currentTarget.classList.contains('size')) {
        const currentEl = event.currentTarget.dataset.size
        document.querySelectorAll('.size').forEach( e => e.classList.remove('font-size_active'))
        event.currentTarget.classList.add('font-size_active')
        fontSize = event.currentTarget.dataset.size


        console.log(fontSize)
        // document.querySelector('.book__content').dataset.size = `font-size: ${currentEl};`
    }

    if (event.currentTarget.classList.contains('text-color')) {
        document.querySelectorAll('.text-color').forEach( e => e.classList.remove('color_active'))
        event.currentTarget.classList.add('color_active')
        console.log(color)
        color = event.currentTarget.dataset.textColor
    }


    if (event.currentTarget.classList.contains('bg-color')) {
        document.querySelectorAll('.bg-color').forEach( e => e.classList.remove('color_active'))
        event.currentTarget.classList.add('color_active')
        console.log(bgColor)
        bgColor = event.currentTarget.dataset.bgColor
    }
    document.querySelector('.book__content').setAttribute('style', `${fontSize} ${color} ${bgColor}`)

}
document.querySelectorAll('.option').forEach( e => e.addEventListener( 'click', onChange ));

// // Good try №3
// function onChange (event) {
//     event.preventDefault();
//     // let {fontSize, color, bgColor} = event.currentTarget.dataset
//
    // if (event.currentTarget.classList.contains('size')) {
//         document.querySelectorAll('.size').forEach( e => e.classList.remove('font-size_active'))
//         event.currentTarget.classList.add('font-size_active')
//
//         const fontSize = event.currentTarget.dataset.size
//
//
//         document.querySelector('.book__content').classList.add(`font-size_${fontSize}`)
//     }
//
//     if (event.currentTarget.classList.contains('text-color')) {
//         document.querySelectorAll('.text-color').forEach( e => e.classList.remove('color_active'))
//         event.currentTarget.classList.add('color_active')
//         console.log(color)
//         color = event.currentTarget.dataset.textColor
//
//     }
//
//
//     if (event.currentTarget.classList.contains('bg-color')) {
//         document.querySelectorAll('.bg-color').forEach( e => e.classList.remove('color_active'))
//         event.currentTarget.classList.add('color_active')
//         console.log(bgColor)
//         bgColor = event.currentTarget.dataset.bgColor
//
//     }
// }
//
// document.querySelectorAll('.option').forEach( e => e.addEventListener( 'click', onChange ));







