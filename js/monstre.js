let monstre ={
    x:50,
    y:50,
    l:180,
    h:100,
    vitessex:0,
    vitessey:0,
    xrect:-30,
    yrect:125,
    lrect:160,
    hrect:-40,

 
    //POur une méthode : "() =>" plutot que "function()"
    //ou pas en fait, pk ?
 
    donneTonNom: function() {
        return "Je m'appelle Ines, et suis en x=" +this.x +"y=" + this.y;
 
    },
 
    draw: function(ctx) {
 
        //bonne pratique : sauver le context courant
    //couleur courante, taille du trait etc..
    //avant de modifier ou dessiner qql chose dans el contexte
    ctx.save();
 
    ctx.translate(this.x+40,this.y+235);
    //ctx.rotate(0.9);
    var centerX = 50;
    var centerY = 50;
    var radius = 55;
    ctx.beginPath();
    // Add to the path a full circle (from 0 to 2PI)
    ctx.arc(centerX, centerY, radius, 0, 2*Math.PI, false);
    // With path drawing you can change the context
    // properties until a call to stroke() or fill() is performed
    ctx.fillStyle = "Blue";
    // add shadows before drawing the filled circle
    addShadows();
    // Draws the filled circle in blue
    ctx.fill();
    // Prepare for the outline
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    // draws the path (the circle) AGAIN, this
    // time in wireframe
    ctx.stroke();
    //ctx.stroke();
        
        //yeux
        ctx.fillStyle="yellow";
        ctx.fillRect(20,20,10,10);
        ctx.fillRect(70,20,10,10);

        //bouche
        ctx.fillRect(20,65,64,20);

        //dents
        ctx.fillStyle="white";
        ctx.fillRect(22,65,7,7);
        ctx.fillRect(35,65,7,7);
        ctx.fillRect(47,65,7,7);
        ctx.fillRect(60,65,7,7);
        ctx.fillRect(72,65,7,7);

        ctx.fillRect(22,77,7,7);
        ctx.fillRect(35,77,7,7);
        ctx.fillRect(47,77,7,7);
        ctx.fillRect(60,77,7,7);
        ctx.fillRect(72,77,7,7);

        //corps
        ctx.fillStyle=grdCorps;
        ctx.fillRect(25,100,50,50);

       //ctx.fillStyle=grdCorps;
        ctx.fillRect(12,150,75,50);

        //bras

        ctx.fillRect(130,135,10,-50);
        ctx.fillRect(-40,125,65,10);
        ctx.fillRect(75,125,65,10);
        ctx.fillRect(-40,135,10,-50);



        //jambes
        ctx.fillStyle="yellow";
        ctx.fillRect(25,200,15,50);
        ctx.fillRect(14,240,25,10);
        ctx.fillRect(60,200,15,50);
        ctx.fillRect(60,240,26,10);


        //collision dans mes bras
        ctx.fillStyle="transparent";
        ctx.fillRect(this.xrect,this.yrect,this.lrect,this.hrect);

        //panier en osier dans mes bras
        ctx.drawImage(assets.panier, this.xrect-6,this.yrect+18,this.lrect+10,this.hrect -18);

    //On restaure le contexte
 
    ctx.restore();
 
    },

    setPos : function(x,y){
        this.x=x - l/2;
        this.y = y -h/2;
    },
 
    move: function(){
 
        this.x += this.vitessex;
        this.y += this.vitessey; 
    }
 
};


function addShadows() {
    ctx.shadowColor = "black"; // color
    ctx.shadowBlur = 18;      // blur level
    ctx.shadowOffsetX = 10;   // horizontal offset
    ctx.shadowOffsetY = 7;   // vertical offset
}
 