var myHeaders = new Headers();
myHeaders.append("X-API-KEY", "02ebd124-d82b-484b-9e43-aa442c5bd95e");
console.log(myHeaders);
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
console.log(requestOptions.headers);
var root = document.getElementById("root");

function createControls() {
  const root = document.getElementById("root");

  const divHeader = document.createElement("header");
  const divBusqueda = document.createElement("div");//donde va lo que pedí
  const h1Title = document.createElement("h1");
  const inputPagina = document.createElement("input");
  inputPagina.type = "number";
  const lblPagina = document.createElement("a");
  const lblCantPagina = document.createElement("a");
  const inputPerPage = document.createElement("input");
  inputPerPage.type = "number"
  const btnBuscar = document.createElement("button");

  divHeader.className = "header";
  h1Title.id = "titulo";

  inputPagina.className = "header inputPagina";
  inputPerPage.className = "header inputPagina";

  
  lblPagina.textContent = "página"
  lblPagina.className = "header";
  lblCantPagina.className = "header";
  
  lblCantPagina.textContent = "cantidad por página";
  
  btnBuscar.className = "header";
  btnBuscar.id="btnBuscar";
  
  h1Title.textContent = "Ejemplo JWST";

  btnBuscar.textContent = "buscar";


  //eventos
  btnBuscar.onclick=function(ev){
    const pagina = inputPagina.valueAsNumber;
    const cantPorPagina = inputPerPage.valueAsNumber;
    console.log(pagina);
    console.log(cantPorPagina);
    clear(divBusqueda);
    showSearch(pagina,cantPorPagina,divBusqueda);
  }
  divHeader.appendChild(h1Title);
  divHeader.appendChild(lblPagina);
  divHeader.appendChild(inputPagina);
  
  divHeader.appendChild(lblCantPagina);
  divHeader.appendChild(inputPerPage);

  divHeader.appendChild(btnBuscar);

  
  root.appendChild(divHeader);
  root.appendChild(divBusqueda);
}

function clear(target)
{
  while(target.firstChild)
  {
    target.remove(firstChild);
  }
}

function showSearch(pagina, cantidad, contenedor) {

  fetch(`https://api.jwstapi.com/all/type/jpg?page=${pagina}&perPage=${cantidad}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      result.body.map(function (e) {

        const div = document.createElement("div");
        const img = document.createElement("img");
        const desc = document.createElement("p");

        div.className = "fichaDiv";
        img.className = "fichaImg";
        desc.className ="fichaDesc";

        img.src = e.location;
        desc.textContent = e.details.description;

        div.appendChild(img);
        div.appendChild(desc);
        contenedor.appendChild(div);
      })
    })
    .catch(error => console.log('error', error));
}

createControls();