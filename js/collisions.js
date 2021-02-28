/*function traiteCollisionsBalleAvecBords(b){
 
    if((b.x +b.rayon)> canvas.width){
        //console.log("COLLISION A DROITE");
        //Truc à savoir: pour ne pas que l'objet donne l'impression d'aller plus loin que le bord de l'écran
        //
        b.x=canvas.width - b.rayon;
        b.vitessex = -b.vitessex;
 
    }
 
    else if((b.x -b.rayon) <0){
        //console.log("COLLISION A GAUCHE");
        b.x=b.rayon; //point de contact
        b.vitessex = -b.vitessex;
 
    }
 
    if((b.y-b.rayon)<0){
        b.y=b.rayon;
        b.vitessey= -b.vitessey;
 
    }
    /*else if ((b.y + b.rayon )> canvas.height){
        b.y=canvas.height - b.rayon;
 
        b.vitessey=-b.vitessey;
 
    }
}*/
 
//Collision objets bords
function traiteCollisionsBalleAvecBords(b) {
    if((b.x +b.l)> canvas.width){
        //console.log("COLLISION A DROITE");
        //Truc à savoir: pour ne pas que l'objet donne l'impression d'aller plus loin que le bord de l'écran
        //
        b.x=canvas.width - b.l;
        b.vitessex = -b.vitessex;
 
    }
 
    else if((b.x -b.l) <0){
        //console.log("COLLISION A GAUCHE");
        b.x=b.l; //point de contact
        b.vitessex = -b.vitessex;
 
    }
 
    if((b.y-b.h)<0){
        b.y=b.h;
        b.vitessey= -b.vitessey;
 
    }
 
    
   
  }
  




function traiteCollisionsAvecBords(){
 
    if(monstre.x > canvas.width -monstre.l){
        //console.log("COLLISION A DROITE");
        //Truc à savoir: pour ne pas que l'objet donne l'impression d'aller plus loin que le bord de l'écran
        //
        monstre.x=canvas.width - monstre.l;
        monstre.vitessex = -monstre.vitessex;
 
    }
 
    else if(monstre.x <0){
        //console.log("COLLISION A GAUCHE");
        monstre.x=0; //point de contact
        monstre.vitessex = -monstre.vitessex;
 
    }
 
    if(monstre.y<0){
        monstre.y=0;
        monstre.vitessey= -monstre.vitessey;
 
    }
    else if (monstre.y + monstre.h > canvas.height){
        monstre.y=canvas.height - monstre.h;
 
        monstre.vitessey=-monstre.vitessey;
 
    }
}

// Fonctions génériques de collision cercle-cercle, rectangle-rectangle et cercle-rectangle
// pour les curieux, polygone-polygone convexes existe aussi voir algorithme SAT
// (Separation Axis Theorem)
// Collisions between rectangle and circle
// Collisions between aligned rectangles
function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
  }
  
  function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
   
    if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
       return false; // No horizontal axis projection overlap
    if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
       return false; // No vertical axis projection overlap
    return true; // If previous tests failed, then both axis projections
                 // overlap and the rectangles intersect
  }
  
  function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
     var testX=cx;
     var testY=cy;
     if (testX < x0) testX=x0;
     if (testX > (x0+w0)) testX=(x0+w0);
     if (testY < y0) testY=y0;
     if (testY > (y0+h0)) testY=(y0+h0);
     return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
  }