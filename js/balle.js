//Exemple de classe
/*class Balle{
    x;
    y;
    couleur="black";
    vitessex;
    vitessey;
    rayon;

    constructor(x,y,rayon, couleur, vitessex,vitessey){
        this.x=x;
        this.y=y;
        if(rayon) this.rayon=rayon;
        if(couleur) this.couleur=couleur;
        if(vitessex) this.vitessex=vitessex;
        if(vitessey) this.vitessey=vitessey;
    }
    draw(ctx){
        ctx.save();

        //dessin d'un cercle
        ctx.beginPath();
        //cx, cy, rayon, angle depart, angle arrivée en radians
        ctx.arc(this.x,this.y,this.rayon,0,2*Math.PI);
        //on donne l'ordre d'afficher le chemin
        //ctx/stroke(); //en fil de fer
        ctx.fillStyle=this.couleur;
        ctx.fill();
        ctx.restore();
    }
    move(){
        this.x+=this.vitessex;
        this.y+=this.vitessey;
    }
}*/
class Pomme_Bombe{
    x;
    y;
    l;
    h;
    image;
    vitessex;
    vitessey;
    

    constructor(x,y,l,h, image, vitessex,vitessey){
        this.x=x;
        this.y=y;
        this.l = l;
        this.h = h;
        this.image = image;
        if(vitessex) this.vitessex=vitessex;
        if(vitessey) this.vitessey=vitessey;
    }
    draw(ctx){
        ctx.save();

        ctx.drawImage(this.image, this.x, this.y, this.l, this.h);

        ctx.restore();
    }
    move(){
        this.x+=this.vitessex;
        this.y+=this.vitessey;
    }

}

