const modal = document.querySelectorAll('.modal')

const modalClose = document.querySelectorAll('.modal__close')
// const modalMainButton = document.querySelectorAll('.show-success')
const modalButton = document.querySelectorAll('.btn')

modal.item(0).className = 'modal modal_active'
console.log(modal.length)


modalClose[0].onclick = () => {
   modal.item(0).className = 'modal';
}
modalClose[1].onclick = () => {
    modal[1].className = 'modal'
}

modalButton[0].onclick = () => {
    modal.item(0).className = 'modal';
    modal.item(1).className = 'modal modal_active';
}

modalButton[1].onclick = () => {
    modal.item(1).className = 'modal'
}



