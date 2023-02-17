// const requestURL = 'https://jsonplaceholder.typicode.com/users'
//
// function sendRequest (method, url, body = null) {
//     return new Promise( (resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//
//         xhr.open('GET', url );
//
//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-Type', 'application/json')
//
//         xhr.onload = () => {
//             if ( xhr.status >= 400 ) {
//                 reject(xhr.response)
//             } else {
//                 resolve(xhr.response)
//             }
//         }
//
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//
//         xhr.send(JSON.stringify(body))
//     })
//
// }
//
// const body = {
//     name: 'Andrei',
//     age: 28
// }
//
// sendRequest( 'POST', requestURL, body )
//     .then( data => console.log(data))
//     .catch( err => console.log(err))