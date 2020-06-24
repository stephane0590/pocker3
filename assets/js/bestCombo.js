/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le 
 * meilleur combo possible :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur 
 * prime sur le type !
 * 
 */

// import { isAFull } from "../src/isAFull"
// import { isAFlush } from "../src/isAFlush"
// import { isAPair } from "../src/isAPair"
// import { orderCards } from "../src/orderCards"

// // {aces: ["As", "Ah"], kings: ["Ks"]}
// import { cardsByValues } from "../src/cardsByValues"

// import Card from "../src/Card"

function bestCombo(cards) {
  let bests

  if(isAFull(cards)) {
    bests = fullCombo(cards)
  } else if(isAFlush(cards)) {
    bests = flushCombo(cards)
  } else if(isAPair(cards)) {
    bests = pairCombo(cards)
  } else {
    bests = Object.assign([], orderCards(cards)).slice(0, 5)
  }

  return bests
}

function fullCombo(cards) {
  let cardsValues = cardsByValues(cards)
  let trips = whereValueOccures(cardsValues, 3)
  let pairs = whereValueOccures(cardsValues, 2)

  let combos = orderCards(trips.flat().map(p => p.label))
  let pairLabels = orderCards(pairs.flat().map(c => c.label))

  pairLabels.forEach(l => combos.push(l))

  return combos.slice(0, 5)
}

function flushCombo(cards) {
  let flushCards = orderCards(whereTypeOccures(cards, 5))
  
  return flushCards.slice(0, 5)
}

function pairCombo(cards) {
  let cardsValues = cardsByValues(cards)
  let pairs = whereValueOccures(cardsValues, 2)
  let solo = whereValueOccures(cardsValues, 1)

  let combos = orderCards(pairs.flat().map(p => p.label))
  let soloLabels = orderCards(solo.flat().map(c => c.label))

  soloLabels.forEach(l => combos.push(l))

  return combos.slice(0, 5)
}

/**
 * Get the labels of cards that occures nb times
 * 
 * @param {object} cards - i.e {aces: ["As", "Ah"], kings: ["Ks", "Kd"], queens: ["Qc"]}
 * @param {number} nb - i.e 2
 * @return {Array} of pairs (label) - i.e ["As", "Ah", "Ks", "Kd"]
 */
function whereValueOccures(cards, nb) {
  let values = 
    Object
      .keys(cards)
      .map(k => cards[k].length == nb ? cards[k] : null)
      .filter(Boolean)

  return values
}

/**
 * Get the labels of cards type that occures nb times
 * 
 * @param {Array} cards - i.e {["As", "Ah", "Ks", "Kd", "Qs"]
 * @param {number} nb - i.e 3
 * @return {Array} of pairs (label) - ["As", "Ks", "Qs"]
 */
function whereTypeOccures(cards, nb) {
  let colors = {}

  cards.forEach(c => {
    let type = new Card(c).type()

    if(colors[type]) {
      colors[type] += 1
    } else {
      colors[type] = 1
    }
  })

  let types = 
    Object
    .keys(colors)
    .map(k => colors[k] == nb ? k : null)
    .filter(Boolean)

  return cards.filter(c => types.includes(new Card(c).type()))
}

//export { bestCombo }