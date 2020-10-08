// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  $(document).ready(function() {
    $('#autoWidthx').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidthx').removeClass('cS-hidden');
        } 
    });  
  });

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Merci pour votre inscription');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}
