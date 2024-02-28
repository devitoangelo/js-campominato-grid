// prendere l'elemento dall'html
let containerList = document.getElementById(`container`)

let maxCellNumber = 100

let markup = `<div class="box"></div>`



//Creare una lista con 10 righe e per ciascuna ci saranno 10 quadrati tramite un ciclo for
    for (let i = 0; i < maxCellNumber; i++) {

        containerList.insertAdjacentHTML(`beforeend`, markup)

    }



