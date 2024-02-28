// prendere l'elemento dall'html
let containerList = document.getElementById(`container`)

let maxCellNumber = 100

let markup = `<div class="box"></div>`



//Creare una lista con 10 righe e per ciascuna ci saranno 10 quadrati tramite un ciclo for
for (let i = 0; i < maxCellNumber; i++) {

    containerList.insertAdjacentHTML(`beforeend`, markup)

}


//assegno alla ai quadrati una classe box per poterli asseganre un colore diverso
const boxsElements = document.getElementsByClassName(`box`)
console.log(boxsElements);


//tramite una funzione assegniamo il bg-colo alle classi box

for (let i = 0; i < boxsElements.length; i++) {
    const element = boxsElements[i];
    console.log(element);
    element.addEventListener(`click`,function() {
        element.style.backgroundColor = `skyblue`;
    }) 
}


