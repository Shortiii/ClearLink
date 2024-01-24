let toggleBtn = document.querySelector(".toggle-btn");
let barsMark = document.querySelector('.fa-bars');
let mobileMenu = document.querySelector('.mobile-menu');

let open = true

function toggleMenu(){
    if(open == true){
        barsMark.style.display = "inline-block";
        mobileMenu.style.top = "14.5vh";
        open = false;
    }
    else{
        mobileMenu.style.top = "-200vh";
        open = true;
    }
}
toggleBtn.addEventListener("click", toggleMenu)


