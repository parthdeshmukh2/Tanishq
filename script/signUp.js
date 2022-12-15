document.querySelector("form").addEventListener("submit", formSubmit);
//    let userStack = JSON.parse(localStorage.getItem("userDataBase"))||[];

        async function formSubmit(event){

            try{
                event.preventDefault();
            let name = document.getElementById("namerth").value;
           let surName = document.getElementById("lastrth").value;
           let mobile = document.getElementById("numbrth").value;
           let uemail = document.getElementById("mailrth").value;
           let pass = document.getElementById("passwordrth").value;

           let userData = { 
                firstName : name,
                lastName:surName,
                mobileNo: mobile,
                email: uemail,
                password: pass,
            };

            const newUser= JSON.stringify(userData)

                const res = await fetch("https://tanishq.onrender.com/register",{
                    method:"POST",
                    body:newUser,
                    headers:{
                        "Content-Type":"application/json"
                    }

                })

                const result = await res.json();

                if(res.status==400){
                    console.log("email already exists")
                }
                if(res.status==200){
                    alert("registration Successful")
                    window.location.href= "login.html"
                }

            }
            
            catch(err){
                console.log(err)
            }

        }
        //     userStack.push(userData);
        //     localStorage.setItem("userDataBase", JSON.stringify(userStack));
        //     alert("Signup Success");
        //     window.location.href = "login.html";
        // }