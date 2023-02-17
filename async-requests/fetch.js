const requestURL = 'https://jsonplaceholder.typicode.com/users'
const body = {
    name: 'Andrei',
    age: 28
}

function sendRequest (method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json()
    })
}

sendRequest( 'POST', requestURL, body )
    .then( data => console.log(data))
    .catch( err => console.log(err))

const myNumber = 27;

const obj = {
    name: 'Andrei',
    age : 28
}

localStorage.setItem('person' , JSON.stringify(obj))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)

raw.name = 'Bobich__yet'

console.log(typeof JSON.parse(raw))

const buttonOpen = document.querySelector('#button__modal__open');
const dialogModal = document.querySelector('dialog');
const buttonClose = dialogModal.querySelector('#button__modal__close');

buttonOpen.addEventListener('click', () => dialogModal.showModal())
buttonClose.addEventListener('click', () => dialogModal.close())