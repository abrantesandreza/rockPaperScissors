/*Elabore o jogo do “Rock, paper, scissors” considerando o sistema “melhor de três”. Em resumo, você irá colocar dois usuários para jogar e repetir o jogo 3 vezes, 
contando quantas rodadas cada jogador venceu. Aquele que tiver mais vitórias será, de fato, o vencedor do jogo.*/

function rockPaperScissors(onGoingGame) {
    let countingPlayer1 = 0
    let countingPlayer2 = 0
    for (let i = 0; i < onGoingGame.length; i++) {
        if (onGoingGame[i] === 'x') {
            countingPlayer1++
        }
        else {
            countingPlayer2++
        }
    }
    let winnerRockPaperScissors = 0
    if (countingPlayer1 > countingPlayer2) {
        winnerRockPaperScissors = countingPlayer1
        console.log('Jogador 1 venceu!!! ' + 'Placar do jogo: ' + countingPlayer1 + ' x ' + countingPlayer2) 
    }
    else {
        winnerRockPaperScissors = countingPlayer2
        console.log('Jogador 2 venceu!!! ' + 'Placar do jogo: ' + countingPlayer1 + ' x ' + countingPlayer2)
    }
    return winnerRockPaperScissors 
}

rockPaperScissors(['x','x',0], [0,0,'x']) //Jogador 1 venceu - 2x1
rockPaperScissors(['x',0,0], [0,'x','x']) //Jogador 2 venceu - 1x2