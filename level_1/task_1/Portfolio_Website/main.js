const navMenu= document.getElementById("nav_links");

const navToogle= document.getElementById("bar");
const navClose = document.getElementById("nav_close");
if(navToogle){
    navToogle.addEventListener("click",()=>{
        // navMenu.classList.add("show_menu");
        console.log('click')
    })
}
// hiiden
if(navClose){
    navClose.addEventListener("click",()=>{
        console.log('click')
        navMenu.classList.remove("show_menu");
    })
}

//  Remove menu MObile
const navLinks= document.querySelectorAll('.link');
console.log(navLinks)
const linkAction =()=>{
    const navMenu = document.getElementById("nav_links");

    navMenu.classList.remove("show_menu");

}

navLinks.forEach(n=> n.addEventListener('click',linkAction));
