//3. Crea una página web que te pregunte de qué quieres saber el precio. Puede
//ser una tienda de ropa, un supermercado, una ferretería… En función de la
//contestación del cliente te responde con el precio. Este ejercicio se valorará
//más positivamente con un switch.
//Extra: ¿qué pasa con los idiomas, vas a escribir en castellano, inglés?
//Extra: ¿qué pasa con las mayúsculas, minúsculas?

let articulo = prompt("Estás en la tienda de chucherías Don Pimpon ¿Qué artículo quieres saber el precio?").trim().toLowerCase();

function calcularPrecio(articulo) {
    switch (articulo.toLowerCase()) {
        case "chufas":
        case "tiger nuts":
            alert("El precio de las chufas es: 46.59€");
            break;
        case "chimos":
        case "chewy candy":
            alert("El precio de los chimos es: 59.95€");
            break;
        case "chiques chein":
        case "chein gun":
            alert("El precio de los chiques chein es: 32.99€");
            break;
        case "pipas":
        case "seeds":
        case "Sunflower seeds":
            alert("El precio de las pipas es: 28.50€");
            break;
        case "ColaJet":
            alert("El precio del ColaJet es: 95.42€");
            break;
        case "Flash":
            alert("El precio del flash es: 21.64€");
            break;
        default:
            alert("Artículo no encontrado.");
    }
  }
  
  calcularPrecio(articulo);