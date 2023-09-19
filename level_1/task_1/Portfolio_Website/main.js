const navMenu= document.getElementById("nav_links");

const navToogle= document.getElementById("bar");

const navClose = document.getElementById("nav_close");
if(navToogle){
    navToogle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
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
// active_link
const sections=document.querySelectorAll('section[id]')
const scrollactive =()=>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop  = current.offsetTop-23,
        sectionId = current.getAttribute('id'),
        sectionclass= document.querySelector('.nav_links a[href*='+sectionId+']')
        if(scrollDown>screenTop && scrollDown<=sectionTop +sectionHeight){
            sectionclass.classList.add('active_link');
        }else{
            sectionclass.classList.remove('active_link');
        }
        
    })
    window.addEventListener('scroll',scrollactive)
}