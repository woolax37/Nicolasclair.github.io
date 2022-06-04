/*variables des 3 boutons */

let btnjouer = document.getElementById("bouton-jouer");
let btnrejouer = document.getElementById("bouton-rejouer");
let btngo = document.getElementById("bouton-go");

/*variables des resultats*/

let nbsaisie = document.getElementById("nbsaisie");
let totalresultats = document.getElementById("total-resultats");
let totalpropositions = document.getElementById("total-propositions");
let justeprix = document.getElementById("justeprix");
let merci = document.getElementById("merci");

/*variable du nombre aléatoire*/

let nbaleatoire = Math.floor(Math.random() * 6) + 1;
console.log(nbaleatoire)

/*variable du nombre de lancé*/

let compteur = 1;






/*fonction compteur / compteur commence à 1 et à 4 c'est perdu , en dessous la fontion calcul se lance */

btngo.addEventListener("click", tentative);

function tentative() {
  
  
  if (compteur == 4 ) {
    justeprix.textContent = " C'est perdu !!";
    nbsaisie.value = " ";
    desactive();

}else {
  
  calcul();
  compteur++
}
}
  
/*fonction calcul du jeu */

function calcul() {
  console.log( nbaleatoire );
  
  var valeursaisie = nbsaisie.value;
  

if (valeursaisie == nbaleatoire){
  
  totalresultats.textContent += valeursaisie + "  " ;  
  justeprix.textContent = " Vous avez deviné le nombre du : " + compteur + "éme lancé";
  nbsaisie.value = " ";
  
  desactive();

}else if (valeursaisie > 6 || valeursaisie < 1 ) {
  totalresultats.textContent += valeursaisie + "  " + " / " + "  "; 
    justeprix.textContent = "Relis les règles !";
    nbsaisie.value = " ";

}else if (valeursaisie < nbaleatoire ) {
  
    totalresultats.textContent += valeursaisie + "  " + " / " + "  "; 
    justeprix.textContent = "Votre nombre est trop petit.";
    nbsaisie.value = " ";
    

  }else {
  
    totalresultats.textContent += valeursaisie + "  " + " / " + "  ";      
    justeprix.textContent = "Votre nombre est trop grand.";
    nbsaisie.value = " ";
    
  }
  console.log("fin" + compteur );
  }
  

/*fonction  bouton disable quand game over ou quand gagner pour désactivé le bouton 'go'*/

function desactive() {

  btngo.style.visibility = "hidden";
  btnrejouer.style.visibility = "visible";
}

/*fonction  propositon qui affiche le texte uniquement au clique du bonton go */

btngo.addEventListener("click", proposition);
function proposition() {
  totalpropositions.textContent = " Vos Propositions : ";
}
