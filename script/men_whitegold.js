// // import navbar from "/script/nav.js"
// // let nav=document.getElementById('hamcont');
// // nav.innerHTML=navbar();

// var mensDataWhitegold = JSON.parse(localStorage.getItem("mensDataWhitegold"));
// console.log(mensDataWhitegold);

// var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

// displayData(mensDataWhitegold);

// // var wishlist =JSON.parse(localStorage.getItem("WishlistItems"))||[]

// // displayData(mensDataWhitegold);

// function handlePriceSort() {
//   var selected = document.querySelector("#priceSort").value;
//   console.log(selected);
//   if (selected == "high") {
//     mensDataWhitegold.sort(function (a, b) {
//       return b.price - a.price;
//     });
//   }
//   if (selected == "low") {
//     mensDataWhitegold.sort(function (a, b) {
//       return a.price - b.price;
//     });
//   }

//   displayData(mensDataWhitegold);
// }

// // displayData(mensDataWhitegold)

// function displayData(mensDataWhitegold) {
//   document.querySelector("#containermen").innerHTML = "";

//   mensDataWhitegold.map(function (data) {
//     var div = document.createElement("div");

//     var img = document.createElement("img");
//     img.setAttribute("class", "ham");
//     img.setAttribute("src", data.image_link);

//     var divr = document.createElement("div");
//     divr.setAttribute("id", "divr");

//     var rating = document.createElement("h4");
//     rating.textContent = data.rating;

//     var star = document.createElement("h3");
//     star.textContent = " ★";
//     star.style.color = "rgb(20,149,143)";

//     divr.append(rating, star);

//     var name = document.createElement("p");
//     name.textContent = data.name;

//     var brand = document.createElement("h4");
//     brand.textContent = data.brandname;

//     var div2 = document.createElement("div");
//     div2.setAttribute("id", "flex");

//     var p1 = document.createElement("p");
//     p1.style.fontWeight = "700";
//     p1.textContent = `Rs.${data.price}`;

//     div2.append(p1);

//     var btn = document.createElement("button");
//     btn.setAttribute("id", "bagmen");
//     btn.textContent = "MOVE TO BAG";

//     btn.addEventListener("click", function () {
//       if (!localStorage.getItem("name")) {
//         alert("Please Login to continue");
//         return;
//       }
//       addtocart(data);
//     });

//     div.append(img, divr, brand, name, div2, btn);

//     document.querySelector("#containermen").append(div);
//   });
// }

// function addtocart(data) {
//   console.log(data, "data");
//   cart.push({
//     ...data,
//     units: 1,
//   });
//   localStorage.setItem("CartItems", JSON.stringify(cart));
//   localStorage.setItem("cartLength", cart.length);

//   alert("added successfully");
// }

// var total_cart = localStorage.getItem("cartLen");
// if (total_cart > 0) {
//   document.getElementById("amartocart").innerHTML = `CART(${total_cart})`;
// }

// var usrname = JSON.parse(localStorage.getItem("name"))||[];
// document.getElementById("amarname").textContent = `${usrname}`;

// var userdelet = document.getElementById("gotologin");

// userdelet.addEventListener("click", function () {
//   console.log(userdelet);
//   localStorage.removeItem("logInUserdata");
//   localStorage.removeItem("name");

// });
////////////////////////////////////////////////////////

let url =
  "https://tanishq.onrender.com/product?type=White Gold&category=Men";
async function myfunction() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // return data
    console.log(res);
    console.log(data);
    appendmd(data);
  } catch (error) {
    console.log("error:", error);
  }
}
myfunction();

function appendmd(data) {
  document.querySelector("#containermen").innerHTML = "";

  data.map(function (item) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("class", "ham");
    img.setAttribute("src", item.image_link);

    var divr = document.createElement("div");
    divr.setAttribute("id", "divr");

    var rating = document.createElement("h4");
    rating.textContent = item.rating;

    var star = document.createElement("h3");
    star.textContent = " ★";
    star.style.color = "rgb(20,149,143)";

    divr.append(rating, star);

    var name = document.createElement("p");
    name.textContent = item.name;

    var brand = document.createElement("h4");
    brand.textContent = item.brandname;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.style.fontWeight = "700";
    p1.textContent = `Rs.${item.price}`;

    div2.append(p1);

    btn.addEventListener("click", function () {
      var _id = localStorage.getItem("_id");
      var token = localStorage.getItem("token");
      async function addtocart() {
        try {
          if (!localStorage.getItem("name")) {
            alert("Please Login to continue");
            return;
          } else {
            var cartData = {
              userId: _id,
              cartItem: item,
            };
            const res = await fetch("https://tanishq.onrender.com/cart", {
              method: "POST",
              body: JSON.stringify(cartData),
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
      addtocart();
    });

    div.append(img, divr, brand, name, div2, btn);

    document.querySelector("#containermen").append(div);
  });
}

var username = localStorage.getItem("name");

if (username === null)
  document.getElementById("username").innerHTML =
    "<a style='color:Black;text-decoration:none;'href='./login.html'>Login</a>";
else document.getElementById("username").innerHTML = `<b>${username}`;

function logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("_id");
  localStorage.removeItem("token");
  window.location.href='../index.html';
}
