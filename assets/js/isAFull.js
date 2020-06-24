//import { cardsByValues } from "../src/occurences"

function isAFull(cards) {
  let cardsValues = cardsByValues(cards)
  let vals = Object.values(cardsValues).map(v => v.length)
  
  return vals.includes(2) && vals.includes(3)
}

//export { isAFull }

