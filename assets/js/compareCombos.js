// import { isAFull } from "./isAFull";
// import { isAFlush } from "./isAFlush";
// import { isAPair } from "./isAPair";

/*
 * /!\ À faire à la fin, seul ou en groupe !
 * Les tableaux cards1 et cards2 contiennent 5 cartes. L'objectif est de retourner le tableau contenant le 
 * meilleur combos :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 */
function compareCombos(cards1, cards2) {
  let scoreCards1 = scoreCards(cards1)
  let scoreCards2 = scoreCards(cards2)

  if(scoreCards1 < scoreCards2) {
    return cards2
  } else {
    return cards1
  }
}

function scoreCards(cards) {
  if(isAFull(cards)) {
    return 4
  } else if(isAFlush(cards)) {
    return 3
  } else if (isAPair(cards)) {
    return 2
  } else {
    return 1
  }
}



//export { compareCombos };