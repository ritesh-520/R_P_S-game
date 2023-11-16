let status = "not completed";
     let result = '';
    let computerMove ='';
    let cost = 0;
    let my_game_score = 0;
    let final_score = 0;
    let rewards= 0;
   
    let score  = {
        wins : 0,
        loses : 0,
        ties : 0
    }
    function your_payment()
    {
                            status = document.querySelector('.payment-status');

                            const a = status.value = 'completed'; 
                            
                            localStorage.setItem('payment',JSON.stringify(a));
                            console.log(a);
                             const b = document.querySelector('.pay')
                             b.classList.add('pay1');
                             b.innerHTML = "paid";
    }
    console.log(document.querySelector('.payment-status').value);
    function finish(){
       
        if(JSON.parse(localStorage.getItem("payment")) === "completed"){
            localStorage.clear();
                    location.reload();
            reset();
        }
        else {
            alert("You must finish the withdrawal process first inorder to play a new game or to reset");
        }
    }
    function totalCost(){
            cost = cost + 1;
            localStorage.setItem("cost",JSON.stringify(cost));
            
            if(result === 'win'){
                console.log(result);
                rewards = rewards +5;
                localStorage.setItem("rewards",JSON.stringify(rewards));
            }
            fetchMoney();
    }
    function fetchMoney(){
        const COST =  document.querySelector('.total-cost');
      COST.innerHTML = ( JSON.parse(localStorage.getItem("cost")) || cost) + "Rs.";
       const REWARDS = document.querySelector(".total-rewards")
       REWARDS.innerHTML = (JSON.parse(localStorage.getItem("rewards")) || rewards )+"Rs.";
     
    
    }
    function computerMove_action(){
        randomNumber = Math.random();
     
                            console.log(randomNumber);
                            if (randomNumber < 1/3){
                                computerMove = 'ROCK';
                            }
                            else if(randomNumber>1/3 && randomNumber <2/3){
                                computerMove = 'PAPER';
                            }
                            else {
                                computerMove = 'SCISSOR';
                            }
                            return computerMove;
                                 }
    function playerMove(move)
                        {
            if(move === 'ROCK'){
                            if(computerMove == 'ROCK'){
                                result = 'tie';

                                }
                                else if(computerMove == 'PAPER')
                                    {
                                    result = 'lose';
                                }
                                else{
                                    result ='win';
                                } 
                            }
                                
            else if( move === 'PAPER')
                   {
                            if(computerMove == 'ROCK'){
                                    result = 'win';

                                }
                                else if(computerMove == 'PAPER')
                                {
                                    result = 'tie';
                                }
                                else{
                                    result ='lose';
                                } 
                        }
            else
                        {
                            if(computerMove == 'ROCK'){
                                        result = 'lose';

                                    }
                                    else if(computerMove == 'PAPER')
                                    {
                                        result = 'win';
                                    }
                                    else{
                                        result ='tie';
                                    }
                        }
            if(result === 'win' ){
            score.wins  = score.wins +1;
            }
            else if(result === 'lose'){
                score.loses = score.loses+1;
            }
            else{
                score.ties = score.ties +1;
            }
            console.log(`
            ${move}   ${computerMove}  ${result}`
            );
            alert(`
            you chose ${move} and computer chose ${computerMove} result is ${result}`
            );
            localStorage.setItem("score",JSON.stringify(score));
            updateScore();
            totalCost();
            
        }



        function my_Score(){
                final_score = JSON.parse(localStorage.getItem("score"))|| score;
        }
        function reset(){
            localStorage.removeItem("score");
            score.wins = 0;
            score.loses =0;
            score.ties = 0;
            localStorage.setItem("score",JSON.stringify(score));
            updateScore();
            return score;
           
        }
        function updateScore(){
            console.log(document.querySelector('.display_score'));
            let b = document.querySelector('.display_score');
            my_Score();
            b.innerText = `wins: ${final_score.wins}
             loses : ${final_score.loses}
              ties: ${final_score.ties}`;
        }
        updateScore();
        fetchMoney();
    