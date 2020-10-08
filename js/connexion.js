(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click',()=>{
      container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click',()=>{
      container.classList.remove("right-panel-active");
  });

  /****************************************************************************************************************************************/
  
  $('.inscrip-event').hide();

  let userX = [
    { 
      username: "Julien",
      password: "ju"
    },
    { 
      username: "k",
      password: "ka"
    },
    { 
      username: "b",
      password: "ba"
      },
      {
          username: "a",
          password: "aa"
      },
      {
          username: "c",
          password: "ca"
      },
  ]

function ok() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < userX.length; i++) {
		
		if(username == userX[i].username && password == userX[i].password){

            $('#exampleModalPreview').modal('hide');
            $('#modalActivate').hide();
            $('#usernames').text("Bienvenue "+username);
            $('.connect').hide();
            $('.inscrip-event').show();
            $('.inscrip-event').text("inscription a l'événement");
            
            
			return
        }
        
	}
	alert("incorrect username or password")
}

function okz() {
            $('.inscrip-event').show();
            $('.inscrip-event').text("inscription validé");
            
            $('.button-valider').css("background-color", "#000"); 

        
	}
