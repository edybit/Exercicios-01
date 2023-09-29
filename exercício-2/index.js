let inputBase = document.querySelector("#base");
let inputExpoente = document.querySelector("#expoente");
let botao = document.querySelector("#botao");
let calcularPotencia = function(){
    let base = inputBase.value;
    let expoente = inputExpoente.value;
    let result = Math.pow(base, expoente);
    return result;
}
botao.addEventListener("click", function(){
    result = calcularPotencia();
    let div = document.querySelector("div");
    let paragrafo = document.createElement("p");
    div.appendChild(paragrafo);
    paragrafo.textContent = `O resultado da potência é ${result}`;
})