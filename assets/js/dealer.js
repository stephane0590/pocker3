/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

//import Deck from "../js/Deck.js"

// const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
// const TYPES = ["d", "c", "h", "s"]


// Monkey Patching
// Array.prototype.shuffle = function ()  {
//   let ary = this;
//   let shuffled = [];

//   while(ary.length > 0) {
//     let i = Math.floor(Math.random() * ary.length)

//     shuffled.push(ary[i])
//     ary.splice(i, 1)
//   }

//   return shuffled
// }



function dealer() {
  let deck = new Deck()
  deck.shuffle()

  //return [deck.cards.slice(0, 5), deck.cards.slice(5, 10)]
  return deck.cards.slice(0,9)
}



//export { dealer };