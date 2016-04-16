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

//to show the lightbox pictures of products
function myFunction() {
    var lb = document.getElementById("lightbox_window_a");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var topdekJrBlack = document.getElementById("topdekJrBlack");
    topdekJrBlack.onclick = ShowLightBox;

}

function ShowLightBox(){
  //javascript way
    //var lb = document.getElementById("lightbox_window");
    //lb.hidden = false;

    //jquery way
    $('#lightbox_window_a').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Would you like to send this to a customer?");
    
    $('#lightbox_window_a').fadeOut(500);

  }
//scott 4/12 functions for additional lightbox effects
function myFunction() {
    var lb = document.getElementById("lightbox_window_b");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var primablack = document.getElementById("primaBlack");
    primaBlack.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_b').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window_b').fadeOut(500);

  }

    function myFunction() {
    var lb = document.getElementById("lightbox_window_c");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var topdekSrBlack = document.getElementById("topdekSrBlack");
    topdekSrBlack.onclick = ShowLightBox;

}


function ShowLightBox(){

    $('#lightbox_window_c').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window_c').fadeOut(500);

  }

function myFunction() {
    var lb = document.getElementById("lightbox_window_d");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var liteBlack = document.getElementById("liteBlack");
    liteBlack.onclick = ShowLightBox;

}


function ShowLightBox(){

    $('#lightbox_window_d').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window_d').fadeOut(500);

  }

function myFunction() {
    var lb = document.getElementById("lightbox_window_e");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var tuffdekBlack = document.getElementById("tuffdekBlack");
    tuffdekBlack.onclick = ShowLightBox;

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
    var lb = document.getElementById("lightbox_window_g");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cloudBlack = document.getElementById("cloudBlack");
    cloudBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_h");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var deluxeBlack = document.getElementById("deluxeBlack");
    deluxeBlack.onclick = ShowLightBox;

}

function myFunction() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_i");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var duralokBlack = document.getElementById("duralokBlack");
    duralokBlack.onclick = ShowLightBox;

}

/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


