const navMenu= document.getElementById("nav_links");

const navToogle= document.getElementById("bar");
const navClose = document.getElementById("nav_close");
if(navToogle){
    navToogle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
    })
}
// hiiden
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show_menu");
    })
}

//  Remove menu MObile
const navLinks= document.querySelectorAll('.link');
console.log(navLinks)
const linkAction =()=>{
    const navMenu = document.getElementById("nav_links");
    console.log(navMenu);
    navMenu.classList.remove("show_menu");

}
const shi =() =>{
    console.log('click')
}
navLinks.forEach(n=> n.addEventListener('click',linkAction));
