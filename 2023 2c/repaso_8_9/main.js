// items de menu
const menuContenido = [{ text: "Inicio", action: function () { dibujarInicio() } },
{ text: "Información", action: function () { dibujarInfo() } },
{ text: "actividades", action: function () { dibujarActivad() } },
    , { text: "contacto", action: function () { dibujarContacto() } }];

// crear 
const root = document.getElementById("root");
const workspace = document.createElement("div");
const wspMenu = document.createElement("div");
const at = document.createElement("div");

// personalizar
at.id = "workspace";

// armar
workspace.appendChild(wspMenu);
workspace.appendChild(at);

root.appendChild(workspace);

function borrarAt(idVictima) {
    // 1) consigo la victima que va a ser borrado su contenido
    console.log("estoy borrando el area de trabajo")
    const target = document.getElementById(idVictima);// ok 

    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

}

function crearHtmlParaInicio() {
    console.log("estoy creando el html necesario");
    // voy a poner un cartel h1 con texto de inicio 
    // voy a poner una foto corporativa
    const cajita = document.createElement("div");
    const cartel = document.createElement("h2");
    const foto = document.createElement("img");
    cartel.textContent = "Bienvenido a la aplicación que hace humo";
    foto.src = "images/foto.jpg";
    cajita.appendChild(cartel);
    cajita.appendChild(foto);
    at.appendChild(cajita);
}

function dibujarInfo() {
    // 1) borrar el at 
    // 2) crear js para info 
    borrarAt("workspace");
    console.log("estoy dibujando info");
    const cartel = document.createElement("h1");
    cartel.textContent = "Info de humo";
    at.appendChild(cartel);

}

function dibujarInicio() {
    // 1) borrar area trabajo
    // 2) crear el js para generar el html de inicio
    borrarAt("workspace");
    crearHtmlParaInicio();
}

function dibujarMenu() {
    const ulMenu = document.createElement("ul");
    ulMenu.style.listStyle = "none";
    ulMenu.style.display = "flex"
    menuContenido.map(el => {
        const li = document.createElement("li");
        li.style.marginLeft = "8px"

        const a = document.createElement("a");
        a.className="menuItem";
        a.textContent = el.text;
        a.id = "label" + el.text;
        li.id = "li" + el.text;
        li.onclick = el.action;
        li.className = "liMenu";
        li.appendChild(a);
        ulMenu.appendChild(li);

    }

    );

    wspMenu.appendChild(ulMenu);
}

dibujarMenu();