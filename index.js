let height = 168;
let weight = 65;

const conversionFactor = 0.01; // declarar quando explicar que precisa transformar altura de cm para metros

height *= conversionFactor;

const imc = weight / (height * height);

console.log(imc);
