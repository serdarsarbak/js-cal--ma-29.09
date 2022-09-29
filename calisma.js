let blue = 50;
let number = localStorage.getItem ("sayi") ? Number(localStorage.getItem ("sayi")) : 0;
let red = localStorage.getItem ("red") ? Number(localStorage.getItem ("red")) : 100;
let green = localStorage.getItem ("green") ? Number(localStorage.getItem ("green")) : 100;

const tag = document.getElementById("background");
tag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

let counter = document.querySelector("#counter")
let artir = document.querySelector("#artir")
let azalt = document.querySelector("#azalt")

counter.innerHTML = number

let counterDOM = counter.innerHTML
artir.addEventListener ("click", myIncreaseFunction)
azalt.addEventListener ("click", myDecreaseFunction)


function myIncreaseFunction() {
    number += 1
    green *= 1.15
    red *= 0.85
    counter.innerHTML = number
    localStorage.setItem ("sayi", number)
    localStorage.setItem ("red", red)
    localStorage.setItem ("green", green)

    
    
  
    const tag = document.getElementById("background");
    tag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
function myDecreaseFunction() {
    number -= 1
    green *= 0.85
    red *= 1.15
    counter.innerHTML = number
    localStorage.setItem ("sayi", number)
    localStorage.setItem ("red", red)
    localStorage.setItem ("green", green)
   
    
    const tag = document.getElementById("background");
    tag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
}

  


