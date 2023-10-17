const root = document.getElementById("root");
console.log(root);
fetch("https://www.amiiboapi.com/api/amiibo/?name=luigi")
    .then(e => e.json()).then(d => {
        console.log(d);
        d.amiibo.map(function (e) {
            // construir
            const div = document.createElement("div");
            const img = document.createElement("img");
            const nombre=document.createElement("h2");
            const serie=document.createElement("p");


            // personalizar
            nombre.textContent= e.name;
            img.src = e.image;
            img.style.marginBottom = "22px";
            serie.textContent=e.gameSeries;
            // armado

            div.appendChild(img);
            div.appendChild(nombre);
            div.appendChild(serie);
            root.appendChild(div);
        }

        );


    });
