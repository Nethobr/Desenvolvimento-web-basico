calcCumpom = (val, cumpom) => {
    var total = Number(val);
    var cup = Number (cumpom);
    var calc = Number((total * cup) / 100);
    return val - calc;
}

calcChashback = (valCumpom, cashBack, val) => {
    var cumpom = Number(valCumpom);
    var total = Number(val);
    var cash = Number(cashBack);
    var calc = Number(cumpom - ((total * cash) / 100));
    return total - (total - calc);
}

calcParcelado = (val, qtdParcelas) => {
    var total = Number(val);
    var parcelas = Number(qtdParcelas);

    return total / parcelas;
}

hoverDivs = () => {
    var cumpom = document.getElementById("cupomSelect").value;
    var cashBack = document.getElementById("cashSelect").value;
    var parcelado = document.getElementById("parcelado").value;

    var resCupom = document.getElementById("resCupomSelect");
    var resCash = document.getElementById("resCashSelect");
    var resParcelado = document.getElementById("pagamentoParcelado");

    if(cumpom == 1)
        resCupom.style.display = "Block";
    if(cashBack == 1)
        resCash.style.display = "Block";
    if(parcelado == 1)
        resParcelado.style.display = "Block";
}

gerarPost = () => {
    // Var do post final
    var resCondicao = document.getElementById("resCondicao");
    var resTitulo = document.getElementById("resTitulo");
    var resConfigs = document.getElementById("resConfigs");

    var resCupom = document.getElementById("resCupom");
    var resValCheio = document.getElementById("resValCheio");
    var resCupomCacl = document.getElementById("resCupomCacl");
    var resCash = document.getElementById("resCash");
    var resParcelado = document.getElementById("resParcelado");

    var resComentario = document.getElementById("resComentario");
    var resLink = document.getElementById("resLink");

    // Valores do input
    var condicao = document.getElementById("condicao").value;
    var titulo = document.getElementById("titulo").value;
    var configs = document.getElementById("configs").value;

    var selctCupom = document.getElementById("cupomSelect").value;
    var cupom = document.getElementById("cupom").value;
    var perCupom = Number(document.getElementById("perCupom").value);
    var cashback = document.getElementById("cashback").value;
    var perCash = Number(document.getElementById("perCash").value);
    var valCheio = document.getElementById("valCheio").value.replace(".", "");
    var val = parseFloat(valCheio.replace(",", "."));
    var parcelado = Number(document.getElementById("parcelado").value);
    var qtdParcelas = Number(document.getElementById("qtdParcelas").value);
    var condiParcelado = document.getElementById("condiParcelado").value;

    var comentario = document.getElementById("comentario").value;
    var link = document.getElementById("link").value;

    // Condição da oferta.
    if (condicao)
        resCondicao.innerHTML = ("<p>⭐ " + condicao + " ⭐</p>");

    // Título do produto ou oferta.
    if (titulo)
        resTitulo.innerHTML = ("<p>🔥 " + titulo + " 🔥</p>");

    // Configurações.
    if (configs)
        resConfigs.innerHTML = ("<p>🔴" + configs + "🔴</p>");

    // Pagamentos e etc.
    var cupomVal = Number(calcCumpom(val, perCupom));
    if (valCheio)
        resValCheio.innerHTML = ("💸 R$ " + val.toFixed(2) + " (Valor cheio) 💸<br>");
        // resCash.innerHTML = ("🤑 R$  " + calcChashback(cupomVal, perCash, val).toFixed(2) + " (Com cupom + Cashback: "+ cashback +" "+ perCash +"%) 🤑<br>");         

    if (cupom)
        resCupom.innerHTML = ("🎟️ CUPOM: " + cupom + " - " + perCupom + "% 🎟️<br>");
    if (selctCupom == 1) {
        resCupomCacl.innerHTML = ("💰 R$ " + cupomVal.toFixed(2) + " (Com cupom) 💰<br>");
        selctCupom = 2;
    } else if (selctCupom == 0) {
        resCupom.style.display = "none";
        resCupomCacl.style.display = "none";
        selctCupom = 2;
    }

    if (parcelado == 1)
        resParcelado.innerHTML = ("😱 R$ "+ calcParcelado(val, qtdParcelas).toFixed(2) +" em " + qtdParcelas + "x "+ condiParcelado + ". 😱<br><br>");   
    
    // Comentário da oferta.
    if (comentario)
        resComentario.innerHTML = ("<p>⭐ " + comentario + " ⭐</p>");

    // Link da oferta.
    if (link)
        resLink.innerHTML = ("<p>🔗 Link: " + link + " 🔗</p>");
};