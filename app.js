
let menu = document.querySelector("#menu_icon");
let navbar = document.querySelector(".navbar-links");


menu.onclick = () =>{
    navbar.classList.toggle('active');
}

// menu.addEventListener("click", function(){
//     navbar.classList.toggle('.show-links');
//     // if (navbar.classList.contains("show-links")){
//     //     navbar.classList.remove("show-links");
//     // }else{
//     //     navbar.classList.add("show-links");
//     // }
// });

// function myFunction() {
//     var x = document.getElementById("navbar-links");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }