verificaForm = () => {
    // Var's
    var nome = document.getElementById("primeiroNome").value;
    var sobrenome = document.getElementById("sobrenome").value;

    document.getElementById("teste").innerText = nome;
}   // formVefic

confirmacaoSenha = () => {
    // Var's
    var conSenha = 1;
    var senha = conSenha * 3;
    var senhaVal = document.getElementById("senha").value;
    if (senhaVal)
        senha = senhaVal;
    var conSenhaVal = document.getElementById("confirmSenha").value;
    if (conSenhaVal)
        conSenha = conSenhaVal;

    // Função para exebir no HTML
    show = (resp) => { return document.getElementById("resConfirma").innerHTML = resp; }
    
    // Condições
    if (senha == conSenha) 
    {
        resp = "Senhas iguais, prossiga!";
        show(resp);

        return 1;
    }
    else if (conSenha == 1 && senha == (conSenha * 3))
    {
        resp = "Para prosseguir, insira a senha identica a anterior!";
        show(resp);

        return 0;
    }
    else if (conSenha == "" || conSenha == null)
    {
        resp = "Para prosseguir, insira a senha identica a anterior!";
        show(resp);

        return 0;
    }
    else 
    {
        resp = "Senhas não são iguais, verifique se amabas então corretas!";
        show(resp);

        return 0;
    }   // Fim if-else
}   // Fim confirmacaoSenha

ativButton = () => {
    // Var's
    var nome = 0;
    var subNome = 0; 
    var genero = 0; 

    // Criando condições e verificando se houve um input, para assim passar o valor para a varaiável principal
    var nomeVal = document.getElementById("primeiroNome").value;
    if (nomeVal)
        nome = nomeVal;
    var sobrenomeVal = document.getElementById("sobrenome").value;
    if (sobrenomeVal)
        subNome = sobrenomeVal;
    var generoVal = document.getElementById("gen").value;
    if (generoVal)
        genero = generoVal;
    var senhaVal = document.getElementById("senha").value;
    if (senhaVal)
        senha = senhaVal;
    var conSenhaVal = document.getElementById("confirmSenha").value;
    if (conSenhaVal)
        conSenha = conSenhaVal;

    if (nome == 0 || subNome == 0 || genero == 0 || confirmacaoSenha() == 0)
    {
        document.getElementById("enviar").disabled = true;
    }
    else
    {
        document.getElementById("enviar").disabled = false;
    }   // Fim if-else
}   // Fim ativButton

exibirDados = () => {
    // Var's
    var nomeVal = document.getElementById("primeiroNome").value;
    var sobrenomeVal = document.getElementById("sobrenome").value;
    var generoVal = document.getElementById("gen").value;
    var conSenhaVal = document.getElementById("confirmSenha").value;

    if (generoVal == "F") {
        generoVal = "Feminino";
    } else if (generoVal == "M") {
        generoVal = "Masculino";
    } else {
        generoVal = "Valor indefinido";
    }   // Fim if-else

    document.getElementById("resultado").innerHTML = +
    "Nome completo: " + nomeVal + " " + sobrenomeVal + "." +
    "Genêro: " + generoVal + "." +
    "Senha: " + conSenhaVal;
}