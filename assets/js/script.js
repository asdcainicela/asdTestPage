
const menuToggle= document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
const banner = document.querySelector('.banner');



menuToggle.onclick= function(){
    navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active') 
}
list.forEach((item)=>
item.addEventListener('mousemove',activarLink)// click
)

//efecto paraflex
/*
let scene=document.getElementsByClassName('scene');
let textMovil= document.getElementById('textMovil');
let parallaxInstanceScene= new Parallax(scene);
let parallaxInstanceText= new Parallax(textMovil);*/
//
 
//cafecito
/*
function OcultarLoader(){
    document.getElementById("loading").remove();
}
setTimeout(()=>{
    OcultarLoader();
},2500)*/





// portfolio
/*const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;*/

//funcion para calcular el valor de la posicion del mouse en ralacion a la ventana actual.
/*const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;
document.addEventListener("mousemove", ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);
    cards.style.transform = `rotateX(${yValue/20}deg) rotateY(${xValue/20}deg)`;
    [].forEach.call(images, (item) => {
      item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });
    [].forEach.call(backgrounds, (item) => {
      item.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}`;
    });
  });
},false);
*/