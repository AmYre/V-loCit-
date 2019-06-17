/*
Construction de l'objet canvas :
La logique recherchée est "je pose mon crayon je peux dessiner, je lève mon crayon je ne dessine plus". 
A la pression maintenue du clique, la propriété drawing devient true pour permettre le dessin.
Lorsque drawing renvoie true, la méthode draw permet alors le dessin au mouvement de la souris avec lineTo et stroke.
Et au relachement du clique la méthode draw ne retourne plus les méthodes du canvas car la variable drawing devient false. Plus de dessin possible.
*/

//Déclarartion des variables : frame et context, pour rendre le canvas opérable.

var frame = $("#canvas").get(0);
var context = frame.getContext('2d');

var canvas = {
        
    drawing : false,

    clear () {
        context.clearRect(0, 0, frame.width, frame.height)
    },

    start (){
        this.drawing = true;
    },

    finish (){
        this.drawing = false;
        context.beginPath();
    },

    draw (e) {
        
        if(!this.drawing) return;
        context.lineWidth = 4;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = "rgba(50, 150, 200 , 0.5)";
        context.shadowBlur = 2;
        context.shadowColor = "rgba(0, 0, 0 , 0.1)";
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;

        context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        context.stroke(); 
    },

    drawTouch (e) {

        if(!this.drawing) return;
        context.lineWidth = 4;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.strokeStyle = "rgba(50, 150, 200 , 0.5)";
        context.shadowBlur = 2;
        context.shadowColor = "rgba(0, 0, 0 , 0.1)";
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 10;
    
        context.lineTo(e.targetTouches[0].pageX - this.offsetLeft, e.targetTouches[0].pageY - this.offsetTop);
        context.stroke(); 
    },


    listenCanvas () {
        $("#canvas").on("mousemove", canvas.draw);
        $("#canvas").on("mousedown", canvas.start);
        $("#canvas").on("mouseup", canvas.finish);
        $("#canvas").on("touchmove", canvas.drawTouch);
        $("#canvas").on("touchstart", canvas.start);
        $("#canvas").on("touchend", canvas.finish);

        $('#canvas').on("scroll touchmove mousewheel", function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        $(".back-btn").on("click", canvas.clear);
        $("#annul-btn").on("click", canvas.clear);
    }


}
