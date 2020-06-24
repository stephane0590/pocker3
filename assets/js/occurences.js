/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

//import Card from "../src/Card"

function occurences(cards) {
  let occ = {}

  Object.entries(cardsByValues(cards)).map(c => {
    let k = c[0].substring(0, c[0].length - 1)
    let v = c[1].length

    occ[k] = v
  });


  return occ
}

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

//export { occurences, cardsByValues };