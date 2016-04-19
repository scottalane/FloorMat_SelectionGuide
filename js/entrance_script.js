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
  
    myFunction_catalina();
    myFunction_fingertop();
    myFunction_needle_rib();

    myFunction_waterwell();
    myFunction_chevron_rib();
    myFunction_machine_washable();
    myFunction_digi_print()

    myFunction_ridge_scraper();
    myFunction_camino_real_logo();
    myFunction_cocoa_brush();
  })();


function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_o");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var catalinaStandard = document.getElementById("catalinaStandard");
    catalinaStandard.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_p");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var fingertop = document.getElementById("fingertop");
    fingertop.onclick = ShowLightBox;

}
    
    function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_q");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var needleRib = document.getElementById("needleRib");
    needleRib.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_r");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var waterwell = document.getElementById("waterwell");
    waterwell.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_s");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var chevronRib = document.getElementById("chevronRib");
    chevronRib.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_t");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var machineWashable = document.getElementById("machineWashable");
    machineWashable.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_u");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var digiPrint = document.getElementById("digiPrint");
    digiPrint.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_w");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var caminoRealLogo = document.getElementById("caminoRealLogo");
    caminoRealLogo.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_x");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cocoaBrush = document.getElementById("cocoaBrush");
    cocoaBrush.onclick = ShowLightBox;

}
/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


