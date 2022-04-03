let btn = document.getElementById("sunny");
let id = localStorage.getItem("_id");
let token = localStorage.getItem("token");
let arr = [];

btn.addEventListener("click", function () {
  async function atc() {
    try {
      let res = await fetch(`https://cw4tanishq.herokuapp.com/cart/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await res.json();
      arr.push(data);
      localStorage.setItem("cartItm", JSON.stringify(arr));
      localStorage.setItem("cartID", data._id)
      window.location.href = "cart.html";
    } catch (error) {
      console.log(error);
    }
    // console.log("here");
    // try {
    //   // const res = await fetch(`https://cw4tanishq.herokuapp.com/cart/${id}`,{
    //   //   method:"GET",
    // headers:{
    //   Authorization: `Bearer ${token}`

    // }

    //   })

    // } catch (error) {
    //   console.log(error);
    // }
  }
  atc();
  console.log(arr);
});
// window.onload=atc()
