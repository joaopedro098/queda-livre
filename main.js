const gravidade=9.8
let tempo=prompt("informe tempo em segundos:")
let distancia=(0.5*gravidade*tempo*tempo)
let queda = document.querySelector("#queda")
queda = queda.textContent
console.log(queda)

alert(Math.round(distancia)+"metros")