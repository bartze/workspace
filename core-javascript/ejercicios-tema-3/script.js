//1. ¿Se puede escribir un switch como un bloque de if?
//Si la respuesta anterior es sí, pon un ejemplo (lo bueno, si breve…)
//Si la respuesta anterior es sí, ¿Qué mejoras o desventajas ofrece cada manera? ¿Cuál usarías en cada caso?
const starWars = "The Mandalorian";
//Con Switch
switch (starWars) {
    case "The Mandalorian":
        console.log(`${starWars} es una obra maestra`);
        break;
    case "The Bad Batch":
        console.log(`${starWars} es la mejor serie`);
        break;
    case "Trilogía de Rey":
        console.log(`${starWars} son tan buenas como yo programando`);
        break;
    default:
        console.log(`${starWars} saga desconocida`);
}
//Con If
if (starWars === "The Mandalorian") {
    console.log(`${starWars} es una obra maestra`);
} else if (starWars === "The Bad Batch") {
    console.log(`${starWars} es la mejor serie`);
} else if (starWars === "Trilogía de Rey") {
    console.log(`${starWars} son tan buenas como yo programando`);
} else {
    console.log(`${starWars} saga desconocida`);
}
//Usaría switch para casos más largos, como días de la semana. Por lo general usaría if, me parece más claro

//2. Crea una página web que te haga dos preguntas por medio del prompt y
//que en caso de que respondas bien a las dos, te lo haga saber. De la misma
//manera, si fallas en alguna te contestará con una negativa. 

let pregunta1 = prompt("¿Cuál es la mejor serie de Star Wars?").trim().toLowerCase();
let pregunta2 = prompt("¿Qué serie de Star Wars es una obra maestra?").trim().toLowerCase();
let respuesta1 = "the bad batch";
let respuesta2 = "the mandalorian"
if (pregunta1===respuesta1 && pregunta2===respuesta2) {
    alert("This is the way");
} else alert("Dan Farrik!");



