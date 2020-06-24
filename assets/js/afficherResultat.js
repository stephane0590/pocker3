function messageCombo(cards) {
    let bests
  
    if(isAFull(cards)) {
      bests = "full"
    } else if(isAFlush(cards)) {
      bests = "couleur"
    } else if(isAPair(cards)) {
      bests = "paire"
    } else {
      bests = "hauteur"
    }
    return bests
  }

function afficherResultat(gagnant, scoreHero, scoreVilain){
  
    if (gagnant == scoreHero){
        document.getElementById("message_hero").innerHTML = "Tu as gagné avec " + messageCombo(scoreHero);
        document.getElementById("message_vilain").innerHTML = "Tu as perdu avec " + messageCombo(scoreVilain);
    }
  else {
    document.getElementById("message_hero").innerHTML = "Tu as perdu avec " + messageCombo(scoreHero);
    document.getElementById("message_vilain").innerHTML = "Tu as gagné avec " + messageCombo(scoreVilain);
    }
}