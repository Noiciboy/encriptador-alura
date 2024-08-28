const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loaderBatman = d.querySelector(".loader");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonCopiar = d.querySelector(".result__btn");


const llaves =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
// funcion para encriptar
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
  for(let i = 0; i < mensaje.length; i++){
    let letra = mensaje[i];
    let encriptada = letra;
    for(let j = 0; j < llaves.length; j++){
        if(letra === llaves [j][0]){
            encriptada = llaves[j][1];
        break; 
        }

    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}
// funcion para desencriptar
function desencriptadoMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderBatman.classList.remove("hidden");
    resultadoTitulo.textContent = "Capurando Mensaje"
    resultadoText.textContent = "";
} )
//funcion boton encriptar
botonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:"

}) 

botonDesencriptar[1].addEventListener("click",(e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptadoMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:"
    botonCopiar.classList.remove("hidden");
})
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loaderBatman.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copió";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = "";


    })
});