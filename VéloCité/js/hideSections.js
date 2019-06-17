/*
Ici les différents éléments non visible par l'utilisateur sont "hide" afin de pouvoir les "fadIn" plus tard et rendre leur apparition plus douce.
*/

function hideSections (){
    if (sessionStorage.getItem("timer") !== null) {
        $(".confirmation").show();
        $(".voile").show();

        $(".user-stored").html(localStorage.getItem("firstName"));
        $(".station-stored").html(sessionStorage.getItem("address"));
        timer.countdown();
        timer.showTimer();
        setTimeout(function () {
            timer.timerEnd();
            timer.annulation();
        }, timeRecovery * 1000);

        $(".signature").hide();
        $(".form").hide();
        $(".p-annulation").hide();
        $(".form").hide(); 
        $(".warning").hide();
        $(".impossible").hide();

        $(".back-btn").click( function() {
            timer.timerEnd();
            timer.annulation();
            $(".warning").fadeOut(300);
            $(".voile").fadeOut(300);
            sessionStorage.clear();
        });
        
    }

    else{
    $("#resa").hide();
    $(".signature").hide();
    $(".confirmation").hide();
    $("#timer").hide();
    $(".p-annulation").hide();
    $(".form").hide();
    $(".footer").hide(); 
    $(".warning").hide();
    $(".impossible").hide();
    $(".voile").hide();
    }
}