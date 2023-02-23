let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

const increment = () =>{
    counter += 1;
    countEl.textContent = counter;
}

const save = () =>{
    previousEnteries = + counter + " - ";
    saveEl.textContent += previousEnteries;
    countEl.textContent = 0;
    counter = 0;
} 