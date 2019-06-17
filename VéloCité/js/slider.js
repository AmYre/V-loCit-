/* 
Construction de l'objet slider : 
La méthode defilDte prends la première image de la liste et la met à la fin, ce qui fait apparaitre la seconde image à sa place. 
La méthode defilGche fait l'inverse, c'est à dire prendre la dernière image de la liste et la mettre au début.
Ce qui nous donne respectivement, la possibilité de voir l'image suivante, et l'image précédente. 
*/

var slider = {

        images : ".slider",
        image : ".list-img",
        delay : 5000,
        fade : 1000,


    defilDte(){
        $(".slider").append($(".list-img").first());
    },
      
    defilGche(){
       $(`${this.images}`).prepend($(`${this.image}`).last());
    },

    play (){
        diapo = setInterval(this.defilDte, this.delay)
        $("#play-btn").hide();
        $("#pause-btn").fadeIn(this.fade);
    },
    
    manuel (){
        clearInterval(diapo); 
        $("#pause-btn").hide();
        $("#play-btn").fadeIn(this.fade);
    },

    listenSlider (){

        $("#chevron-dte").click(function(){ 
            slider.defilDte();  
            slider.manuel();
        }),
        
        $("#chevron-gche").click(function(){ 
            slider.defilGche(); 
            slider.manuel();
        }),
        
        $("#play-btn").click(function(){
            slider.play();
        }),
        
        $("#pause-btn").click(function(){
            slider.manuel();
        }),
        
        $(document).keydown(function(e) {
            if (e.keyCode == 39){
                slider.defilDte();
                slider.manuel();
            }
        
            else if (e.keyCode == 37){
                slider.defilGche();
                slider.manuel();
            }
        }),
        
        $(".slider").on("touchstart", function () {
            slider.defilDte();
            clearInterval(diapo); 
        })

    }
    
}


