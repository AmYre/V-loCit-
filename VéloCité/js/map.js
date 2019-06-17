/*
Construction de l'objet carte :
La méthode initialiseMap nous permet d'afficher la carte avec les coordonés de Mulhouse et le layer graphique de notre choix.
La méthode initialiseStations nous permet d'abord de récupérer les données des stations de l'API. Que nous associons à une boucle forEach,
afin d'instancier plusieurs objets stations. Nous appliquons ensuite à ces nouveaux objets la méthode markers tel que féfinie dans la class Station.
La méthode listenVoile nous permet d'avertir l'utilisateur lorsque celui-ci tente une nouvelle réservation alors qu'une première est déjà en cours.
*/

var carte = {

    long : 47.7486,
    lat : 7.339280000000031,
    zoom : 14,
    maxZoom : 20,
    

    initialiseMap(){
        map = L.map('map').setView( [this.long, this.lat], this.zoom);
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {maxZoom:this.maxZoom}).addTo(map);
    },

    initialiseStations(){
        $.ajax("https://api.jcdecaux.com/vls/v1/stations?contract=Mulhouse&apiKey=e94ee61a85a6825595d93f3ee2c56310252bc369").done( function (datas) {
            
            datas.forEach( function (data) {

                var station = new Station (data);
                station.addMarker();
                    
            });
              
        })
    },

    listenVoile(){
        $(".voile").on("click", function(){

            $(".warning").fadeIn(500);
        });
    }

}

