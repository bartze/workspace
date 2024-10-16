// Crear el ejecutor de la promesa
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};
// Define el ejecutor de la promesa
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};
//Crear la promesa
const orderSunglasses = new Promise(myExecutor);
console.log(orderSunglasses);
//Manejar la promesa con .then() y .catch()
orderSunglasses
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
//Manejar la promesa con try...catch
async function processOrder() {
  try {
    const message = await orderSunglasses;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
// Llamar a la función async
processOrder();

//setTimeout
console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log("This is the way");
};
setTimeout(usingSTO, 3000);

console.log("This is the last line of code in app.js.");
