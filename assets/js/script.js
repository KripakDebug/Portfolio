let myVar;
const burger = document.querySelector('.burger');
const panel = document.querySelector('.panel-links');
const closepanel = document.querySelector('.close-btn');
const preload = document.querySelector('#preload');
const banner = document.querySelector('#banner');
const nav = document.querySelector('.nav-wrapper');
const body = document.body;            
const links = document.querySelectorAll('#link');
const burgerItem = document.querySelector('#burgerItem');
const burgerItem1 = document.querySelector('#burgerItem-1');
const burgerItem2 = document.querySelector('#burgerItem-2');
const navStyle = nav.style;
const wrapper = document.querySelector('#wrapper');
 function load(){
     myVar = setTimeout(hiding, 2000);
     myVar = setTimeout(showPage,3000);
     myVar = setTimeout(hiding1, 3000);
     myVar = setTimeout(showPage1, 4000);
     myVar = setTimeout(load1, 4500);
}
function showPage1(){
    document.getElementById("subtext").style.animation = "fadeout 1s ease";
}
function load1() {
    document.getElementById("preload").style.display = "none";
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("wrapper").style.animation = "fadein 1s ease";
}
function hiding1(){
    document.getElementById("subtext").style.animation = "fadein 1s ease";
}
function showPage(){
    document.getElementById("text").style.display = "none";

}
function hiding(){
    document.getElementById("text").style.animation = "fadeout 1s ease";
}
// Burger event to Bar
links.forEach(link => {
    link.addEventListener('click', (e) => {
        panel.style.display = 'none';
        body.classList.remove('body-shadow');
        body.classList.remove('hidden');
        e.preventDefault()
        const goto = link.hasAttribute('href') ? link.getAttribute('href') : 'body';
        document.querySelector(goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    });
});
burger.addEventListener('click', () => {
    panel.style.position = 'fixed';
    panel.style.display = 'flex';
    body.classList.add('body-shadow');
    body.classList.add('hidden');
});
closepanel.addEventListener('click', () => {
    panel.style.display = 'none';
    burger.style.opacity = '1';
    body.classList.remove('body-shadow');
    body.classList.remove('hidden');
});

// Scroll animeted
document.addEventListener('DOMContentLoaded', () => {
    const about = document.querySelector('#about');
    const aboutphoto = document.querySelector('#photo');
    const skills = document.querySelector('#skills');
    const skillsTitle = document.querySelector('#skills-title');
    const skillsLists = document.querySelector('#skills-lists');
    const aboutdescription = document.querySelector('#descrip-about');
    window.addEventListener('scroll', () => {
        const scrollwindow = window.scrollY;
        const heightAbout = about.offsetHeight / 3;
        const skillsHeight = skills.offsetHeight / 4;
        const heightBanner = banner.offsetHeight / 2;
        if(scrollwindow >= heightAbout){
            aboutdescription.style.animation = 'aboutscroll 3s forwards';
            aboutphoto.style.animation = 'photoscroll 2s forwards';
        };
        if(scrollwindow >= heightBanner){
           burgerItem.style.border = '1px solid #000';
           burgerItem1.style.border = '1px solid #000';
           burgerItem2.style.border = '1px solid #000';
           burgerItem.style.height = '4px';
           burgerItem1.style.height = '4px';
           burgerItem2.style.height = '4px';
           burgerItem.style.backgroundColor = '#fff';
           burgerItem1.style.backgroundColor = '#fff';
           burgerItem2.style.backgroundColor = '#fff';
        };
        if(scrollwindow >= skillsHeight){
            skillsTitle.style.animation = 'animatedScroll 3s forwards';
            skillsLists.style.animation = 'animatedScroll 4s forwards';
        };
    })
    
});

function scrollAdaptive(){
    if (window.matchMedia("(max-width: 400px)").matches){
        window.addEventListener('scroll', () => {
          const scrollwindow = window.scrollY;
          const banner = document.querySelector('#banner');
          const heightBanner = banner.offsetHeight / 2;
          if(scrollwindow >= heightBanner){
              navStyle.backgroundColor = '#fff';
              burgerItem2.style.backgroundColor = '#000';
              burgerItem1.style.backgroundColor = '#000';
              burgerItem.style.backgroundColor = '#000';
              burger.style.top = 'auto';
          }
      });
          }
          else{
              return;
          }
}
scrollAdaptive();