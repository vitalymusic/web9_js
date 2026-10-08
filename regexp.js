let talrunis = /^(\+371)(\d{8})$/gmi;
let persKods = /^(\d{6})(\-)(\d{5})$/gmi;
let parole = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gmi;


const textInp = document.querySelector('#textInp');
const checkBtn =  document.querySelector('#checkBtn');

checkBtn.onclick = ()=>{
    result = textInp.value.match(persKods);
    if(result){
        alert("Lauka vērtība ir pareiza");
    }else{
        alert("Dati nav pareizi");
    }
}




