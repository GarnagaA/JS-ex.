const arrayTab = Array.from(document.querySelectorAll('.tab'))
const arrayContent = Array.from(document.querySelectorAll('.tab__content'))




arrayTab.forEach((e) => {

        e.addEventListener(('click'), function (event) {
            arrayTab.forEach((e) => e.classList.remove('tab_active'))
            arrayContent.forEach((e) => e.classList.remove('tab__content_active'))

            event.currentTarget.classList.add('tab_active')
            const currentIndex = arrayTab.indexOf(document.querySelector('.tab_active'))
            arrayContent[currentIndex].classList.add('tab__content_active')

        })
    }
)