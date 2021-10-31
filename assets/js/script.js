let myVar;
let burger = document.querySelector('.burger');
let panel = document.querySelector('.panel-links');
let closepanel = document.querySelector('.close-btn');
const preload = document.querySelector('#preload');
const skills = document.querySelector('.skills');
const nav = document.querySelector('.nav-wrapper');
const body = document.body;
let links = document.querySelectorAll('#link');
const burgerItem = document.querySelector('#burgerItem');
const burgerItem1 = document.querySelector('#burgerItem-1');
const burgerItem2 = document.querySelector('#burgerItem-2');
let navStyle = nav.style;
const wrapper = document.querySelector('.wrapper');
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
    let about = document.querySelector('#about');
    let aboutphoto = document.querySelector('#photo');
    let skills = document.querySelector('#skills');
    let skillsTitle = document.querySelector('#skills-title');
    let skillsLists = document.querySelector('#skills-lists');
    let aboutdescription = document.querySelector('#descrip-about');
    window.addEventListener('scroll', () => {
        const scrollwindow = window.scrollY;
        let heightAbout = about.offsetHeight / 3;
        let skillsHeight = skills.offsetHeight / 4;
        let heightBanner = banner.offsetHeight / 2;
        if(scrollwindow >= heightAbout){
            aboutdescription.style.animation = 'aboutscroll 3s forwards';
            aboutphoto.style.animation = 'photoscroll 2s forwards';
        };
        
        if(scrollwindow >= skillsHeight){
            skillsTitle.style.animation = 'animatedScroll 3s forwards';
            skillsLists.style.animation = 'animatedScroll 4s forwards';
        };
        if(scrollwindow >= heightBanner){
            navStyle.width = '100%';
            navStyle.backgroundColor = '#fff';
            navStyle.display = 'flex';
            navStyle.justifyContent = 'left';
            navStyle.alignItems = 'center';
        }
        else{
            navStyle.width = '100%';
            navStyle.backgroundColor = 'none';
            navStyle.display = 'flex';
            navStyle.justifyContent = 'left';
            navStyle.alignItems = 'center';
            }

    })
    
});

function scrollAdaptive(){
    if (window.matchMedia("(max-width: 400px)").matches){
        
        window.addEventListener('scroll', () => {
          const scrollwindow = window.scrollY;
          const banner = document.querySelector('#banner');
          let heightBanner = banner.offsetHeight / 2;
          if(scrollwindow >= heightBanner){
              navStyle.width = '100%';
              navStyle.backgroundColor = '#fff';
              navStyle.top = 0;
              burgerItem2.style.backgroundColor = '#000';
              burgerItem1.style.backgroundColor = '#000';
              burgerItem.style.backgroundColor = '#000';
              navStyle.zIndex = '10';
              burger.style.top = 'auto';
              navStyle.height = '50px';
              navStyle.position = 'fixed';
              navStyle.display = 'flex';
              navStyle.justifyContent = 'left';
              navStyle.alignItems = 'center';
          }
      
      });
          }
          else{
              return
          }
}
scrollAdaptive();
// if (window.matchMedia("(max-width: 400px)").matches) {
//     if(scrollwindow >= heightBanner){
//         navStyle.width = '100%';
//         navStyle.backgroundColor = '#fff';
//         navStyle.top = 0;
//         burgerItem2.style.backgroundColor = '#000';
//         burgerItem1.style.backgroundColor = '#000';
//         burgerItem.style.backgroundColor = '#000';
//         navStyle.zIndex = '10';
//         burger.style.top = 'auto';
//         navStyle.height = '50px';
//         navStyle.position = 'fixed';
//         navStyle.display = 'flex';
//         navStyle.justifyContent = 'left';
//         navStyle.alignItems = 'center';
//     }

//   } 


//   window.addEventListener('scroll', () => {
//     const scrollwindow = window.scrollY;
//     const banner = document.querySelector('#banner');
//     let heightBanner = banner.offsetHeight / 2;

// });