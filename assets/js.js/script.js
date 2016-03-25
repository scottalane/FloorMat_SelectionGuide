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
  })();
/*
this is where I need to write my if statements for revealing the clicked on usage area
information that pops up when a usage area id clicked on
*/
document.getElementById("area_selector").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("area_selector").innerHTML = "print the list of mats in the space provided under the proper heading - Good Better or Best";
}

/*
  $("#area_selector").click(function(){
    var
  }
*/
  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});
