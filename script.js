const hamburger = document.getElementById("hamburger");

const nav = document.querySelector(".nav-link");

hamburger.addEventListener("click",()=>{

    nav.classList.toggle("active");

});