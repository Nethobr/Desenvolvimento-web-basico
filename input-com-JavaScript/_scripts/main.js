ex_01 = () =>{
    var input = document.getElementById("nome").value;

    if (input == '') {
        document.getElementById("info").innerHTML = 'Esperando digitação...';
    } else {
        document.getElementById("info").innerHTML = 'Seu nome é '+ input +'.';
    }   // Fim if-else
}   // Fim ex_01

ex_02 = () => {
    var valor = document.getElementById("range").value;

    document.getElementById("infoRange").innerHTML = 'Seu volume é '+ valor +'.';
}   // Fim ex_02

ex_03 = () => {
    var valor = document.getElementById("comentario").value;
    var resto = 150 - valor.length;

    document.getElementById("resCom").innerHTML = resto;
}   // Fim ex_03