function signup(){
    window.location.href="signUp.html";
}


document.getElementById("submitrth").addEventListener("click", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
var loggedInUser = [];
function signin(){
  var email = document.getElementById("email1rth").value;
  var pass = document.getElementById("pass1rth").value;

  
  
  for(var a = 0; a<regdUsers.length; a++){
      if(regdUsers[a].emailAdd === email && regdUsers[a].passwd === pass){
          localStorage.setItem('name',JSON.stringify(regdUsers[a].name))
          
          alert("You Can Shop Now With Best Offers!");
         
         loggedInUser.push(regdUsers[a]);
         localStorage.setItem("logInUserdata", JSON.stringify(loggedInUser));
         window.location.href = "home.html";
         break;

      }
     
  }

} 

