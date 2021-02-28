//let mousePos = {

//};

function traiteMouseDown(event){
 console.log("souris clickée dans le canvas " + event.button);
   switch(etat_jeu){
       case "Menu_principal":
           etat_jeu="Jeu_en_cours";
           break;
        case "Game_over":
            etat_jeu="Jeu_en_cours";
            break;
   }
}
function traiteMouseUp(event){
    //console.log("souris relachée dans le canvas " + event.button);
}
function traiteMouseMove(event){
    //console.log("souris bouge dans le canvas");
    
    //var rect = canvas.getBoundingClientRect();
   // mousePos.x=event.clientX -rect.left;
    //mousePos.y=event.clientY - rect.top;

    //monstre.setPos(mousePos.x, mousePos.y) ;

}
function traiteKeyDown(event){
    //console.log("touche enfoncée " + event.key);
    switch (event.key){
        case "ArrowLeft":
            monstre.vitessex = -10;
            break;
        case "ArrowRight":
            monstre.vitessex=+10;
            break;
        case "ArrowUp": //ne marche pas car j'ai mis un translate sur y de 300 pour qu'il reste sur mon herbe
           // monstre.vitessey=-4;
            break;
        case "ArrowDown"://idem
           // monstre.vitessey=+4;
            break;
    }
}
function traiteKeyUp(event){
    console.log("touche relachée " + event.key);
    monstre.vitessex=0;
    //monstre.vitessey=0; //inutile car mon y est bloqué sur l'herbe

}