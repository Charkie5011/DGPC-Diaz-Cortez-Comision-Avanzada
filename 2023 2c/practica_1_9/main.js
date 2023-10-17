const root = document.getElementById("root");
let data = "";
const input = document.createElement("input");
const btn = document.createElement("button");
const h1 = document.createElement("h1");

btn.textContent = "aceptar"
root.appendChild(input);
root.appendChild(btn);
root.appendChild(h1);
// personalizar el input 
input.value = data;

input.onchange = function (ev) {
    console.log(input);
    data = ev.target.value;

}

btn.onclick = function (ev) {
    if(data ==="pedro"){
        h1.textContent = "Clave aceptada";

    }else{

        h1.textContent="clave incorrecta";
    }
}


