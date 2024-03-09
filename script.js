const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const borrarH1 = document.querySelector(".mensaje-vacio h1");
const borrarP = document.querySelector(".mensaje-vacio p");

function encriptar(stringEncriptado){
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    limpiarCampo();
}

function limpiarCampo(){
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
    borrarH1.innerHTML = "";
    borrarP.innerHTML = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]];

        stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
    limpiarCampo();
}

const elemento = document.getElementById('mensaje');

document.getElementById('btn-copiar').addEventListener('click', ()=>{
    document.querySelector('.copiado').classList.add('mostrar');
    copyText(elemento);
    setTimeout(() => {
        document.querySelector('.copiado').classList.remove('mostrar');
    }, 700);
});

function copyText(elemento){
    elemento.focus();
    elemento.select();
    document.execCommand('copy');
}





