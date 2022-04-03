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
myfunction();

let tokenCheck = localStorage.getItem("_id");
console.log(tokenCheck);

let checkout_username = document.querySelector(".checkout_username");
let firstName = document.getElementById("checkout_firstName");
let lastname = document.getElementById("checkout_lastName");
let email = document.getElementById("checkout_email");
let phone = document.getElementById("checkout_phone");
// let address=document.getElementById("added_orderDet");
let newDetails = (document.getElementById("checkbox_").checked = true);

function append(data) {
  data.map(function (ele) {
    if (ele._id == tokenCheck) {
      checkout_username.textContent = 1 + " " + ele.firstName;
      firstName.value = ele.firstName;
      lastname.value = ele.lastName;
      phone.value = ele.mobileNo;
      email.value = ele.email;
      if (newDetails) {
        let nameOrder = (document.createElement("p").textContent =
          firstName.value + " ");
        let details1 = (document.createElement("p").textContent =
          email.value + "  ");

        address.append(nameOrder, details1);
      }
    }
  });

  // let checkout_username = document.querySelector(".checkout_username");
  // let firstName = document.getElementById("checkout_firstName");
  // let lastname = document.getElementById("checkout_lastName");
  // let email = document.getElementById("checkout_email");
  // let phone = document.getElementById("checkout_phone");
  // function append1(data) {
  //   data.map(function (ele) {
  //     if (ele._id == tokenCheck) {
  //       checkout_username.textContent = 1 + " " + ele.firstName;
  //       firstName.value = ele.firstName;
  //       lastname.value = ele.lastName;
  //       phone.value = ele.mobileNo;
  //       email.value = ele.email;
  //     }
  //   });
}
append();

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

