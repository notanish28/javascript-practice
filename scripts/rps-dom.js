let maintainScore = JSON.parse(localStorage.getItem('maintainScore')) || 
        {
            wins: 0,
            loses: 0,
            ties: 0
        };

        function playGame(playerMove) {
            let computerChoice = computerMove();
            let result = '';

            if (playerMove === 'Rock') {
                if (computerChoice === 'Rock') {
                    result = 'Tie';
                }
                else if (computerChoice === 'Paper') {
                    result = 'You Lose';
                }
                else if (computerChoice === 'Scissors') {
                    result = 'You Win';
                }
            }

            if (playerMove === 'Paper') {
                if (computerChoice === 'Rock') {
                    result = 'You Win';
                }
                else if (computerChoice === 'Paper') {
                    result = 'Tie';
                }
                else if (computerChoice === 'Scissors') {
                    result = 'You Lose';
                }
            }

            if (playerMove === 'Scissors') {
                if (computerChoice === 'Rock') {
                    result = 'You Lose';
                }
                else if (computerChoice === 'Paper') {
                    result = 'You Win';
                }
                else if (computerChoice === 'Scissors') {
                    result = 'Tie';
                }
            }
            if (result === 'You Lose') {
                maintainScore.loses += 1;
            }
            else if (result === 'You Win') {
                maintainScore.wins += 1;
            }
            else if (result === 'Tie') {
                maintainScore.ties += 1;
            }

            localStorage.setItem('maintainScore',JSON.stringify(maintainScore));

            updateScore();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-result"> <img src="images/${computerChoice}-emoji.png" class="move-result"> Computer.`;

            /*alert(`You chose ${playerMove}. Computer chose ${computerChoice}. ${result}
                Wins: ${maintainScore.wins} Loses: ${maintainScore.loses} Ties: ${maintainScore.ties}`);*/
        }
        
        function updateScore(){
            document.querySelector('.js-score')
            .innerHTML =  `Wins: ${maintainScore.wins} Loses: ${maintainScore.loses} Ties: ${maintainScore.ties}`;
        }
        function resetScore() {
            maintainScore = {
                wins: 0,
                loses: 0,
                ties: 0
            };
            updateScore();
        }
        function computerMove() {
            randomNumber = Math.random();
            move = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                move = 'Rock'
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                move = 'Paper';
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                move = 'Scissors';
            }
            return move;
        }

        document.querySelector('.js-score')
            .innerHTML =  `Wins: ${maintainScore.wins} Loses: ${maintainScore.loses} Ties: ${maintainScore.ties}`;

        updateScore();
        