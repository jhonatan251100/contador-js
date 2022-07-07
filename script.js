const btn1 = document.getElementById("btn1");
const btn_zerar = document.getElementById("btn_zerar");
const btn2 = document.getElementById("btn2");
const p = document.getElementById("contador");

let contador = 0;
p.innerHTML = contador;

btn1.addEventListener("click", () => {
    p.innerHTML = ++contador;
})
btn_zerar.addEventListener("click", () => {
    p.innerHTML = contador = 0;
})

btn2.addEventListener("click", () => {
    p.innerHTML = --contador;
})
