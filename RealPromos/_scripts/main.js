calcCumpom = (val, cumpom) => {

    var total = Number(val);
    var cup = Number (cumpom);

    return (total * cup) / 100;
}

calcChashback = (valCumpom, cashBack) => {

    var cumpom = Number(valCumpom);
    var cash = Number(cashBack);

    return (cumpom * cash) / 100;
}

parcelado = () => {
    var teste = Number(document.getElementById("parcelado").value);

    var form = document.getElementById("pagamentoParcelado");

    if (teste == 1) {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

hoverDivs = () => {
    var formAvista = document.getElementById("pagamentoParcelado");
    formAvista.style.display = "none";
}

gerarPost = () => {
    // Var do post final
    var resCondicao = document.getElementById("resCondicao");
    var resTitulo = document.getElementById("resTitulo");
    var resValCheio = document.getElementById("resValCheio");
    var resCupom = document.getElementById("resCupom");
    var resParcelado = document.getElementById("resParcelado");
    var resComentario = document.getElementById("resComentario");
    var resLink = document.getElementById("resLink");

    // Valores do input
    var condicao = document.getElementById("condicao").value;
    var titulo = document.getElementById("titulo").value;
    // var valCheio = document.getElementById("valCheio").value.replace(".", "");
    // var val = parseFloat(valCheio.replace(",", "."));
    var cupom = document.getElementById("cupom").value;
    // var perCupom = Number(document.getElementById("perCupom").value);
    // var parcelado = Number(document.getElementById("parcelado").value);
    // var qtdParcelas = Number(document.getElementById("qtdParcelas").value);
    // var comentario = document.getElementById("comentario").value;
    // var link = document.getElementById("link").value;

    if (condicao)
        resCondicao.innerHTML = ("<p>⭐ " + condicao + " ⭐</p>");

    if (titulo)
        resTitulo.innerHTML = ("<p>🔥 " + titulo + " 🔥</p>");
        // resTitulo.innerHTML = ("<p>🔥 " + titulo + " 🔥</p>");

    if (cupom)
        resCupom.innerHTML = ("🎟️ CUPOM: " + cupom + " - " + perCupom + "%<br>");

    if (valCheio)
        resValCheio.innerHTML = ("💸 R$ " + val + " (Valor cheio)<br>");
        resCupom.innerHTML = ("💰 R$ " + calcCumpom(val, perCupom) + " (Com cupom)");
        resCash.innerHTML = ("🤑 R$  " + calcChashback(calcCumpom(val, perCupom), perCash) + " (Com cupom + cashback)<br>");         
    if (parcelado == 1)
        resParcelado.innerHTML = ("😱 R$ XXXXX em " + qtdParcelas + "x "+ 'condição, ex:. sem juros.'+ "<br>");   
    
    if (comentario)
        resComentario.innerHTML = ("<p>⭐ " + comentario + " ⭐</p>");

    if (link)
        resLink.innerHTML = ("<p>Link: " + link + "</p>");

}