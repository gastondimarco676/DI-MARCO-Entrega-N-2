//variables
const peliculas = [
  { id: 1, nombre: "Penny Serenade", con: "Cary Grant", año: 1941, img: 'img/pennyserenade.jpg', url: "https://www.youtube.com/watch?v=h6fkuLIONDE"},
  { id: 2, nombre: "Suspicion", con: "Joan Fontaine", año: 1940, img: 'img/suspicion.jpg', url: "https://archive.org/details/1941suspicionsospechaalfredhitchcock" },
  { id: 3, nombre: "Cat People", con: "Simone Simon", año: 1942, img: 'img/catpeople.jpg',url:"https://ok.ru/video/1768114948666" },
  { id: 4, nombre: "Jane Eyre", con: "Orson Welles", año: 1943, img: 'img/janeeyre.jpg', url:"https://www.youtube.com/watch?v=gtadGX2OEy8&t=4388s" },
  { id: 5, nombre: "The Suspect", con: "Charles Laugthon", año: 1944, img: 'img/thesuspect.jpg', url: "https://www.youtube.com/watch?v=qpGVXCh7yd4&t=229s" },
  { id: 6, nombre: "Never Fear", con: "Ida Lupino", año: 1950, img: 'img/neverfear.jpg',url: "https://www.youtube.com/watch?v=fe7xLXHLIZ8&t=289s" }
]

let nombreUsuario = prompt("Bienvenido a CINETECA NOIR! Ingresa tu nombre por favor")
let peliculaElegida = parseInt(prompt(`${nombreUsuario}, qué película clásica quieres ver? 
Indica el número por favor:
\n 1_Penny Serenade (1941)
\n 2_Suspicion (1940)
\n 3_Cat People (1942)
\n 4_Jane Eyre (1943)
\n 5_The Suspect(1944)
\n 6_Never Fear(1950)
\n 7_Deseo encargar otra película
`))

const tenemosLaPeli = peliculas.find(peli => peli.id === peliculaElegida)
let body = document.querySelector("body")

function Mensaje(tenemosLaPeli) {
  if (peliculaElegida > 0 && peliculaElegida < 7) {
    let tuEleccion = document.createElement("div")
    tuEleccion.innerHTML = `
    <img id="img" src="${tenemosLaPeli.img}"></img>
${nombreUsuario}, has elegido ver: "${tenemosLaPeli.nombre}", del año ${tenemosLaPeli.año}, 
    protagonizada por ${tenemosLaPeli.con}.
    Que la disfrutes!
    Para ver la pelicula, presiona VER ONLINE <br/>
    <input type="button" value="VER ONLINE">`

    body.append(tuEleccion)
  }
  else if (peliculaElegida === 7) {
    let pedido = prompt(`${nombreUsuario},qué película te gustaría ver?`)
    let tuSugerencia = document.createElement("div")
    tuSugerencia.textContent = `Gracias por la sugerencia, ${nombreUsuario}!
Buscaremos "${pedido}" para que pronto la puedas ver por aquí.`
    body.append(tuSugerencia)
  }
  else { alert(`${nombreUsuario},por favor elige una opción válida`) }
}

Mensaje(tenemosLaPeli)



let input = document.querySelector("input")
input.addEventListener("click", (e)=>{
abrirVentana(peliculaElegida)
})

const abrirVentana = (peliculaElegida =>{
    window.open(`${peliculaElegida.url}`, "Youtube", "width=900", "heigth=500")
  })