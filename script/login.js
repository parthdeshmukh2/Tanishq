// function signup(){
//     window.location.href="signUp.html";
// }


document.getElementById("submitrth").addEventListener("click", signin);

// var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));
// var loggedInUser = [];
async function signin(event){


  try{
    event.preventDefault();
    let uemail = document.getElementById("email1rth").value;
    let pass = document.getElementById("pass1rth").value;

let userData = { 
    email: uemail,
    password: pass,
};

const newUser= JSON.stringify(userData)

    const res = await fetch("https://cw4tanishq.herokuapp.com/login",{
        method:"POST",
        body:newUser,
        headers:{
            "Content-Type":"application/json"
        }

    })

    const result = await res.json();

    if(res.status==400){
        console.log("wrong email or password")
    }
    if(res.status==201){
        console.log(result)

        const name = result.user.firstName
        localStorage.setItem("name", name)
        alert("Login Successful")
        window.location.href= "Home.html"

    }

}

catch(err){
    console.log(err)
}

}




  
  
//   for(var a = 0; a<regdUsers.length; a++){
//       if(regdUsers[a].emailAdd === email && regdUsers[a].passwd === pass){
//           localStorage.setItem('name',JSON.stringify(regdUsers[a].name))
          
//           alert("You Can Shop Now With Best Offers!");
         
//          loggedInUser.push(regdUsers[a]);
//          localStorage.setItem("logInUserdata", JSON.stringify(loggedInUser));
//          window.location.href = "home.html";
//          break;

//       }
     
//   }

// } 
