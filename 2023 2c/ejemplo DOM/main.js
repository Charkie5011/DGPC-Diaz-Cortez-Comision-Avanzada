// fuente https://api.nasa.gov/

const root = document.getElementById("root");

let valorDiaSolar = "0";
const apiKey = "37ccaAyHz8WgTXgk5Vd2RQ7PFUzGcEHHu3bzFbec"; // Reemplaza "TU_API_KEY" con tu propia API key
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/planetary/apod&?api_key=37ccaAyHz8WgTXgk5Vd2RQ7PFUzGcEHHu3bzFbec
const url = "https://api.nasa.gov/planetary/apod?api_key=";
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=DEMO_KEY

let url2 =
  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${valorDiaSolar}&api_key=`;
//https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY
// 
const url3 = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=";
// console.log(`${url3}${apiKey}`);
//

//
function creaHeader() {
  const cajaHeader = document.createElement("div");
  const input = document.createElement("input");
  const boton = document.createElement("button");
  const p1 = document.createElement('label');
  const p = document.createElement('p');
  p1.textContent="Imagenes del dia:";
  p1.style.marginLeft="4px";

  p.textContent="0";
  p.id="pepe";
  p.style.marginLeft="4px";
  // <input type="text" value="" />
  input.type = "text";
  input.value = valorDiaSolar;
  input.onchange = function (ev) {
    valorDiaSolar = ev.target.value;
    console.log(valorDiaSolar);
  }
  // <button   type="submit"  onclick="fclick" >Aceptar</button>
  boton.textContent = "Aceptar";
  boton .style.marginLeft="4px";
  

  boton.onclick = function (ev) {
    ev.preventDefault();
    borrar();
    creaHeader();
    creaContenido();

  }
  cajaHeader.style.display="flex";
  
  cajaHeader.appendChild(input);
  cajaHeader.appendChild(boton);
  cajaHeader.appendChild(p1);
  cajaHeader.appendChild(p);
  root.appendChild(cajaHeader);
}



function creaContenido() {

  const url =  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${valorDiaSolar}&api_key=${apiKey}`;
  console.log(url);
  fetch(`${url}`)
    .then((response) => response.json()
    )
    .then((data) => {
      console.log("paso data");

      console.log(data);
      // Hacer algo con los datos obtenidos
      dibujarImg(data);
      // dibujarPNG(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
function dibujarImg(data) {
  const cajaImg=document.createElement("div");
  cajaImg.style.marginTop="12px";
  const photos = data.photos;
  const p = document.getElementById("pepe");
  p.textContent= photos.length.toString();
  photos.map((each) => {
    const caja = document.createElement("div");
    caja.style.width="25  %";
    caja.style.auto="auto";
    const img = document.createElement("img");
    img.src = each.img_src;
    caja.appendChild(img)
    cajaImg.appendChild(caja);
  });
  root.appendChild(cajaImg);
}
function dibujarPNG(data) {
  const img = document.createElement("img");
  console.log(typeof data);
  img.src = 'data:image/png;base64,' + btoa(unescape(encodeURIComponent(data)));
  root.appendChild(img);

}
function borrar() {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }
}
creaHeader();