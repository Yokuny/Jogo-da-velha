var player, winner = null;
var selectedPlayer = document.getElementById('selected-player'); //pega o label aonde sera escrito X ou O
var selectedWinner = document.getElementById('selected-winner');
playerChanger('X');
function SelectSquare(id) {
    if (winner !== null) { //se já venceu então sai dessa função
        return;
    }
    var square = document.getElementById(id); //pega o valor do square clicado
    if (square.innerHTML !== '-') { //se o square clica não for '-' então saia dessa função
        return;
    }
    square.innerHTML = player;
    square.style.color = 'black';
    if (player === 'X') { //se player atual (que clicou) for X então O se não, então X
        player = 'O';
    } else {
        player = 'X';
    }
    playerChanger(player); //passa o valor atual do player agora já trocado para a função de troca
    winnerCheck();
}
function playerChanger(value) {
    player = value; //pega o valor recebido e dá a tal player atual e espera o proximo click
    selectedPlayer.innerHTML = player; //Digita X ou O do valor do player
}
function winnerCheck() {
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);
    if (sequenceCheck(square1, square2, square3)) {
        squareColorChanger(square1, square2, square3);
        winnerChanger(square1);
        return;
    }
    if (sequenceCheck(square4, square5, square6)) {
        squareColorChanger(square4, square5, square6);
        winnerChanger(square4);
        return;
    }
    if (sequenceCheck(square7, square8, square9)) {
        squareColorChanger(square7, square8, square9);
        winnerChanger(square7);
        return;
    }
    if (sequenceCheck(square1, square4, square7)) {
        squareColorChanger(square1, square4, square7);
        winnerChanger(square1);
        return;
    }
    if (sequenceCheck(square2, square5, square8)) {
        squareColorChanger(square2, square5, square8);
        winnerChanger(square2);
        return;
    }
    if (sequenceCheck(square3, square6, square9)) {
        squareColorChanger(square3, square6, square9);
        winnerChanger(square3);
        return;
    }
    if (sequenceCheck(square1, square5, square9)) {
        squareColorChanger(square1, square5, square9);
        winnerChanger(square1);
        return;
    }
    if (sequenceCheck(square3, square5, square7)) {
        squareColorChanger(square3, square5, square7);
        winnerChanger(square3); //passa o conteudo do square
    }
}
function winnerChanger(square) {
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner; //winner recebe o valor do winner X ou O
}
function squareColorChanger(square1, square2, square3) {
    square1.style.background = '#0f0';
    square2.style.background = '#0f0';
    square3.style.background = '#0f0';
    square1.style.color = '#105B63';
    square2.style.color = '#105B63';
    square3.style.color = '#105B63';
}
function sequenceCheck(square1, square2, square3) {
    var equal = false;
    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        equal = true; //a linha de square forem todas iguais então
    }
    return equal;
}