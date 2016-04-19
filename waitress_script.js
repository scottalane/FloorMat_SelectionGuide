$( document ).ready(function() {
  WebFontConfig = {
    google: { families: [ 'Roboto+Slab:400,100,300,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    myFunction();
  
    myFunction_revers_a_mat_black();
    myFunction_ni_rib_solid();

    myFunction_ridge_scraper();
    myFunction_topdek_sr_red();

    myFunction_guardian_black();
    myFunction_guardian_red();


function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_gg");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var reversAMatBlack = document.getElementById("reversAMatBlack");
    reversAMatBlack.onclick = ShowLightBox;

}

function ShowLightBox(){
  //javascript way
    //var lb = document.getElementById("lightbox_window");
    //lb.hidden = false;

    //jquery way
    $('#lightbox_window').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window').fadeOut(500);

  }
//scott 4/12 functions for additional lightbox effects
function myFunction() {
    var lb = document.getElementById("lightbox_window_qq");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var niRibSolid = document.getElementById("niRibSolid");
    niRibSolid.onclick = ShowLightBox;

}
    
    function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_v");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var ridgeScraper = document.getElementById("ridgeScraper");
    ridgeScraper.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_dd");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var topdekSrBlack = document.getElementById("topdekSrBlack");
    topdekSrBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_f");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var guardianBlack = document.getElementById("guardianBlack");
    guardianBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_l");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var guardianRed = document.getElementById("guardianRed");
    guardianRed.onclick = ShowLightBox;

}

/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


