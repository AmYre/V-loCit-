/*
Construction de la classe Station :
Celle-ci nous permettra d'instancier plusieurs objets station avec des propriétés et une méthode prédéfinie. 
Cette méthode addMarker nous permet de dissocier marqueurs verts et rouges en fonction de l'état de la station et de la disponibilité des vélos.
Mais aussi d'afficher les marqueurs sur la carte, et d'associer un listener "click"  pour transmettre les informations sur chaque station à l'utilisateur.
*/

class Station {
    constructor (station) {
        this.name = station.name;
        this.position = station.position
        this.status = station.status;
        this.address = station.address;
        this.stands = station.available_bike_stands;
        this.bikes = station.available_bikes;

    }

    addMarker(){
        if (this.status == "OPEN" || this.available_bikes !== 0){
           var marqueur = L.marker(this.position, {icon:L.icon({ iconUrl:"img/green.jpg", iconSize:[35, 35] }), opacity:0.8}).addTo(map);
           marqueur.on("click", function(){ this.addInfo() }.bind(this));
        }

        else {
            marqueur = L.marker(this.position, {icon:L.icon({ iconUrl:"img/red.jpg", iconSize:[30, 30] }), opacity:0.8}).addTo(map);
            marqueur.on("click", function(){ this.addAlert() }.bind(this));
        }
    }

    addInfo() {   
        $(".p-name").replaceWith(`<p class="p-name">${this.name.slice(4)}</p>`);
        $(".p-address").replaceWith(`<p class="p-address"> ${this.address}</p>`);
        sessionStorage.setItem("address", this.name.slice(4));
        $(".station-stored").html(this.name.slice(4)); 
        $(".p-bikes").replaceWith(` <p class="p-bikes">${this.bikes}</p>`);
        $(".p-stands").replaceWith(` <p class="p-stands">${this.stands}</p>`);
        
        $(".form").fadeIn(500);
        $(".impossible").fadeOut(300);
            
    }
      
    addAlert() {
        $(".impossible").fadeIn(500);
        $(".form").fadeOut(300);
    }
}