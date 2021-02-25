window.onload=()=>{
    const sideButton=document.querySelector(".sideButton");
const navlinks=document.querySelector(".nav-links");
const links=document.querySelectorAll(".nav-links li");

sideButton.addEventListener('click',()=>{
    console.log('clicked');
    navlinks.classList.toggle('open');
    links.forEach(link=>{
      link.classList.toggle("fade");
    });
  });
}