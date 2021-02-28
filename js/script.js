window.onload=main;
let canvas;
let ctx;
var grdCorps;
let etat_jeu = "Menu_principal";
let scoreCourant = 0;
let nbPommes=3;
let nbBombes=2;


let vXBombeMin= -3;
let vXBombeMax=3;
let vYBombeMax= 3;
let vYBombeMin = 0.9;
let vXPommeMin= -4;
let vXPommeMax=4;
let vYPommeMax= 3.5;
let vYPommeMin = 0.8;

let meilleurScore=0;
let spanMeilleurs ;
let spanScore ;
let id ;
let score_gameover;

 //ici on stocke les objets graphique du jeu
 let tableauDesBalles =[];

//programme principal
function main(){
  loadAssets(startGame);
  
}

function startGame(assetsLoaded){
  
  console.log("Page chargée! DOM Ready ! Toutes les ressources de la page sont utilisables : vidéos, images, polices...");

  
    if (localStorage.hiscore===undefined){
      localStorage.hiscore = meilleurScore;
    }
    spanMeilleurs = document.querySelector("#meilleurS"); 

    console.log(localStorage.hiscore);
    meilleurScore=parseInt(localStorage.hiscore);
    console.log(meilleurScore);
    spanMeilleurs.innerHTML = meilleurScore;
    

  
//On récupère grace à la "selector API" un pointeur sur le canvas
 
canvas = document.querySelector("#myCanvas")

spanScore = document.querySelector("#score");
 
//pour dessiner on a besoin de son contexte graphique, un objet qui 
//va permettre de dessiner ou de changer les propriétés du canvas
//(largeur du trait, couleur, repère)
 
ctx = canvas.getContext("2d");
assets = assetsLoaded;


assets.musique.play();
        //Herbe

//ctx.drawImage(assets.pelouse, 200,500,300,70);
/* ctx.fillStyle="green";
ctx.fillRect(-1400,250,3000,70);*/


timer(1000); // ici des secondes
 
//test de dessins
/*
ctx.fillStyle= "red";
ctx.fillRect(10,10,100,100);
 
ctx.fillStyle="green";
ctx.fillRect(200,50,50,100);
 
ctx.strokeStyle="orange";
ctx.lineWidth=10;
ctx.strokeRect(200,300,100,100)
*/
 
//console.log(monstre.donneTonNom());
requestAnimationFrame(animationLoop);

grdCorps = ctx.createLinearGradient(0, 26, 100,0);
              
 
//drawMonstre();

grdCorps.addColorStop(0, "blue"); 
grdCorps.addColorStop(0.5, "white");
grdCorps.addColorStop(1, "yellow"); 

//imer(300);
//creer des balles
//creerDesBalles(nbBalles);
//creerDesPommes(nbPommes);
//creerDesBombes(nbBombes);


//on ajoute dans ecouteur le clavier/souris sur le canvas
canvas.onmousedown = traiteMouseDown;
canvas.onmouseup = traiteMouseUp;
canvas.onmousemove = traiteMouseMove;

//canvas.addEventListener("mousedown", traiteMouseDown);


document.onkeydown = traiteKeyDown;
document.onkeyup = traiteKeyUp;


}




 
//animation à 60images/sec
function animationLoop(){
    //1 on efface le canvas
 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    switch(etat_jeu){
      case "Menu_principal":
        afficherMenuPrincipal();
        break;

      case "Jeu_en_cours":
        jeuEnCours();
        break;

      case "Game_over":
        finDuJeu();
        break;

    }
 
    //2 On dessine les objets
 
    //drawMonstre(monstre.x, monstre.y);

    

 
    
 
    //5 On demande au navigateur de rappeler la fonction 
    //animationLoop dans 1/68eme de seconde
 
    requestAnimationFrame(animationLoop);
 
}

//----------------------------------------//
//RANDOM DANS UN INTERVALLE
//----------------------------------------//

