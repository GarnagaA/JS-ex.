class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const array = [...this.wordElement.children]
    // const array2 = [...word]
    // console.log(array2)
    const suc = () => this.success()
    const fail = () => this.fail()
    let intervalId
    // let currentSymbol = this.currentSymbol
    let currentSymbol =  this.currentSymbol
    let nextCurrentSymbol = this.currentSymbol.nextElementSibling
    //
    // function onKeyPress (event) {
    //   let letter = event.key.toString().toLowerCase()
    //   console.log(currentSymbol)
    //   console.log(letter)
    //
    //   if (letter === currentSymbol) {
    //
    //     // this.currentSymbol.classList.remove('symbol_current')
    //     // this.currentSymbol.nextElementSibling.classList.add('symbol_current')
    //   } else this.fail()
    // }

  //   window.addEventListener('keydown', function (event) {
  //     if (document.querySelector('.symbol_current').textContent.toLowerCase() === event.key.toLowerCase()) {
  //       suc()
  //       document.querySelector('.symbol_current').nextElementSibling.classList.add('symbol_current')
  //       setTimeout(() => document.querySelector('.symbol_current').classList.remove('symbol_current'))
  //     } else fail()
  //   })
  // }


      Array.from(document.querySelectorAll('.symbol')).forEach((e) => {
        document.addEventListener('KeyboardEvent', function (event) {
          if (document.querySelector('.symbol_current').textContent.toLowerCase() === event.key.toLowerCase()) {
            suc()
            document.querySelector('.symbol_current').nextElementSibling.classList.add('symbol_current')
            setTimeout(() => document.querySelector('.symbol_current').classList.remove('symbol_current'))
          } else fail()
           }
           )
      })
}


      // window.addEventListener('keydown', function (event) {
      //   letter = event.key.toString().toLowerCase()
      //   console.log(letter)
      //   console.log(currentSymbol)
      //   if ( letter ===  currentSymbol ) {
      //     suc()
      //   } else fail()
      // })

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      this.registerEvents()
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const renderCode = [...word].map((el, index) =>
        `<span class="symbol ${index === 0 ? 'symbol_current': ''}">${el}</span>`)
        .join('');
    this.wordElement.innerHTML = renderCode;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

