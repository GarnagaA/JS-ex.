const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

hasTooltip.forEach( e => {
    let x, y;

    if ( e.dataset.position === 'top' ) {
         y = e.offsetTop + e.offsetHeight + 'px';
         x = e.offsetLeft + 'px';
    }
    if ( e .dataset.position === 'bottom' ) {
        y = e.offsetTop + e.offsetHeight + 'px';
        x =  e.offsetLeft+ 'px'
    }
    if ( e.dataset.position === 'right' ) {
        y = e.offsetTop + 'px';
        x = e.offsetLeft + e.offsetWidth + 'px';
    }
    if ( e.dataset.position === 'left' ) {
        y = e.offsetTop + 'px';
        x = e.offsetLeft + 'px';
    }

    console.log(`x = ${x}; y = ${y}`)
    e.insertAdjacentHTML(
        'beforeend',
        `<div class="tooltip" style="top: ${y}; left: ${x}; ">${e.title}</div>`
    )
})

hasTooltip.forEach( e => e.addEventListener( 'click', function ( event ) {
    event.preventDefault( )
    let flag = event.currentTarget

    if (flag.querySelector('.tooltip').classList.contains('tooltip_active')) {
        hasTooltip.forEach( e => e.querySelector('.tooltip').classList.remove('tooltip_active'))
    } else {
        hasTooltip.forEach( e => e.querySelector('.tooltip').classList.remove('tooltip_active'))
        flag.querySelector('.tooltip').classList.add('tooltip_active')
    }
}))