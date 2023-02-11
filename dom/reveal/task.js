const revealOne = document.querySelector('.reveal_one')
const revealTwo = document.querySelector('.reveal_two')

document.addEventListener('scroll', function () {
        const screenHeight = window.innerHeight
        let revealOneRoll = revealOne.getBoundingClientRect().bottom - screenHeight
        let revealTwoRoll = revealTwo.getBoundingClientRect().bottom - screenHeight

        revealOneRoll < 0 ? revealOne.classList.add('reveal_active') : '';
        revealOneRoll > 0 ? revealOne.classList.remove('reveal_active') : '';

        revealTwoRoll < 0 ? revealTwo.classList.add('reveal_active') : '';
        revealTwoRoll > 0 ? revealTwo.classList.remove('reveal_active') : '';
    })

