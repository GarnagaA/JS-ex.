const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const imgArray = document.querySelectorAll('.slider__item');
const dotsArray = document.querySelectorAll('.slider__dot')

const imgArrayLength = imgArray.length;

let activeItem = 0;

function slider () {
    imgArray.forEach(index => index.classList.remove('slider__item_active'));
   // for ( let i = 0 ; i < imgArray.length ; i++) {
   //     imgArray[i].classList.remove('slider__item_active')
   // }
    imgArray[activeItem].classList.add('slider__item_active');
}
slider()

arrowNext.onclick = () => {
    if (activeItem === imgArrayLength -1) {
        activeItem = 0
        slider()
    } else {
        activeItem++
        slider()
    }
}

arrowPrev.onclick = () => {
    if (activeItem === 0) {
        activeItem = imgArrayLength - 1;
        slider()
    } else {
        activeItem--;
        slider()
    }
}

dotsArray.forEach( (e, index)=> e.onclick = () => {
    activeItem = index;
    slider()
})


