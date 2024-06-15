const conversionFactor = 0.01; // declarar quando explicar que precisa transformar altura de cm para metros

function calculateIMC(person) {
  let height = person.height;
  let weight = person.weight;

  height *= conversionFactor;

  const imc = weight / (height * height);

  const result = "O resultado do IMC é de " + imc;
  const isHealthy = true;

  return {
    name: person.name,
    imc,
    result,
    isHealthy,
  };
}

console.log(calculateIMC({ name: "Fabio", height: 168, weight: 65 }));
