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

    //set up the plumbing for each line
    myFunction_topdek_jr_black();
    myFunction_prima_black();
    myFunction_topdek_jr_black();
    myFunction_lite_black();
    myFunction_tuffdek_black();
    myFunction_guardian_black();
    myFunction_cloud_black();
    myFunction_deluxe_black();
    myFunction_duralock_black();
  
  })();

//OLD CODE BELOW - FIRST ATTEMPT
/*
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

   // var result = prompt("Would you like to send this to a customer?");
    
    $('#lightbox_window_a').fadeOut(500);

  }
*/

// VIP TOPDEK JR BLACK SHOW & HIDE
function myFunction_topdek_jr_black() {
    var lb = document.getElementById("lightbox_window_a");
    lb.hidden = true;
    lb.onclick = function(){

        //var result = prompt("Enter your email below");
        
        $('#lightbox_window_a').fadeOut(500);

    };

    var topdekJrBlack = document.getElementById("topdekJrBlack");
    topdekJrBlack.onclick = function (){

          $('#lightbox_window_a').fadeIn(500);

    };

}

// VIP PRIMA - BLACK SHOW & HIDE
function myFunction_prima_black() {
    //alert("I am now in JS land. Code me up!");
    var lb = document.getElementById("lightbox_window_b");
    lb.hidden = true;
    lb.onclick = function (){
    
        $('#lightbox_window_b').fadeOut(500);

    };

    var primaBlack = document.getElementById("primaBlack");
    primaBlack.onclick = function (){

         $('#lightbox_window_b').fadeIn(500);

    };

}

// VIP TOPDEK SR BLACK - SHOW & HIDE
function myFunction_topdek_sr_black() {
    var lb = document.getElementById("lightbox_window_c");
    lb.hidden = true;
    lb.onclick = function (){
    
        $('#lightbox_window_c').fadeOut(500);

    };

    var topdekSrBlack = document.getElementById("topdekSrBlack");
    topdekSrBlack.onclick = function (){

         $('#lightbox_window_c').fadeIn(500);

    };

}
/*
function ShowLightBox(){

    $('#lightbox_window_c').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window_c').fadeOut(500);

  }
*/

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

// VIP TUFFDEK BLACK - SHOW & HIDE
function myFunction_tuffdek_black() {
    var lb = document.getElementById("lightbox_window_e");
    lb.hidden = true;
    lb.onclick = function(){
 
        $('#lightbox_window_e').fadeOut(500);

    };

    var tuffdekBlack = document.getElementById("tuffdekBlack");
    tuffdekBlack.onclick = function (){

          $('#lightbox_window_e').fadeIn(500);

    };

}

// VIP GUARDIAN BLACK - SHOW & HIDE
function myFunction_guardian_black() {
    var lb = document.getElementById("lightbox_window_f");
    lb.hidden = true;
    lb.onclick = function (){
    
        $('#lightbox_window_f').fadeOut(500);

    };

    var guardianBlack = document.getElementById("guardianBlack");
    guardianBlack.onclick = function (){

         $('#lightbox_window_f').fadeIn(500);

    };

}

// VIP BLACK CLOUD BLACK - SHOW & HIDE
function myFunction_cloud_black() {
    var lb = document.getElementById("lightbox_window_g");
    lb.hidden = true;
    lb.onclick = function (){
    
        $('#lightbox_window_g').fadeOut(500);

    };

    var cloudBlack = document.getElementById("cloudBlack");
    cloudBlack.onclick = function (){

         $('#lightbox_window_g').fadeIn(500);

    };

}

// VIP DELUXE BLACK - SHOW & HIDE
function myFunction_deluxe_black() {
    var lb = document.getElementById("lightbox_window_h");
    lb.hidden = true;
    lb.onclick = function (){
    
        $('#lightbox_window_h').fadeOut(500);

    };

    var deluxeBlack = document.getElementById("deluxeBlack");
    deluxeBlack.onclick = function (){

         $('#lightbox_window_h').fadeIn(500);

    };

}

// VIP DURALOK BLACK - SHOW & HIDE
function myFunction_duralock_black() {
    var lb = document.getElementById("lightbox_window_i");
    lb.hidden = true;
    lb.onclick = function(){
 
        $('#lightbox_window_i').fadeOut(500);

    };

    var duralokBlack = document.getElementById("duralokBlack");
    duralokBlack.onclick = function (){

          $('#lightbox_window_i').fadeIn(500);

    };

}
/*

function ShowLightBox(){

    $('#lightbox_window_b').fadeIn(500);

  }

  function HideLightBox(){

    var result = prompt("Enter your email below");
    
    $('#lightbox_window_b').fadeOut(500);

  }

*/
/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};


  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});


