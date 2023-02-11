// object выпадающий список
const dropdownList = document.querySelector('.dropdown__list');

// массив с выпадающими элементами
const dropdownArray = Array.from(document.querySelectorAll('.dropdown__item'))

// инициатор события
const dropdownValue = document.querySelector('.dropdown__value');

// переменная для хранения id таймера
let intervalId;


const onClick = function ( ) {
    if (!dropdownValue.classList.contains('open')) {

        intervalId = setTimeout(() => {
            dropdownValue.classList.add('open')
            dropdownList.classList.add('dropdown__list_active')
        }, 0)
    }
    if (dropdownValue.classList.contains('open')) {
        clearTimeout(intervalId)
        dropdownList.classList.remove('dropdown__list_active')
        dropdownValue.textContent = `${this.textContent}`
        intervalId = setTimeout( () => {
            dropdownValue.classList.remove('open')
            }, 0)
    }
}

dropdownValue.addEventListener('click', onClick)
dropdownArray.forEach( (e) => e.addEventListener('click', onClick))

//




