/*
Construction de l'objet timer :
Le première propriété est la valeure "data" de l'objet canvas lorsque rien n'est dessiné dessus. 
Cette valeure "canvas vide" nous servira de point de vérification et de comparaison pour s'assurer qu'une signature à bien été réalisée par l'utilisateur.
La propriété count permet de définir une valeure de décompte, dans notre cas, 1200ms pour 20 minutes.
Ensuite trois méthodes viennent définir la logique de notre timer.
  - Une méthode countdown qui vient décrémenter count. 
  - Une méthode convert qui transforme le format "milisencondes" de count en un format plus conventionnel  "minutes : secondes". 
  - Et une méthode timerEnd qui vient arrêter la decrémenation et remettre le compteur à sa valeur de départ.
Enfin, cette logique est mise en oeuvre par la méthode reservation avec la transition entre les différente étapes de la réservation.
*/
var timeRecovery = sessionStorage.getItem ("timer");

var timer = {
    
    dataCanvasVide : `data:image/png;base64,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`,
    count : 1200,
    

    recover (){
        $(window).on('beforeunload', function(){
            if (timer.count !== 1200){
                sessionStorage.setItem ("timer", timer.count);
            }
        });
    },

    countdown (){
        interval = setInterval( ()=> {
            this.count--;
            timeRecovery--;

            if(this.count == 0) timer.timerEnd();
            
            else if(sessionStorage.getItem("timer") !== null)  {
               this.count = timeRecovery;
                $("#timer").html(this.convert(this.count));
            }

            else
            {
                $("#timer").html(this.convert(this.count));
            }
        }, 1000);
    }, 

    convert (s){
        let min = Math.floor(s/60);
        let sec = s % 60;
        return ` ${min} : ${sec}` ;
    },

    timerEnd (){
        clearInterval(interval);
        this.count = 1200;
    },

    reservation () {

        if(frame.toDataURL() !== this.dataCanvasVide) {
            
            $(".confirmation").fadeIn(500);
            $(".signature").hide();
            $(".form").fadeOut(300);
            $(".voile").fadeIn(500);
    
            this.countdown();
            this.showTimer();
    
            setTimeout(function () {
                this.timerEnd();
                this.annulation();
            }.bind(this), 1200000);
    
        }
    
        else {
            $(".sign-title").css({"animation": "toggle 2s steps(9)", "color": "red"});
        }
    
        $(".back-btn").click( function() {
            this.timerEnd();
            this.annulation();
            $(".warning").fadeOut(300);
            $(".voile").fadeOut(300);
            sessionStorage.clear();
        }.bind(this));
    
    },

    showTimer (){
        $(".signature").fadeOut(300);
        $(".confirmation").fadeIn(500);
        $("#timer").fadeIn(5000);
    },
    
    annulation() {
        $(".signature").fadeOut(300);
        $(".confirmation").fadeOut(300);
        $("#timer").fadeOut(300);
        $(".form").fadeOut(300);
        $(".voile").fadeOut(300);
        $(".warning").fadeOut(300);
        $(".p-annulation").fadeIn(500);
        $(".sign-title").css({"animation": "", "color": ""});
        $(".user-title").css({"animation": "", "color": ""});
        
        
        setTimeout( function(){
            $("#resa").fadeOut(300);
            $(".footer").fadeOut(300);
            $(".p-annulation").fadeOut(300);
            
        }, 2000)
    },

    listenValButton() {
        $("#val-btn").on("click", function() {
            timer.reservation()
        });
    }

};