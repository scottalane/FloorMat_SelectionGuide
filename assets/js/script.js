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
  /*this is the timed response prompting the user to Please make a selection-->*/

function myFunction() {
    document.getElementById("area_selector").style.color = "orange";
}

/*this is where I need to write my if statements for revealing
information that pops up when a usage area is clicked on
function display_usageAreaInfo() {

    if (onclick = "entrance"){
      document.getElementsByIdName(select_entrance);

    if (onclick = "cashier"){
      document.getElementsByTagName(select_cashier);
    }
      if (onclick = "prep_area"){
        document.getElementsByTagName(select_prep_area);
      }
        if (onclick = "bar"){
          document.getElementsByTagName(select_bar);
        }
          if (onclick = "cookline"){
            document.getElementsByTagName(select_cookline);
          }
            if (onclick = "dishwash_area"){
              document.getElementsByTagName(select_dishwash_area);
            }
              if (onclick = "salad_bar"){
                document.getElementsByTagName(select_salad_bar);
              }
                if (onclick = "walk_in"){
                  document.getElementsByTagName(select_walk_in);
                }
                  if (onclick = "transitional_area"){
                    document.getElementsByTagName(select_transitional_area);
                  }
                    if (onclick = "waitress"){
                       document.getElementsByTagName(select_waitress);
                    }
                      if (onclick = "restrooms"){
                         document.getElementsByTagName(select_restrooms);
                      }
                        if (onclick = "transport_mat"){
                           document.getElementsByTagName(select_transport_mats);
                        }
                          if (onclick = "rubber_mats"){
                             document.getElementsByTagName(select_rubber_mats);
                          }
                            if (onclick = "carpet_mats"){
                               document.getElementsByTagName(select_carpet_mats);
                            }
    }
    }
*/

/*this function make the font-size change*/
function myFunction() {
    var str = "Hello World!";
    var result = str.fontsize(7);
    document.getElementById("demo").innerHTML = result;
}
    

/*this section is what changes the size and color of the clicked on word*/
document.getElementById("area_selector").onclick = function() {myFunction()};

/*function myFunction() {
    document.getElementById("area_selector").innerHTML = "print the list of mats in the space provided under the proper heading - Good Better or Best";
}


  $("#area_selector").click(function(){
    var
  }
*/
  $(".sent_button").click(function(){
    var name = $(this).siblings("h3");
     $(this).append( '<img class="thanks_img" src="assets/ThankYou_Locate_A_Rep_WhtBkg.png">' );
  });
});
