let inputgasolina = document.querySelector("#gasolina");
let inputalcool = document.querySelector("#alcool");
let botao = document.querySelector("#botao");
const calcularMelhorCombustivel = function(gasolina, alcool){
    let result = alcool / gasolina;
    if(result<0.7){
        return 1;
    }
    else{ return 0} 
}
botao.addEventListener("click", function(){
    let gasolina = inputgasolina.value;
    let alcool = inputalcool.value;
    let result = calcularMelhorCombustivel(gasolina, alcool);
    
    if(result==1){
    let div = document.querySelector("div");
    let paragrafo = document.createElement("p");
    div.appendChild(paragrafo);
    paragrafo.textContent = "A melhor opção é ALCOOL.";
    }
    else{
        let div = document.querySelector("div");
        let paragrafo = document.createElement("p");
        div.appendChild(paragrafo);
        paragrafo.textContent = "A melhor opção é GASOLINA.";
    }
})
    