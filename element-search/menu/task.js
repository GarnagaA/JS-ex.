const dropdownArray = Array.from(document.querySelectorAll('.dropdown'))
let intervalId;


dropdownArray.forEach((e) => e.addEventListener('click', function (event) {
    if (!this.classList.contains('open')) {
        Array.from(document.querySelectorAll('.menu_sub'))
            .forEach( e => e.classList.remove('menu_active'))
        dropdownArray.forEach( e =>
            e.classList.remove('open'))
        // event.preventDefault()
        e.nextElementSibling.classList.add('menu_active')
        intervalId = setTimeout(() => e.classList.add('open'), 0)
    }
    if (this.classList.contains('open')) {
        clearTimeout(intervalId)
        this.nextElementSibling.classList.remove('menu_active')
        intervalId = setTimeout(() => this.classList.remove('open'), 0)
    }

    window.addEventListener('click', function (e) {
        if (e.target == document.querySelectorAll('.dropdown').item(0) ||
            e.target == document.querySelectorAll('.dropdown').item(1) ||
            e.target == document.querySelectorAll('.dropdown').item(2) ||
            e.target == document.querySelectorAll('.dropdown').item(3)) {
            return;
        } else {
            Array.from(document.querySelectorAll('.menu_sub')).forEach( e =>
                e.classList.remove('menu_active'))
            dropdownArray.forEach( e =>
                e.classList.remove('open'))
        }
    })
    // return false
}))

