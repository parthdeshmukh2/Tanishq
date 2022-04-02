  let userName = JSON.parse(localStorage.getItem("logInUserdata"));

   
let url = "https://cw4tanishq.herokuapp.com/user";
async function myfunction() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // return data
    
    console.log(data);
    append(data);

  } catch (error) {
    console.log("error:", error);
  }
}
myfunction()

let tokenCheck =(localStorage.getItem("_id"));
console.log(tokenCheck)

let checkout_username = document.querySelector(".checkout_username")
let firstName=document.getElementById("checkout_firstName")
    let lastname = document.getElementById("checkout_lastName")
    let email=document.getElementById("checkout_email")
    let phone =document.getElementById("checkout_phone")
function append(data){
  
    data.map(function (ele){
      if(ele._id == tokenCheck){
        checkout_username.textContent=1+" "+ele.firstName;
        firstName.value = ele.firstName;
        lastname.value = ele.lastName;
        phone.value = ele.mobileNo;
        email.value = ele.email;
      }
    })
  
}
append()

// let url2 = "https://cw4tanishq.herokuapp.com/cart";
   
// async function myfunction2() {
//   try {
//     let res = await fetch(url);
//     let data2 = await res.json();
//     // return data
    
//     console.log(data2);
//     console.log(res)

//   } catch (error) {
//     console.log("error:", error);
//   }
// }
// myfunction2()

// {_id: "6247b6c10287b756eeb81e33", userID: "6246d6813c39f629ab0fe1d8",…}
// cart: [{_id: "62434374cbc0dd7571254c30", id: 35,…}, {_id: "62434374cbc0dd7571254c32", id: 37,…},…]
// userID: "6246d6813c39f629ab0fe1d8"
// __v: 13
// _id: "6247b6c10287b756eeb81e33"
let userId = req.parms._id
let cart = cart.id
async function tocart() {
  try {
    if (!localStorage.getItem("token")) {
      alert("Please Login to continue");
      return;
    } else {
      const token = (localStorage.getItem("token"));
      const res = await fetch("https://cw4tanishq.herokuapp.com/cart", {
        method: "PUT",
        body: [],
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // const result = await res.json();
    }
  } catch (error) {
    console.log(error);
  }
}


  //  function checking_out(){
  //   let firstName=document.getElementById("checkout_firstName").value;
  //   let lastname = document.getElementById("checkout_lastName").value;
  //   let email=document.getElementById("checkout_email").value;
  //   let phone =document.getElementById("checkout_phone").value;

     

  //       let checkoutObj={
  //           name:firstName,
  //           lastname:lastName,
  //           mail:email,
  //           mobile:phone,
  //           addr:address,
  //           ste:state,
  //           place:city,
  //           conty:country,
  //       }

    //       if(firstName,lastName,email,phone,country,zipcode,state,city,addressDe,phone1){


    //         let nameP=document.createElement("p");
    //         nameP.textContent=firstName+" ";
    //         let mailId=document.createElement("p");
    //         mailId.textContent=email;
    //         let mobNum=document.createElement("p");
    //         mobNum.textContent=phone;
    //         let addre=document.createElement("p");
    //         addre.textContent=city+" "+state+" "+zipcode;
    //         // let couty=document.createElement("p");
    //         // couty.textContent=country.value;

    //         let cart_items = document.getElementById("added_items");


    //         let data = JSON.parse(localStorage.getItem("CartItems"))

    //         data.map((ele)=>{
    //             let div = document.createElement("div");
    //             let image = document.createElement("img");
    //             image.src=ele.image_link;
    //             let amount= document.createElement("h5")
    //             amount=`Rs.`+ele.price;
    //             // getTotal(ele.price);
    //             let pro_name= document.createElement("h3");
    //             pro_name.textContent=ele.name;
    //             let type = document.createElement("p");
    //             type.textContent=ele.type;
    //             div.append(image,pro_name,type,amount)
    //             cart_items.append(div);
    //         });
    //      let total =0;
    //      for(var i=0; i<data.length; i++){
    //          total+=data[i].price;
    //          if(total==0){
    //              total="No items add";
    //          }
    //      }
        
    //     let amount = document.createElement("h4");
    //     amount.textContent="Rs."+total;
    //     let addHead = document.createElement("h2");
    //     addHead.textContent="DELIVERY ADDRESS:";

            
    //         let address_div = document.getElementById("added_address");
    //         address_div.append(amount,addHead,nameP,mailId,mobNum,addre)

    //         document.getElementById('order_review').checked = true;
    //         localStorage.setItem("checkout_details",JSON.stringify(checkoutObj))
    //         document.getElementById('checkout_details').checked = false;
           
    //       }
    //       else{
    //           alert("enter all the required details");
    //       }   
    // }
    // document.getElementById('order_review').checked = false;



    let zip=document.getElementById("zipcode").value;
    let state=document.getElementById("stateDel").value;
    let city=document.getElementById("cityDel").value;
    let addressDe=document.getElementById("addressDel").value;
    let phone1 = document.getElementById("phoneDel").value;
    let country=document.getElementById("checkout_country").option;
    let address=document.getElementById("added_address")
   function check_out(){
   
      document.getElementById('order_review').checked = true;
      document.getElementById('checkout_details').checked = false;
   }

  function continue_payment(){
    document.getElementById('checkbox_payment').checked = true;



     document.getElementById('order_review').checked = false;
        
   }

   function pay_order(){
     window.location.href="payment.html";
   }


function creditCard(){
  document.getElementById('credit_details').checked = true;
  document.getElementById('netbanking').checked = false;
  document.getElementById('wallet').checked = false;
}

function netbanking(){
  document.getElementById('credit_details').checked = false;
  document.getElementById('netbanking').checked = true;
  document.getElementById('wallet').checked = false;
}

function wallet(){
  document.getElementById('credit_details').checked = false;
  document.getElementById('netbanking').checked = false;
  document.getElementById('wallet').checked = true;
}


function redirect(){
  window.location.href="checkout.html";
}
function otpPage(){
  let card = document.getElementById("card_number").value;
  let expiry = document.getElementById("exp_date").value;
  let cvv = document.getElementById("cvv").value;
  let holder = document.getElementById("holder_name").value;
 

  if(card,expiry,cvv,holder){
     window.location.href="payment_otp.html"
  }
  else{
    alert('enter card details')
  }
}

function thankyou(){
  let otpvalue = document.getElementById("otpvalue").value;
  if(otpvalue==1234){
    window.location.href="thankyou.html";
    
  }
  else{
       alert("worng password-enter '1234'");
  }
}

function tohome(){
  window.location.href="Home.html"
}







