function restart() {
    winner = null;
    selectedWinner.innerHTML = ''; //torna nulo os campos modificados
    for (var i = 1; i <= 9; i++) { //percorre o campo limpando
        var square = document.getElementById(i);
        square.style.background = "";
        square.style.color = '#CCAF99';
        square.innerHTML = '-';
    }
    playerChanger('X');
}