async function tocart() {
  window.location.href = "Home.html";
  alert("Redirecting to Home Page");
  // var _id = localStorage.getItem("_id");
  var cartID = localStorage.getItem("cartID"); /////why var was not accessible from outsied of async function//go through back end once again
  try {
    var cartData = {
      cId: cartID,
    };
    const token = localStorage.getItem("token");
    const res = await fetch(`https://cw4tanishq.herokuapp.com/cart`, {
      method: "PUT",
      body: JSON.stringify(cartData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // const result = await res.json();
  } catch (error) {
    console.log(error);
  }
  localStorage.removeItem("cartItm");
  localStorage.removeItem("cartLen");
  localStorage.removeItem("cartID");
  localStorage.removeItem("CartItems");
}
tocart();

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

// let zip = document.getElementById("zipcode").value;
// let state = document.getElementById("stateDel").value;
// let city = document.getElementById("cityDel").value;
// let addressDe = document.getElementById("addressDel").value;
// let phone1 = document.getElementById("phoneDel").value;
// let country = document.getElementById("checkout_country").option;
// let address = document.getElementById("added_address");
// function check_out() {
//   document.getElementById("order_review").checked = true;
//   document.getElementById("checkout_details").checked = false;
// }

//  function checking_out(){
//   let firstName=document.getElementById("checkout_firstName").value;
//   let lastname = document.getElementById("checkout_lastName").value;
//   let email=document.getElementById("checkout_email").value;
//   let phone =document.getElementById("checkout_phone").value;

//  }
//     let checkoutObj={

//         addr:address,
//         ste:state,
//         place:city,
//         conty:country,
//     }

//       if(firstName,lastName,email,phone,country,zipcode,state,city,addressDe,phone1){

// //         // let couty=document.createElement("p");
//         // couty.textContent=country.value;

//         // let cart_items = document.getElementById("added_items");

//         // let data = JSON.parse(localStorage.getItem("CartItems"))

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

// let address=document.getElementById("added_address")

// let nameP=document.createElement("p");
// nameP.textContent=firstName+" ";
// let mailId=document.createElement("p");
// mailId.textContent=email;
// let mobNum=document.createElement("p");
// mobNum.textContent=phone;
// let addre=document.createElement("p");
// addre.textContent=city+" "+state+" "+zipcode;
// let couty=document.createElement("p");
// couty.textContent=country.value;

function check_out() {
  let zip = document.getElementById("zipcode").value;
  let state = document.getElementById("stateDel").value;
  let city = document.getElementById("cityDel").value;
  let phone1 = document.getElementById("phoneDel").value;
  let country = document.getElementById("checkout_country");
  let review_items = document.getElementById("added_items");
  let data = JSON.parse(localStorage.getItem("cartItm"));
  let data1 = data[0].cart;
  // data1.map(function (ele){
  //   console.log(ele)
  // })
  let array = [];
  if ((zip, city, state, phone1)) {
    data1.map(function (ele) {
      let image = document.createElement("img");
      image.src = ele.image_link;
      let category = document.createElement("p");
      category.textContent =
        "Category: " + ele.category + " - " + "Type: " + ele.type;
      let price = document.createElement("p");
      price.textContent = "Amount" + "Rs." + ele.price;
      array.push(ele.price);

      review_items.append(image, category, price);
    });
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }

    let totalPrice = (document.getElementById("totalAmount").textContent =
      "Rs." + sum);

    let details3 = (document.createElement("p").textContent =
      city + " " + state);
    let details4 = (document.createElement("p").textContent =
      country + " " + zip);
    address.append(details3, details4);
    document.getElementById("order_review").checked = true;
    document.getElementById("checkout_details").checked = false;
  } else {
    alert("Enter required details");
  }
}

//  [{"_id":"624953e65871e52888b854fe","userID":"6246d6813c39f629ab0fe1d8","cart":[{"_id":"62434374cbc0dd7571254c36","id":41,"image_link":"https://staticimg.titan.co.in/Tanishq/Catalog/51F1I2PDGAAA00_1.jpg?impolicy=pqmed&imwidth=640","category":"Men","name":"Grand Stunning locket For Men","price":57080,"rating":"3.7","type":"Gold"},{"_id":"62434374cbc0dd7571254c0e","id":1,"image_link":"https://staticimg.titan.co.in/Tanishq/Catalog/500104SQAABAPL_1.jpg?impolicy=pqmed&imwidth=640","category":"Women","name":"Grand Stunning Earring For Women","price":24080,"rating":"3.9","type":"Gold"},{"_id":"62434374cbc0dd7571254c2d","id":32,"image_link":"https://staticimg.titan.co.in/Tanishq/Catalog/512621PHGAAA00_1.jpg?impolicy=pqmed&imwidth=640","category":"Men","name":"Grand Stunning pendent For Men","price":26080,"rating":"3.5","type":"Gold"}],"__v":10}]

function continue_payment() {
  document.getElementById("checkbox_payment").checked = true;

  document.getElementById("order_review").checked = false;
}

function pay_order() {
  window.location.href = "payment.html";
}

function creditCard() {
  document.getElementById("credit_details").checked = true;
  document.getElementById("netbanking").checked = false;
  document.getElementById("wallet").checked = false;
  document.getElementById("order_review").checked = false;
}

function pay_order() {
  window.location.href = "payment.html";
}

function creditCard() {
  document.getElementById("credit_details").checked = true;
  document.getElementById("netbanking").checked = false;
  document.getElementById("wallet").checked = false;
}

function netbanking() {
  document.getElementById("credit_details").checked = false;
  document.getElementById("netbanking").checked = true;
  document.getElementById("wallet").checked = false;
}

function wallet() {
  document.getElementById("credit_details").checked = false;
  document.getElementById("netbanking").checked = false;
  document.getElementById("wallet").checked = true;
}

function redirect() {
  window.location.href = "checkout.html";
}
function otpPage() {
  let card = document.getElementById("card_number").value;
  let expiry = document.getElementById("exp_date").value;
  let cvv = document.getElementById("cvv").value;
  let holder = document.getElementById("holder_name").value;

  if ((card, expiry, cvv, holder)) {
    window.location.href = "payment_otp.html";
  } else {
    alert("enter card details");
  }
}

// function thankyou() {
//   let otpvalue = document.getElementById("otpvalue").value;
//   if (otpvalue == 1234) {
//     window.location.href = "thankyou.html";
//   } else {
//     alert("worng password-enter '1234'");
//   }
// }

// function tohome() {
//   window.location.href = "Home.html";
// }
