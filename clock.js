// setting angles to the numbers on clock html part
var set_numbers_angle = document.querySelectorAll(".number");
var deg = 30;
for (var i = 1; i <= 11; i++) {

    set_numbers_angle[i].style.transform = "rotate(" + deg + "deg" + ")";
    deg = deg + 30;
}






//_______________________________________________________

function setClock() {
    //get current time
    var timeNow = new Date();

    var Hours = timeNow.getHours();
    var Minutes = timeNow.getMinutes();
    var Seconds = timeNow.getSeconds();
    var a = 2 * Hours;

    //set current angles for hands
    // for every 12min---> Hour hand moves by 6deg
    //for every 60s---> Minute hand movies by 6deg
    var H_angle = (Hours * 360 / 12) + (6 * Minutes / 12);

    var M_angle = (Minutes * 360 / 60) + (6 * Seconds / 60);
    var S_angle = (Seconds * 360 / 60);


    //get hand elements
    var HH = document.querySelector(".H");
    var MH = document.querySelector(".M");
    var SH = document.querySelector(".S");

    //assign angles for rotation
    HH.style.transform = "rotate(" + H_angle + "deg" + ")";
    MH.style.transform = "rotate(" + M_angle + "deg" + ")";
    SH.style.transform = "rotate(" + S_angle + "deg" + ")";
}

//________________________________________________________________________
setInterval(setClock, 1000);