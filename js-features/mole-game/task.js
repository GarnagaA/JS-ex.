const dead = document.getElementById("dead")
const lost = document.getElementById('lost')


// getClassName = (index) => hole.className
getHole = (index) =>  document.getElementById(`hole${index}`)



for (let index = 1; index < 10  ; index++) {
    getHole(index).onclick = () => {
        if(getHole(index).className === 'hole hole_has-mole') {
            if (dead.textContent  !== '10') {
                ++dead.textContent
            } else alert(`You win and killed ${dead.textContent}`)

        }
        if(getHole(index).className === 'hole') {
            if (lost.textContent === '5') {
                alert(`!!!You lose!!! Допустив ${lost.textContent} промаха`)
            } else lost.textContent++
        }
    }
}




// getHole.onclick = () => {
//     if (getIndex( index ).className === 'hole hole_has-mole') {
//         dead.textContent++
//     }
//     if (getIndex( index ) === 'hole') {
//         lost.textContent++
//     }
//
// }
