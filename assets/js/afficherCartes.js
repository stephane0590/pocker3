//création des variables pour l'id des cartes
var cart_hero_1 = document.getElementById('cart_hero_1')
var cart_hero_2 = document.getElementById('cart_hero_2')
var cart_vilain_1 = document.getElementById('cart_vilain_1')
var cart_vilain_2 = document.getElementById('cart_vilain_2')
var cart_tapis_1 = document.getElementById('cart_tapis_1')
var cart_tapis_2 = document.getElementById('cart_tapis_2')
var cart_tapis_3 = document.getElementById('cart_tapis_3')
var cart_tapis_4 = document.getElementById('cart_tapis_4')
var cart_tapis_5 = document.getElementById('cart_tapis_5')


function afficheCarte(heroHand, vilainHand){
    cart_hero_1.src = "assets/img/cards/" + heroHand[0] + ".png"
    cart_hero_2.src = "assets/img/cards/" + heroHand[1] + ".png"
    cart_vilain_1.src = "assets/img/cards/" + vilainHand[0] + ".png"
    cart_vilain_2.src = "assets/img/cards/" + vilainHand[1] + ".png"
    cart_tapis_1.src = "assets/img/cards/" + board[0] + ".png"
    cart_tapis_2.src = "assets/img/cards/" + board[1] + ".png"
    cart_tapis_3.src = "assets/img/cards/" + board[2] + ".png"
    cart_tapis_4.src = "assets/img/cards/" + board[3] + ".png"
    cart_tapis_5.src = "assets/img/cards/" + board[4] + ".png"
}