const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    imagen=`<img src="http://assets.stickpng.com/images/580b585b2edbce24c47b2851.png" alt="imagen de una llave antigua">`
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`;
    precio=`<p>Precio: <b>$${precio}</b><p>`;
    return [imagen,nombre,modelo,precio];
}

let documentFragment=document.createDocumentFragment()
for(i=1;i<=20;i++){
    let modelo=Math.round(Math.random()*10000);
    let precio=Math.round(Math.random()*10+30);
    let llave=crearLlave(`llave ${i}`,`modelo ${modelo}`,precio);
    let div=document.createElement("DIV");
    div.addEventListener("click",()=>{document.querySelector(".key-data").value=modelo});
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML=llave[0]+llave[1]+llave[2]+llave[3]; //...llave;
    documentFragment.appendChild(div);
}
contenedor.appendChild(documentFragment);