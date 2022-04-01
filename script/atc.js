let btn = document.getElementById("sunny");
let id = localStorage.getItem("_id");
let token =  localStorage.getItem("token");

btn.addEventListener("click", function () {
  async function atc(){
    // console.log("here");
  try {
    const res = await fetch(`https://cw4tanishq.herokuapp.com/cart/${id}`,{
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`

      }
      
    }) 
    // console.log(res);

  } catch (error) {
    console.log(error);
  }
}
atc();
});
