// // import navbar from "/script/nav.js"
// // let nav=document.getElementById('hamcont');
// // nav.innerHTML=navbar();

// var mensDataDiamond = JSON.parse(localStorage.getItem("mensDataDiamond"));
// console.log(mensDataDiamond);

// var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

// displayData(mensDataDiamond);

// // var wishlist =JSON.parse(localStorage.getItem("WishlistItems"))||[]

// // displayData(mensDataDiamond);

// function handlePriceSort() {
//   var selected = document.querySelector("#priceSort").value;
//   console.log(selected);
//   if (selected == "high") {
//     mensDataDiamond.sort(function (a, b) {
//       return b.price - a.price;
//     });
//   }
//   if (selected == "low") {
//     mensDataDiamond.sort(function (a, b) {
//       return a.price - b.price;
//     });
//   }

//   displayData(mensDataDiamond);
// }

// api fetch
//  const url = "https://cw4tanishq.herokuapp.com/products?type=Diamond&category=Men"

// const asyncFunction = ()=>{
//   try {
//     let response = await fetch("url");
//     console.log(response);
//   } catch (error) {
//     console.log(error.message)
//   }

// }

// function handlePriceSort() {
//   var selected = document.querySelector("#priceSort").value;
//   console.log(selected);
//   if (selected == "high") {
//     mensDataDiamond.sort(function (a, b) {
//       return b.price - a.price;
//     });
//   }
//   if (selected == "low") {
//     mensDataDiamond.sort(function (a, b) {
//       return a.price - b.price;
//     });
//   }

//   displayData(mensDataDiamond);
// }
// displayData(mensDataDiamond)

// function displayData(mensDataDiamond) {
//   document.querySelector("#containermen").innerHTML = "";

//   mensDataDiamond.map(function (data) {
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

// var usrname = JSON.parse(localStorage.getItem("name")) || [];
// document.getElementById("amarname").textContent = `${usrname}`;

// var userdelet = document.getElementById("gotologin");

// userdelet.addEventListener("click", function () {
//   console.log(userdelet);
//   localStorage.removeItem("logInUserdata");
//   localStorage.removeItem("name");
// });
//////////////////////////////////////////////////////////////////////////////////

let url = "https://cw4tanishq.herokuapp.com/product?type=Diamond&category=Men";
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

    var btn = document.createElement("button");
    btn.setAttribute("id", "bagmen");
    btn.textContent = "MOVE TO BAG";

    btn.addEventListener("click", function () {
      var _id = JSON.parse(localStorage.getItem(_id)) || [];

      async function addtocart() {
        try {
          var cartData = {
            userId: "6242f849a22b9fa4e210ca09",
            cartItem: item,
          };
          const res = await fetch("https://cw4tanishq.herokuapp.com/cart", {
            method: "POST",
            body: JSON.stringify(cartData),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNhcnQiOltdLCJfaWQiOiI2MjQyZjg0OWEyMmI5ZmE0ZTIxMGNhMDkiLCJmaXJzdE5hbWUiOiJTaHViaGFtIiwibGFzdE5hbWUiOiJEdWJleSIsIm1vYmlsZU5vIjo5ODM5ODM5MTExLCJlbWFpbCI6InNodWJoYW1AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDgkLmoueXVFc3pnZE4yOEJGMm1uRHY0T1VKa1dCV1BpcjlZUUhJYm1SREJyZmR1U3VWRERiZGEiLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTI5VDEyOjE1OjA1Ljc0N1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTI5VDEyOjE1OjA1Ljc0N1oiLCJfX3YiOjB9LCJpYXQiOjE2NDg3MzU2MTh9.TPlV-o_uRsBwaTERV2_lxtX6b8lL3bG2eSzrx3_un5M",
            },
          });
          // const result = await res.json();
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
