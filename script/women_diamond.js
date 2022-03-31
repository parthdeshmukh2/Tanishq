// // import navbar from "/script/nav.js"
// // let nav=document.getElementById('hamcont');
// // nav.innerHTML=navbar();



// var WomenDataDiamond = JSON.parse(localStorage.getItem("WomenDataDiamond"));
// console.log(WomenDataDiamond);

// var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

// displayData(WomenDataDiamond);

// function handlePriceSort() {
//   var selected = document.querySelector("#priceSort").value;
//   console.log(selected);
//   if (selected == "high") {
//     //decending
//     WomenDataDiamond.sort(function (a, b) {
//       return b.price - a.price;
//     });
//   }
//   if (selected == "low") {
//     //accending
//     WomenDataDiamond.sort(function (a, b) {
//       return a.price - b.price;
//     });
//   }
//   displayData(WomenDataDiamond);
// }

// function displayData(WomenDataDiamond) {
//   document.querySelector("#containermen").innerHTML = "";

//   WomenDataDiamond.map(function (data) {
//     var div = document.createElement("div");

//     //create image
//     var img = document.createElement("img");
//     img.setAttribute("class", "ham");
//     img.setAttribute("src", data.image_link);

//     //name creation
//     var name = document.createElement("p");
//     name.textContent = data.name;

//     var divr = document.createElement("div");
//     divr.setAttribute("id", "divr");

//     var rating = document.createElement("h4");
//     rating.textContent = data.rating;

//     var star = document.createElement("h3");
//     star.textContent = " ★";
//     star.style.color = "rgb(20,149,143)";

//     divr.append(rating, star);

//     var brand = document.createElement("h4");
//     brand.textContent = data.brandname;

//     //price  creation;
//     var div2 = document.createElement("div");
//     div2.setAttribute("id", "flex");

//     var p1 = document.createElement("p");
//     p1.style.fontWeight = "700";
//     p1.textContent = `Rs.${data.price}`;

//     div2.append(p1);
//     //  add to bag
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

//     //append
//     div.append(img, divr, name, div2, btn);

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

////////////////////////////

let url = "https://cw4tanishq.herokuapp.com/product?type=Diamond&category=Women";
async function myfunction() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // return data
    console.log(res);
    console.log(data);
    appendmd(data)
  } catch (error) {
    console.log("error:", error);
  }
}
myfunction();


function appendmd(data) {
  document.querySelector("#containermen").innerHTML = "";

  data.map( function (item) {
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
  if (!localStorage.getItem("name")) {
    alert("Please Login to continue");
    return;
  }
  addtocart(data);
});

    div.append(img, divr, brand, name, div2, btn);

    document.querySelector("#containermen").append(div);
  });
}
