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
  
  })();


function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_z");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var tredLiteSponge = document.getElementById("tredLiteSponge");
    tredLiteSponge.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_aa");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var bubbleEze = document.getElementById("bubbleEze");
    bubbleEze.onclick = ShowLightBox;

}
    
    function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_bb");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var comfortZone = document.getElementById("comfortZone");
    comfortZone.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_d");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var liteBlack = document.getElementById("liteJrBlack");
    liteJrBlack.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_g");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cloudBlack = document.getElementById("cloudBlack");
    cloudBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_cc");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cushionComfort = document.getElementById("cushionComfort");
    cushionComfort.onclick = ShowLightBox;

}

/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


