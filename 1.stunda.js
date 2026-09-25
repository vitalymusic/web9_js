// Elementu atlase no DOM koka

let virsraksts = document.querySelector('h1');



let saturaBloks = document.querySelector('.content');
let ievadeslauks1 = document.querySelector('#skaitlis1');

// Vairāku elementu atlase

let rindkopas = document.querySelectorAll('p');

let teksts = '<img src=\"\">'; //String
let teksts2 = ` 
                    <img src=\"\">
                `;
let teksts3 = "<img src=\"\">";

let attels = document.querySelector('.content img');

// let elements  = document.getElementById('');
// let elements  = document.getElementsByClassName('');
// let jauns = document.getElementByCssSelector('content');


// console.log(jauns);

// Elementu atribūtu lasīšana/rakstīšana

// rakstīšana
virsraksts.id  = "pirmais";
attels.src = "https://picsum.photos/200";
attels.alt = "mans attēls";
saturaBloks.dataset.grozs = "pilns";

// Nolasīšana

// alert(saturaBloks.dataset.grozs)

// Elementu stilizēšana
virsraksts.style.border = "2px solid red";
virsraksts.style.fontSize = "50pt";
attels.style.width = "400px";
saturaBloks.style.backgroundColor = "#afafaf";


// virsraksts.classList.add('aktivs');

saturaBloks.classList.replace('content','bistams')


function parslegtKlasi(){

    virsraksts.classList.toggle('bistams')
    document.body.classList.toggle('aktivs')
}


function lielaBilde(){
    attels.style.width = "100%";
}

function mazaBilde(){
    attels.style.width = "10%";
}

attels.onClick = ()=>{lielaBilde()}
attels.onDblClick = ()=>{mazaBilde()}

