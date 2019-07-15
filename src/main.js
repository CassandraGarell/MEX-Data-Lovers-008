const data = RICKANDMORTY.results;
const card = document.getElementById("rick-mory-card");
const buttonRicks = document.getElementById("button-ricks");
const buttonMorty = document.getElementById("button-morty");
const buttonOtros = document.getElementById("button-otros");
const odrenar = document.getElementById("ordenar");


let dataSee = (data) => {
    let str = ''
    data.forEach(element => {
        console.log(element)
        str +=`<div class="card"><p> Nombre: ${element.name}<p>
        <p>Estado: ${element.status}<p>
        <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src ="${element.image}" id="imagen"> </div>`


    });
    card.innerHTML = str
}
dataSee(data)

let resultRick = (data) => {
    // let userElectionRick = buttonRicks.dataset.text;
    // console.log(userElectionRick)
    let result = window.dataManager.filterRick(data);
    let str = ''
    result.forEach(element => {
        // console.log(element);
        str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonRicks.addEventListener('click', () => {
    resultRick(data)
});

let resultMorty = (data) => {
    // let userElectionRick = buttonRicks.dataset.text;
    // console.log(userElectionRick)
    let result = window.dataManager.filterMorty(data);
    let str = ''
    result.forEach(element => {
        // console.log(element);
        str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonMorty.addEventListener('click', () => {
    resultMorty(data)
});

let resultOtros = (data) => {
    // let userElectionRick = buttonRicks.dataset.text;
    // console.log(userElectionRick)
    let result = window.dataManager.filterOtros(data);
    let str = ''
    result.forEach(element => {
        // console.log(element);
        str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonOtros.addEventListener('click', () => {
    resultOtros(data)
});

odrenar.addEventListener("change", () => {
    let az =odrenar.value;
    let orderResult = window.dataManager.orderAz(data,az);
    dataSee(orderResult);
    }
    )