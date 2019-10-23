
// Llamada Http con get

function httpGet(theUrl, callback) {
    console.log("Ejecutando peticion a " + theUrl)
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl);
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
    xmlHttp.send();

}

function procesaResultadoRepos(objDatosRepo){
     console.log(objDatosRepo);

   
//for  
document.querySelectorAll(".name") .innerHTML.replace("<div id=nombreUsuario></div>");
}





function procesaResultado(objDatos) {
    console.log(objDatos);
    objDatos["avatar_url"] //foto
    objDatos["name"] //nom gran
    objDatos["bio"] //bio
    `@${objDatos["login"]}`//user amb arroba




    //busca repos
    let usuario = document.getElementById("textoFormulario").value; 
    httpGet("https://api.github.com/users/"+usuario+"/repos", procesaResultadoRepos);

}


let botonCarta = document.querySelectorAll(".botonSearch")[0];

botonCarta.addEventListener("click", function () {
        let usuario = document.getElementById("textoFormulario").value;

    httpGet("https://api.github.com/users/" + usuario, procesaResultado); 



});


