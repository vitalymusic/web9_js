function raditLaiku(){
let laiks = new Date();

// let tekosais = Date.now(); //Dod tekoso laiku milisekundēs

// let pec4stundam = tekosais+(1000*60*60*4);

// let menesi3Atp = tekosais - (1000*3600*24*30*3);

let laikaObjekts = {
    datums: laiks.getDate(),
    menesis: laiks.getMonth()+1,
    gads: laiks.getFullYear(), 
    stundas: laiks.getHours(),
    minutes: laiks.getMinutes(),
    sekundes: laiks.getSeconds()
}

document.querySelector('.laiks').innerHTML = `
    ${String(laikaObjekts.datums).padStart(2,'0')}.
    ${laikaObjekts.menesis}.
    ${laikaObjekts.gads} 
    ${laikaObjekts.stundas}:
    ${laikaObjekts.minutes}:
    ${laikaObjekts.sekundes}
`;

}
raditLaiku();
setInterval(raditLaiku,1000)

// console.log(laiks, new Date(pec4stundam), new Date(menesi3Atp));
console.log(laikaObjekts);

// Datuma objekta izveide no skaitļiem

// Date.UTC(year)
// Date.UTC(year, monthIndex)
// Date.UTC(year, monthIndex, day)
// Date.UTC(year, monthIndex, day, hours)
// Date.UTC(year, monthIndex, day, hours, minutes)
// Date.UTC(year, monthIndex, day, hours, minutes, seconds)
// Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)