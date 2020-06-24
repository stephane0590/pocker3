//import Card from "../js/Card.js"

class Deck {
  constructor() {
    this._cards = Card.values().map(
      v => Card.types().map(
        t => v + t
      )
    ).flat()
  }

  get cards() {
    return this._cards
  }

  shuffle() {
    let newCards = [];

    while(this._cards.length > 0) {
      let i = Math.floor(Math.random() * this._cards.length)
  
      newCards.push(this._cards[i])
      this._cards.splice(i, 1)
    }

    this._cards = newCards
  }
}

//export default Deck
