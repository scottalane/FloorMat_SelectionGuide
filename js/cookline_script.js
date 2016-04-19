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
    myFunction_tuffdek_red();

    myFunction_duralok_red();
    myFunction_guardian_red();
    myFunction_guardian_black();

    myFunction_deluxe_red();
    myFunction_cloud_red();
    myFunction_cloud_black();
  
  })();
/*
// VIP LITE BLACK - SHOW & HIDE
function myFunction_lite_black() {
    var lb = document.getElementById("lightbox_window_d");
    lb.hidden = true;
    lb.onclick = function(){
 
        $('#lightbox_window_d').fadeOut(500);

    };

    var liteBlack = document.getElementById("liteBlack");
    liteBlack.onclick = function (){

          $('#lightbox_window_d').fadeIn(500);

    };

}

function ShowLightBox(){

    $('#lightbox_window_d').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_d').fadeOut(500);

  }
*/


// VIP TUFFDEK RED - SHOW & HIDE
function myFunction_tuffdek_red() {

    var lb = document.getElementById("lightbox_window_j");
    lb.hidden = true;
    lb.onclick = HideLightBox;

   $('#lightbox_window_j').fadeOut(500);

    };

    var tuffdekRed = document.getElementById("TuffdekRed");
    tuffdekRed.onclick = function (){

          $('#lightbox_window_j').fadeIn(500);

    };
}

function ShowLightBox(){

    $('#lightbox_window_j').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_j').fadeOut(500);

  }

// VIP DURALOK RED - SHOW & HIDE
function myFunction_duralok_red() {

    var lb = document.getElementById("lightbox_window_k");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var duralokRed = document.getElementById("duralokRed");
    duralokRed.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_k').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_k').fadeOut(500);

  }

// VIP GUARDIAN RED - SHOW & HIDE
function myFunction_guardian_red() {

    var lb = document.getElementById("lightbox_window_l");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var guardianRed = document.getElementById("guardianRed");
    guardianRed.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_l').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_l').fadeOut(500);

  }

// VIP VIP DELUXE RED - SHOW & HIDE
function myFunction_guardian_black() {

    var lb = document.getElementById("lightbox_window_f");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var guardianBlack = document.getElementById("guardianBlack");
    guardianBlack.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_f').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_f').fadeOut(500);

  }

// VIP CLOUD RED - SHOW & HIDE
function myFunction_deluxe_red() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_m");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var deluxeRed = document.getElementById("deluxeRed");
    deluxeRed.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_m').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_m').fadeOut(500);

  }

// VIP CLOUD BLACK - SHOW & HIDE
function myFunction_cloud_red() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_n");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cloudRed = document.getElementById("cloudRed");
    cloudRed.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_n').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_n').fadeOut(500);

  }

function myFunction_cloud_black() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_g");
    lb.hidden = true;
    lb.onclick = HideLightBox;

    var cloudBlack = document.getElementById("cloudBlack");
    cloudBlack.onclick = ShowLightBox;

}

function ShowLightBox(){

    $('#lightbox_window_g').fadeIn(500);

  }

  function HideLightBox(){

    //var result = prompt("Enter your email below");
    
    $('#lightbox_window_g').fadeOut(500);

  }
    
/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});
