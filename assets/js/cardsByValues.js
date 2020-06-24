//import Card from "../src/Card"

function cardsByValues(cards) {
  let cardsKeys = {}

  cards
    .map(c => new Card(c))
    .forEach(card => {
      let label = card.valueLabel() + "s"

      if(cardsKeys[label]) {
        cardsKeys[label].push(card)
      } else {
        cardsKeys[label] = [card]
      }
    })

    return cardsKeys
}

//export { cardsByValues };