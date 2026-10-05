// coockies
let seconds = 60*60*24*7;
document.cookie = `nosaukums=teksts;max-age=${seconds}`;

let cookieTeksts = document.cookie.split("=")
console.log(cookieTeksts);


// localStorage.clear();

localStorage.setItem("username","Vitalijs");

let grozs = [
    {
        nosaukums:"Dators i7",
        daudzums:2,
        cena:1200
    },
     {
        nosaukums:"Monitors",
        daudzums:2,
        cena:250
    },
]
localStorage.setItem("grozs",JSON.stringify(grozs))

localStorage.setItem("valoda","lv");


window.onscroll = ()=>{

    console.log(scrollY);
    if(scrollY<=311){
        document.body.style.background = "red";
    }else if(scrollY>311 && scrollY<=515.5){
         document.body.style.background = "green";
    }else{
         document.body.style.background = "";
    }

}

window.onresize = ()=>{
    document.body.innerHTML+="Loga izmērs ir "+ window.innerWidth + " X " + window.innerHeight+"<br>";
}

// setTimeout(()=>{
//     window.location.href = "https://ss.com";
// },5000)

setInterval(()=>{
    window.location.reload();
},5000)