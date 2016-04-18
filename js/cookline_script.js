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
  /*this is the timed response prompting the user to Please make a selection-->*/

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_j");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var tuffdekRed = document.getElementById("tuffdekRed");
    tuffdekRed.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_k");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var duralokRed = document.getElementById("duralokRed");
    duralokRed.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_f");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var tGuardianBlack = document.getElementById("guardianBlack");
    guardianBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_m");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var deluxeRed = document.getElementById("deluxeRed");
    deluxeRed.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_n");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cloudRed = document.getElementById("cloudRed");
    cloudRed.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_j");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var tuffdekRed = document.getElementById("tuffdekRed");
    tuffdekRed.onclick = ShowLightBox;

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

    
/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});
