$(function() {

    

/********SECTIONS CACHEES************************************/

    hideSections();


/********SECTION SLIDER**************************************/
    
    slider.play();

    slider.listenSlider();
    

/*****SECTION MAP********************************************/

    carte.initialiseMap();

    carte.initialiseStations();

    carte.listenVoile();


/******SECTION FORMULAIRE************************************/

    form.addValue();

    form.listenForm();


/******SECTION CANVAS****************************************/

    canvas.listenCanvas();


/******SECTION TIMER*****************************************/
    
    timer.listenValButton();
    timer.recover();

});
