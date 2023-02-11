// Открываем чат
let timerId;
document.querySelector('.chat-widget').addEventListener('click', function () {
    document.querySelector('.chat-widget').classList.add('chat-widget_active')
    timerId = setInterval( () => onAnswer(), 30000)
})


// Симулируем рандомный ответ на сообщение
function onAnswer( ) {

    const strings = [
        'Вы ничего не купили, чтобы что то нам предъявлять!',
        'Можете сегодня не подходить к компьютеру',
        'Добрый день, всего хорошего!',
        'К сожалению все операторы заняты, не пишите нам больше.',
        'Вы очень душный... Ну ладно, что вам от нас нужно?',
        'Fuck you man!!!'
    ];
    const string = strings[Math.floor(Math.random() * strings.length)];

    document.querySelector('.chat-widget__messages').innerHTML +=
        `<div class="message message_client">
            <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
            <div class="message__text">${string}</div>
         </div>`
    timerId = setInterval( () => onAnswer(), 30000) // Дописать логику
    onscroll( () => scrollY)

}

function oninput (event) {
    clearInterval(timerId)
    document.querySelector('.chat-widget__input').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const message = event.target.value
            document.querySelector('.chat-widget__messages').innerHTML += `<div class="message">
                                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                                <div class="message__text">${message}</div>
                                </div>`;

            setTimeout(() => onAnswer(), 1000)
        }

    })
}

document.querySelector('.chat-widget__input').addEventListener('change', oninput)





