//initialisation mains joueurs + board
var heroHand = []
var vilainHand = []
var board = []
var scoreHero = []
var scoreVilain = []
var gagnant = []


function game(){
  var deckCard = dealer() //réccupère les 9 premières cartes
  
  
  heroHand.push(deckCard[0], deckCard[1])
  vilainHand.push(deckCard[2], deckCard[3])
  board.push(deckCard[4], deckCard[5], deckCard[6], deckCard[7], deckCard[8])

  afficheCarte(heroHand, vilainHand) //affichage html

  //meilleur combo
  scoreHero = bestCombo(heroHand.concat(board))
  scoreVilain = bestCombo(vilainHand.concat(board))
  gagnant = compareCombos(scoreHero,scoreVilain)

  afficherResultat(gagnant, scoreHero, scoreVilain)

  // if (gagnant == scoreHero){
  //   document.getElementById("message_hero").innerHTML = "Tu as gagné";
  //   document.getElementById("message_vilain").innerHTML = "Tu as perdu";
  // }
  // else {
  //   document.getElementById("message_hero").innerHTML = "Tu as perdu";
  //   document.getElementById("message_vilain").innerHTML = "Tu as gagné";
  // }

}


