// Atividade 1
ordemCresc = () =>{
    // Var's
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);

    if (n1 >= n2){
        document.getElementById("menor").innerHTML = "menor ("+n2+")";
        document.getElementById("maior").innerHTML = "maior ("+n1+")";
    } else{
        document.getElementById("menor").innerHTML = "menor ("+n1+")";
        document.getElementById("maior").innerHTML = "maior ("+n2+")";
    }   // Fim if-else
}   // Fim ordemCresc

// Atividade 2
pesoIdealM = () =>{
    //Var's
    var alt = Number(document.getElementById("mNum").value);

    // Função para não repetir o calculo
    calc = (val) => { return ((62.1 * val) - 44.7); }

    if (alt > 100) {
        alt = alt/100;
        var res = calc(alt);
    } else if (alt > 10 && alt < 100) { 
        alt = alt/10;
        var res = calc(alt);
    } else {
        var res = calc(alt);
    }   // Fim if-else

    // Imprimindo no HTML
    document.getElementById("resM").innerHTML = res.toFixed(2).replace(".", ",") + " kg.";
}   // Fim pesoIdealM
pesoIdealH = () =>{
    //Var's
    var alt = Number(document.getElementById("hNum").value);

    // Função para não repetir o calculo
    calc = (val) => { return ((72.7 * val) - 44.7); }

    if (alt > 100) {
        alt = alt/100;
        var res = calc(alt);
    } else if (alt > 10 && alt < 100) { 
        alt = alt/10;
        var res = calc(alt);
    } else {
        var res = calc(alt);
    }   // Fim if-else

    // Imprimindo no HTML
    document.getElementById("resH").innerHTML = res.toFixed(2).replace(".", ",") + " kg.";
}   // Fim pesoIdealH

// Atividade 3
menorNum = () => {
    // VAR'S
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var menor = Number(0);

    // Condições
    if (num1 < num2 && num1 < num3) { menor = num1; }
    else if (num2 < num1 && num2 < num3) { menor = num2; }
    else { menor = num3; }

    if (menor != 0){
        document.getElementById("resultado").innerHTML = menor + ".";
    }   // Fim if
}   // Fim menorNum

// Atividade 4
posiNeg = () => {
    //VAR'S
    var num = Number(document.getElementById("num").value);
    
    // Condições
    if (num > 0){
        // Var's
        var temp = num % 2;
        var qual = "";

        // Condições
        if (temp == 0){
            qual = "par";
        } else {
            qual = "impar";
        }
        // Imprimindo
        document.getElementById("resultado").innerHTML = ("O número selecionado é " + qual + ".");
    } else if (num == 0) {
        // Imprimindo
        document.getElementById("resultado").innerHTML = ("Informe um número positivo ou negativo.");
    } else {
        // Var's
        var val = Math.abs(num);

        // Imprimindo
        document.getElementById("resultado").innerHTML = ("O número tem como seu valor absoluto: " + val + ".");
    }   // Fim if-else
}   // Fim posiNeg

// Atividade 5
divDoTre = () => {
    //VAR'S
    var num = Number(document.getElementById("num").value);

    // Função que retorna o resultado
    res = (num, param) => {
        document.getElementById("resultado").innerHTML = ("O número " + num + " " + param + ".");
    }   // Fim res

    if ((num % 3) == 0 && (num % 2) == 0) {
        param = "divisível por 2 e 3"
        res(num, param);
    } else {
        param = "não é divisível por 2 e 3"
        res(num, param);
    }   // Fim if-else
}   // Fim divDoTre

// Atividade 6
divDoSet= () => {
    //VAR'S
    var num = Number(document.getElementById("num").value);

    // Função que retorna o resultado
    res = (num, param) => {
        document.getElementById("resultado").innerHTML = ("O número " + num + " " + param + ".");
    }   // Fim res

    if ((num % 2) == 0 && (num % 7) == 0) {
        param = "divisível por 2 e 7"
        res(num, param);
    } else if ((num % 2) == 0) {
        param = "divisível por 2"
        res(num, param);
    } else if ((num % 7) == 0) {
        param = "divisível por 7"
        res(num, param);
    } else {
        param = "não é divisível por 2 e 7"
        res(num, param);
    }   // Fim if-else
}   // Fim divDoTre

// Atividade 7
diaSemana = () => {
    //Var's
    var dia = Number(document.getElementById("dia").value);

    show = (val) => { return document.getElementById("resultado").innerHTML = ("O dia é " + val);}

    switch (dia){
        case 1:
            show("Domingo");
        break;
        case 2:
            show("Segunda-feira");
        break;
        case 3:
            show("Terça-feira");
        break;
        case 4:
            show("Quarta-feira");
        break;
        case 5:
            show("Quinta-feira");
        break;
        case 6:
            show("Sexta-feira");
        break;
        case 7:
            show("Sábado");
        break;

        default:
            document.getElementById("resultado").textContent = "Dia não registrado."
        break;
    }
}   // Fim diasSemana;

// Atividade 8
calcPar = () => {
    var soma = Number(0);

    for (var i = 0; i <= 20; i++)
    {
        if ((i % 2) == 0)
        {
            soma += i;
        }
    }   // Fim for

    document.getElementById("resultado").innerHTML = (soma);
}   // Fim calcPar

// Atividade 9
tabuada = () => {

    var num = Number(document.getElementById("num").value);

    var resposta = document.getElementById('resposta');

    var tabuada = '';
  
    for(var i=1; i<=10 ; i++)
    {
        tabuada += num + " x " + i + " = " + num*i + ".<br>";
    
        resposta.innerHTML = tabuada
    }
    document.getElementById("resNum").innerHTML = ("Tabuada do " + num + ".");
}   // calcTabuada

// Atividade 10
fatorial = () => {

    var num = Number(document.getElementById("num").value);

    var resposta = document.getElementById('resposta');

    var temp = Number(1);

    var fat = '';
  
    for(var i = num; i > 0 ; i--)
    {
        if (i != 1){
            fat += i + " * ";
        }
        else {
            fat += i + " = ";
        }
    
        temp =+ temp * i;
        resposta.innerHTML = fat
    }
    document.getElementById("resNum").innerHTML = ("Fatorial de " + num + ".");
    document.getElementById("final").innerHTML = (temp + " e 0! = 1.");
}   // fatorial