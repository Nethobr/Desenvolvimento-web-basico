btnAtiv = (status) => {
    var num = Number(status);
    if (num == 0) {
        document.getElementById("enviar").disabled = true;
    } else {
        document.getElementById("enviar").disabled = false;
    }   // Fim if-else
}   // Fim btnTeste

verificaForm = () => {
    // Var's
    var nome = document.getElementById("primeiroNome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    var gen = document.getElementById("gen").value;

    var senha = document.getElementById("senha").value;
    var conSenha = document.getElementById("conSenha").value;

    // Corpo
    if (nome == null || sobrenome == null || gen == null || senha == null || conSenha == null) {
        btnAtiv(0);
    } else {
        btnAtiv(1);
    }
}   // formVefic
seePass = () => {
    document.getElementById("conSenha").type="text"; 
}