// On renvoie un nombre aléatoire entre une valeur min (incluse)
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function afficherMenuPrincipal(){
  ctx.save();

  ctx.fillStyle="Black";
  ctx.font = "80px Calibri ";
  ctx.fillText("Menu Principal", 200,100);

  ctx.fillStyle="Grey";
  ctx.font = "50px Calibri bold ";
  ctx.fillText("Règles du jeu : ", 200,180);
  ctx.font = "30px Calibri ";
  ctx.fillText("Vous devez battre le meilleur score en ramassant les pommes ", 200,240);
  ctx.fillText("dans votre petit panier en osier et éviter les bombes !  ", 200,280);

  ctx.fillStyle="Blue";
  ctx.font = "40px Calibri italic bold";
  ctx.fillText("Utilisez la flèche gauche ou droite du clavier pour vous déplacer ", 200,350);

  ctx.fillStyle="Black";
  ctx.font = "60px Calibri ";
  ctx.fillText("Cliquez pour jouer !", 200,450);


  nbPommes=3;
  nbBombes=2;


  vXBombeMin= -3;
  vXBombeMax=3;
  vYBombeMax= 3;
  vYBombeMin = 0.8;
  vXPommeMin= -4;
  vXPommeMax=4;
  vYPommeMax= 3.5;
  vYPommeMin = 0.8;
  tableauDesBalles=[];
  //creerDesBalles(nbBalles);
  creerDesPommes(nbPommes);
  creerDesBombes(nbBombes);
  
  ctx.restore();

}
function jeuEnCours(){
  
  monstre.draw(ctx);
  //timer(300);
  //id= setInterval(augmentediff, 4000);
  updateBalles();
  //timer(100); // ici des secondes

  //3 On déplace les objets
  monstre.move();
  
  
  
  //4 on peut faire autre chose(par exemple: détecter des collisions, ou prendre en compte le clavier, la souris, la manette de jeu)

  traiteCollisionsAvecBords();

}

function finDuJeu(){
  ctx.save();

  ctx.fillStyle="Black";
  ctx.font = "200px Calibri ";
  ctx.fillText("GAME OVER", 200,150);
  ctx.font = "100px Calibri ";
  ctx.fillText("Votre score : " + score_gameover, 200,280);

  ctx.fillStyle="White";

  ctx.font = "60px Calibri ";
  ctx.fillText("Cliquez pour rejouer !", 200,420);

  
  
  ctx.restore();

  nbPommes=3;
  nbBombes=2;
  vXBombeMin= -3;
  vXBombeMax=3;
  vYBombeMax= 3;
  vYBombeMin = 0.8;
  vXPommeMin= -4;
  vXPommeMax=4;
  vYPommeMax= 3.5;
  vYPommeMin = 0.8;
  tableauDesBalles=[];
  //creerDesBalles(nbBalles);
  creerDesPommes(nbPommes);
  creerDesBombes(nbBombes);


}



/*function traiteCollisionBalleAvecMonstre(b) {





    if (
      circRectsOverlap(
        monstre.x+20,
        monstre.y+308,
        monstre.l,
        monstre.h-60,
        b.x,
        b.y,
        b.rayon
      )
    ) {
      //console.log("COLLISION....");
      // on cherche l'index de la balle dans le tableau des balles
      let index = tableauDesBalles.indexOf(b);
      
      // pour supprimer un élément : on utilise la méthode splice(index, nbElementsASupprimer) sur le tableau
      
      tableauDesBalles.splice(index, 1);
      console.log(b.couleur);

      if (b.couleur == "#34c924") {

        //exemple d'affiche du down pour modifier le contenu html
        
        scoreCourant++;
        spanScore.innerHTML = scoreCourant;
        //faire une fonction qui détecte si c'est la dernière verte ou pas
  
        if (meilleurScore<scoreCourant){
          meilleurScore = scoreCourant;
          localStorage.hiscore = meilleurScore;
          spanMeilleurs.innerHTML = meilleurScore;
        }
      }
      else if (b.couleur=="black"){
        score_gameover = scoreCourant;
        scoreCourant=0;
        spanScore.innerHTML=scoreCourant;
        //assets.humbug.play();
        etat_jeu="Game_over";
  
      }
    
      
      
    }
  }*/

 


 function traiteCollisionBalleAvecMonstre(b) {

    if (
      rectsOverlap(
        monstre.x+25,
        monstre.y+318,
        monstre.l,
        monstre.h-60,
        b.x,
        b.y,
        b.h,
        b.h
      )
    ) {
      //console.log("COLLISION....");
      // on cherche l'index de la balle dans le tableau des balles
      let index = tableauDesBalles.indexOf(b);
      
      // pour supprimer un élément : on utilise la méthode splice(index, nbElementsASupprimer) sur le tableau
      
      tableauDesBalles.splice(index, 1);

      if (b.image == assets.pomme) {

        //exemple d'affiche du down pour modifier le contenu html
        
        scoreCourant++;
        spanScore.innerHTML = scoreCourant;
        assets.croc.play();
        //faire une fonction qui détecte si c'est la dernière verte ou pas
  
        if (meilleurScore<scoreCourant){
          meilleurScore = scoreCourant;
          localStorage.hiscore = meilleurScore;
          spanMeilleurs.innerHTML = meilleurScore;
        }
      }
      else if (b.image == assets.bombe){
        score_gameover = scoreCourant;
        assets.explosion.play();
        scoreCourant=0;
        spanScore.innerHTML=scoreCourant;
        etat_jeu="Game_over";
  
      }
    
      
      
    }
  }
  

  function updateBalles(){
  

    tableauDesBalles.forEach((b) => {

        b.draw(ctx);
        traiteCollisionsBalleAvecBords(b);
        b.move();
        traiteCollisionBalleAvecMonstre(b);
        


    });
}

