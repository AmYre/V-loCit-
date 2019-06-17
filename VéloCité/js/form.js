/*
Construction de l'objet form :
Une méthode addValue permet de pré-remplir les formulaires, en ajoutant l'attribut "value" à nos deux imputs avec comme valeur les items stockés dans le localStorage.
Une méthode checkForm permet de nous assurer que les inputs sont bien remplis.
Autrement, une animation vient rappeler à l'utilisateur qu'il faut préàlablement remplir le formulaire.
*/

var form = {

    nom : $("#nom"),
    prenom : $("#prenom"),

    
    checkForm(){    

        if (this.nom.val() !== "" & this.prenom.val() !== "" ){
            
            localStorage.setItem("name", this.nom.val());
            localStorage.setItem("firstName", this.prenom.val());
            $(".user-stored").html(this.prenom.val());
            $("#resa").fadeIn(500);
            $(".signature").fadeIn(500);
            $(".form").fadeOut(300);
            $(".footer").fadeIn(1000);
    
        }
            
         else {
                $(".user-title").css({"animation": "toggle 2s steps(9)", "color": "red"});
        }
    },

    addValue(){
        
            this.nom.attr("value", localStorage.getItem("name"));
            this.prenom.attr("value", localStorage.getItem("firstName"));

    },

    listenForm() {

        $(".info-btn").on("click", function(){ 
            form.checkForm();
        });
    }


}