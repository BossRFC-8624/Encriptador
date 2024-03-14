function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCrifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCrifrado;
    titulomensaje.textContent = "Mensaje encriptado con éxito";
    parrafo.textContent = "";
    muneco.src="./pictures/Desencriptar.png";
    } else {
        muneco.src ="./pictures/encriptado.png";
        titulomensaje.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        swal("Ooops!","Debes ingresar algún mensaje","Warning");
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCrifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    if (texto.length != 0) {
        document.getElementById("texto").value=textoCrifrado;
        titulomensaje.textContent = "Mensaje desencriptado con éxito";
        parrafo.textContent = "";
        muneco.src="./pictures/desen.png";
    } else {
        muneco.src ="./pictures/encriptado.png";
        titulomensaje.textContent = "Ningún mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        swal("Ooops!","Debes ingresar algún mensaje","Warning");
    }
}