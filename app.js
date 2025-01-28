// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    resultado.innerHTML = "";
    let nombre = document.getElementById("amigo").value;
    if(nombre === ''){
        alert("Por favor inserte un nombre");
    }
    listaNombres.push(nombre);
    let amigo = document.createElement("li");
    amigo.innerHTML = nombre;
    listaAmigos.append(amigo);
    document.getElementById("amigo").value = "";
    console.log(listaNombres)
}

function sortearAmigo(){
    if(listaNombres.length === 0 ){
        alert("No Hay amigos en la lista");
    }else{
        let numeroAleatorio = Math.floor(Math.random() * listaNombres.length );
        let amigoSorteado = listaNombres[numeroAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigoSorteado;
        listaAmigos.innerHTML = "";
        listaNombres = [];
    }
}