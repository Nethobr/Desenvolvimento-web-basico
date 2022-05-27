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
    } else if ((num % 2) == 0) {
        param = "divisível por 2"
        res(num, param);
    } else if ((num % 3) == 0) {
        param = "divisível por 3"
        res(num, param);
    } else {
        param = "não é divisível por 2 e 3"
        res(num, param);
    }   // Fim if-else
}   // Fim divDoTre