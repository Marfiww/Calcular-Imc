function imc() {
  let peso = document.getElementById("peso");
  let altura = document.getElementById("altura");
  let resultado = document.getElementById("resultado");

  let p1 = Number(peso.value);
  let a1 = Number(altura.value);
  let m = p1 / (a1 * a1);
  resultado.innerHTML = `O seu Imc: ${m.toFixed(2)}`;
}
