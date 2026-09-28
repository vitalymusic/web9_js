document.body.innerHTML = "";

// 1. Elementu izveide ar JS

let jaunsVirsraksts = document.createElement('h1');
jaunsVirsraksts.textContent = "Šis virsraksts ir veidots ar JS";
document.body.appendChild(jaunsVirsraksts);
let sarakstuElementuSkaits = 10;
let izvelesElements = document.createElement('select');
for(let i = 0;i<sarakstuElementuSkaits;i++){
    let selectElements = document.createElement('option');
    selectElements.textContent = "Izvēle " + (i+1);
    selectElements.value = "Izvēle " + (i+1);
    izvelesElements.appendChild(selectElements)
}

document.body.appendChild(izvelesElements);


let bildes = [
    {
       url:"https://www.riga.lv/files/riga-s3/s3fs-public/styles/article_full_image_665x375_cut_bottom/public/gallery_images/vansu-tilts_5.jpg?h=23d49123&itok=cXcI0pRd",
       nosaukums:"Rīga" 
    },
    {
       url:"https://visitestonia.com/content-images/632200/tallina-lv-001-visit-estonia.jpg",
       nosaukums:"Tallina" 
    },
    {
       url:"https://i.jauns.lv/t/2021/09/06/2298389/1000x500.jpg?v=1630916741",
       nosaukums:"Viļņa" 
    }
]

let galerijasBloks = document.createElement('div');
galerijasBloks.classList.add("gallery");

for (bilde of bildes){
    let figure = document.createElement('figure');
    let figCaption = document.createElement('figcaption');
    figCaption.textContent = bilde.nosaukums;
    let attels = document.createElement('img');
    attels.src = bilde.url;
    attels.alt = "Attēls";
    attels.width = "250";

    figure.appendChild(attels);
    figure.appendChild(figCaption);
    galerijasBloks.appendChild(figure);

}
document.body.appendChild(galerijasBloks);

let imageElements = document.querySelectorAll('.gallery img');

for (image of imageElements){
    image.ondblclick = (e)=>{
        console.log(e.target.parentElement)
        e.target.parentElement.remove();
    }
}

// Citi elementu pievienošanas veidi

let virsraksts2 = document.createElement('h3');
virsraksts2.textContent = "Otrais virsraksts";


// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.


galerijasBloks.insertAdjacentElement('afterend',virsraksts2);
galerijasBloks.insertAdjacentHTML('beforebegin',`<div>Jauns Elements</div>`);
document.body.moveBefore(virsraksts2,jaunsVirsraksts);

for (image of imageElements){
    image.nextElementSibling.style.textAlign = "center";
}

let galerija2 = galerijasBloks.cloneNode('deep');
console.log(galerija2);
document.body.appendChild(galerija2)