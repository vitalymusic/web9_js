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

virsraksts.id  = "pirmais";
attels.src = "https://picsum.photos/200";
saturaBloks.dataset.grozs = "pilns";





