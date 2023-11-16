const contenedor = document.querySelector(".ticker-title");
const items = document.querySelectorAll(".ticker-title span");
let ancho = 0;
items.forEach( item => ancho += (item.clientWidth + 50));
contenedor.style.width = ancho + "px";

let left = 0;
setInterval(()=>{
    if((left * -1) < (contenedor.children[0].clientWidth + 50)){
        left--;
    }else{
        contenedor.appendChild(contenedor.children[0]);
        left = 0;
    }
    contenedor.style.left = left + "px";
   
},1000/60);


const targetDate = new Date("October 19, 2024 14:00:00").getTime();


function updateTimer() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if(days == 1){
        document.querySelector('.days').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${days}</span> <br> día`;
    } else{
        document.querySelector('.days').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${days}</span> <br> días`;
    }
    if(hours == 1){
        document.querySelector('.hours').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${hours}</span> <br> hora`;
    } else{
        document.querySelector('.hours').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${hours}</span> <br> horas`;
    }
    if(minutes == 1){
        document.querySelector('.minutes').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${hours}</span> <br> minuto`;
    } else{
        document.querySelector('.minutes').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${hours}</span> <br> minutos`;
    }
    if(seconds == 1){
        document.querySelector('.seconds').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${seconds}</span> <br> segundo`;
    } else{
        document.querySelector('.seconds').innerHTML= `<span style="font-size:4.2rem; font-family: 'Rubik', sans-serif; font-weight:500;">${seconds}</span> <br> segundos`;
    }
    
}

updateTimer();

setInterval(updateTimer, 1000);