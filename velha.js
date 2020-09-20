var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado'); //pega o label aonde sera escrito X ou O
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
mudarJogador('X');
function escolherQuadrado(id) {
    if (vencedor !== null) { //se já venceu então sai dessa função
        return;
    }
    var quadrado = document.getElementById(id); //pega o valor do quadrado clicado
    if (quadrado.innerHTML !== '-') { //se o quadrado clica não for '-' então saia dessa função
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if (jogador === 'X') { //se jogador atual (que clicou) for X então O se não, então X
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador); //passa o valor atual do jogador agora já trocado para a função de troca
    checaVencedor();
}
function mudarJogador(valor) {
    jogador = valor; //pega o valor recebido e dá a tal jogador atual e espera o proximo click
    jogadorSelecionado.innerHTML = jogador; //Digita X ou O do valor do jogador
}
function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}
function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}
function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}
function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }
    return eigual;
}
function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}