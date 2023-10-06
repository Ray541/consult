// Navbar Scrolled Animation
var head = document.querySelector(".header");

window.addEventListener("scroll", () =>{
    if(document.documentElement.scrollTop > 50)
    {
        head.classList.add("scrolled");
    }
    else
    {
        head.classList.remove("scrolled");
    }
});

var logo = document.getElementById("logo");
logo.style.outline = "unset";

//Nav Hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
});


window.addEventListener('scroll', reveal);

function reveal()
{
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 115;

        if(revealTop < windowHeight - revealPoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}