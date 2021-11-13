
const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");
const mainNavbar = document.querySelector(".main-navbar");

openNav.addEventListener("click",function(){
    mainNavbar.classList.add("expandNavbar")
});
closeNav.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});

//anchor
const nunu = document.querySelectorAll(".nunu")[0];
const nunu1 = document.querySelectorAll(".nunu")[1];
const nunu2 = document.querySelectorAll(".nunu")[2];
const nunu3= document.querySelectorAll(".nunu")[3];
const nunu4 = document.querySelectorAll(".nunu")[4];
const nunu5 = document.querySelectorAll(".nunu")[5];


nunu.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
nunu1.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
nunu2.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
nunu3.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
nunu4.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
nunu5.addEventListener("click",function(){
    mainNavbar.classList.remove("expandNavbar")
});
