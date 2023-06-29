function playGame(){

    const number1 = Math.ceil(Math.random()*5);
    const number2 = Math.ceil(Math.random()*5);

    const player1Card = document.getElementById("img1");
    const player2Card = document.getElementById("img2");

    player1Card.src = `./images/card${number1}.jpg`
    player2Card.src = `./images/card${number2}.jpg`

    const resultsHeading = document.getElementById('results');
    let winnerText = ''

    if(number1 === number2){
        winnerText = "It's a Draw!"
    } else if (number1 > number2){
        winnerText = "Player 1 Wins!"
    } else {
        winnerText = "Player 2 Wins!"
    }

    resultsHeading.textContent = winnerText;

}
