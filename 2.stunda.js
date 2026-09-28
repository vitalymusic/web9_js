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
    galerijasBloks.appendChild(figure)

}
document.body.appendChild(galerijasBloks);




