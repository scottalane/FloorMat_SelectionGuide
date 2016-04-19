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

      //set up the plumbing for each line
    myFunction_revers_a_mat();
    myFunction_ni_rib();
    myFunction_waterwell();

    myFunction_fingertop();
    myFunction_vinyl_loop();

    myFunction_guardian_black();
    myFunction_guardian_red();
    myFunction_ridge_scraper();

  })();


function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_jj");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var reversAMat = document.getElementById("reversAMat");
    reversAMat.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_kk");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var niRib = document.getElementById("niRib");
    niRib.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_p");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var fingertop = document.getElementById("fingertop");
    fingertop.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_ll");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var vinylLoop = document.getElementById("vinylLoop");
    vinylLoop.onclick = ShowLightBox;

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

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_v");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var ridgeScraper = document.getElementById("ridgeScraper");
    ridgeScraper.onclick = ShowLightBox;

}

/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