function augmentediff() {
  
  //nbPommes= 3;
 // nbBombes=2;
  vYBombeMin=vYBombeMin+0.1;
  vYBombeMax=vYBombeMax+0.1;
  vXBombeMax=vXBombeMax+0.1;
  vXBombeMin=vXBombeMin-0.1;
  vYPommeMin=vYPommeMin+0.1;
  vYPommeMax=vYPommeMax+0.1;
  vXPommeMax=vXPommeMax+0.1;
  vXPommeMin=vXPommeMin-0.1;

  //tableauDesBalles=[];
  //creerDesBalles(nbBalles);
  creerDesPommes(nbPommes);
  creerDesBombes(nbBombes);

  
}


 function timer(m){
  let max = m;
  let sec = 0;

  let timer = setInterval(() => {
    sec++;
    if(sec % 2 === 0) {
      console.log(2);
      nbPommes=4;
      nbBombes=1;
      augmentediff();
    }
    
    if (sec % 7 === 0){
      console.log(6);
      nbPommes=3;
      nbBombes=2;
      augmentediff();
    }
    
    if (sec % 13 === 0){
      console.log(13);
      nbPommes=4;
      nbBombes=3;
      augmentediff();
    }
    if (sec === max) {
        console.log("Fini");
        clearInterval(timer);
    }

  }, 1000);
}



//fonction creer des balles :

/*function creerDesBalles(nb){
    let tabCouleurs = ["black", "#34c924"];

    for (let i=0; i<nb;i++){

        let x = 30+ Math.random()*canvas.width;
        let y = 0;//Math.random() * canvas.height;
        //let rayon = Math.random()*30;
        let rayon = getRandomArbitrary(minRayon,maxRayon);
        let indexCouleur = 0;
       // let indexCouleur = Math.floor(Math.random()*tabCouleurs.length);
       let nbVertes = Math.trunc(2/3 * nb);
        if(i<nbVertes ){
          
          indexCouleur = 1;

        }
        else{
          indexCouleur = 0;
        }
     
       let couleur = tabCouleurs[indexCouleur];
       let vx = getRandomArbitrary(vXBalleMin,vXBalleMax);
      let vy = getRandomArbitrary(vYBalleMin,vYBalleMax);
        //let vx= -5 + Math.random()*10;
       // let vy = -5 + Math.random()*10;

        let b= new Balle(x, y,rayon,couleur,vx, vy);

        //On ajoute la balle du tableau
        tableauDesBalles.push(b);
    }
}*/

function creerDesPommes(nb){

  for (let i=0; i<nb;i++){

      let x = Math.random()*canvas.width;
      let y = -1000;//Math.random() * canvas.height;
      let h =getRandomArbitrary(30,80);
      let vx = getRandomArbitrary(vXPommeMin,vXPommeMax);
      let vy = getRandomArbitrary(vYPommeMin,vYPommeMax);
      //let vx= -5 + Math.random()*10;
     // let vy = -5 + Math.random()*10;

      let b= new Pomme_Bombe(x, y,h,h,assets.pomme, vx, vy);

      //On ajoute la balle du tableau
      tableauDesBalles.push(b);
  }
}

function creerDesBombes(nb){

  for (let i=0; i<nb;i++){

      let x = Math.random()*canvas.width;
      let y = -1000;//Math.random() * canvas.height;
      let h = getRandomArbitrary(40,100);
      let vx = getRandomArbitrary(vXBombeMin,vXBombeMax);
      let vy = getRandomArbitrary(vYBombeMin,vYBombeMax);
      //let vx= -5 + Math.random()*10;
     // let vy = -5 + Math.random()*10;

      let b= new Pomme_Bombe(x, y,h,h,assets.bombe, vx, vy);

      //On ajoute la balle du tableau
      tableauDesBalles.push(b);
  }
}



//Pour mon jeu : 
//Faire collision avec les bras de mon bonhomme OK
//Faire des boules vertes (pommes) et noires (bombes) OK
// si mon bonhomme touche des vertes il gagne des points OK 
// sinon si c'est des bombes il a perdu ok
//Les boules viennent seulement du ciel mais avec des directions différentes OK
//mettre les pommes plus vertes OK
//ecran d'acceuil regles ect ok
//timeur pour rajouter une balle toute les 15s ok
//remplaczer les balles vertes et noires par des images de pommes ou bombes ok
//mettre un texte meilleur score  OK
//qui garde le meilleur score en mémoire et si il est battu : feu d'artifice ok

//gerer timer avec difficulté qui rajoute ok 
//image de fruits et bombes + image panier en osier dans mes bras ok
//musique de fond + musique de bombe et musique game over et musique cool quand on ramasse des fruits
//ecrire les regles dans le menu principal ok
//afficher le score dans game over ok