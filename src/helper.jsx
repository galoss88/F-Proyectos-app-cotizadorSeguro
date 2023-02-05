//obtiene diferencia ed años
export function diferenciaAños(year) {
  return new Date().getFullYear() - year;
}

//calcular el total a pagar segun la marca
export function calcularMarca(marca) {
  let incremento;
  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
    case "asiatico":
      incremento = 1.05;
    default:
      break;
  }
  return incremento;
}

//calcular el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Pasar primer letra a mayuscula
export function pasarMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
