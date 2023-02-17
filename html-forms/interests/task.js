const checkboxes = document.querySelectorAll('.interest__check')


checkboxes.forEach( e => e.addEventListener('click' , function (event) {
    // Передаём и снимаем checked у всех детей
    const cbParentArray =  Array.from(e.closest('li.interest')
        .querySelector('.interests_active')
        .querySelectorAll('.interest__check'))

    if (e.checked) {
        cbParentArray.forEach( e => e.checked = true)
    }

    if (!e.checked) {
        cbParentArray.forEach( e => e.checked = false)
    }
    // Если не все дети checked === true
    // if (e.closest('ul.interests') == null ||
    //     Array.from(e.closest('ul.interests')
    //         .querySelectorAll('input.interest__check'))
    //         .every( e => e.checked === true )) {
    //     return;
    // } else e.indeterminate

}))


