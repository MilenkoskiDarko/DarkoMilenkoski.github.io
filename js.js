window.addEventListener("scroll",function (){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("bio",window.scrollY > 800)
    header.classList.toggle("skills",window.scrollY > 1700)
    header.classList.toggle("contact",window.scrollY > 2700)
})

/*
window.addEventListener("click",function () {
    let home = document.querySelector("home");
    home.classList.toggle("clickhome",onclick());
})*/
