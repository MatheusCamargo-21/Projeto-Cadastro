let NAME = document.querySelector('#fname')

document.getElementById("fname").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

NAME.addEventListener("keydown", (event) =>{
    if (event.key ==  " ") {
        event.preventDefault();
    }
});

let LNAME = document.querySelector('#lname')

document.getElementById("lname").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

const CPF = document.querySelector("#CPF");

CPF.addEventListener("input", () => {
    let valor = CPF.value.replace(/\D/g, ""); 

    if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }

    CPF.value = valor
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});

let EMAIL = document.querySelector('#email')

EMAIL.addEventListener("keydown", (event)=>{
    if (event.key ==  " ") {
        event.preventDefault();
    }
});

