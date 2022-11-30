const choices = document.querySelectorAll('.choice');
const restart = document.querySelector('#restart-btn');
const result = document.querySelector('#results');
const players = document.querySelector('#player');
const computers = document.querySelector('#computer')
const modal = document.querySelector('.modal-box')

const scoreboard = {
    player: 0,
    computer: 0
};

choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}


function getComputerChoice(){
    const rand = Math.random();
    if(rand<0.34){
        return 'rock';
    }
    else if(rand<=0.68){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getWinner(p, c){
    if(p === c){
        return 'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'paper'){
        if(c === 'scissors'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'scissors'){
        if(c === 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreboard.player++;
        result.innerHTML = `
        <div class="modalcontent">
        <h2 class="text-win" style="color: green;">Player Wins</h2>
        <i id="rock" class=" fas fa-hand-${computerChoice} fa-10x"></i>
        <h4 class="mt-2">Computer Choose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></h4> 
        </div>
        `;
    }
    else if(winner === 'computer'){
        scoreboard.computer++;
        result.innerHTML = `
        <div class="modalcontent">
        <h2 class="text-win" style="color: red;">Computer Wins</h2>
        <i id="rock" class=" fas fa-hand-${computerChoice} fa-10x"></i>
        <h4 class="mt-2">Computer Choose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></h4> 
        <div>
        `;
    }
    else{
        result.innerHTML = `
        <div class="modalcontent">
        <h2 class="text-win" style="color: skyblue;">It's Draw</h2>
        <i id="rock" class=" fas fa-hand-${computerChoice} fa-10x"></i>
        <h4 class="mt-2">Computer Choose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></h4> 
        </div>
        `;
    }
    players.innerHTML = `
    <p class="lead text-white">Player : ${scoreboard.player}</p>
    `;
    computers.innerHTML = `
    <p class="lead text-white">Computer : ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

function clearModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    players.innerHTML = `
    <p class="lead text-white">Player : 0</p>
    `;
    computers.innerHTML = `
    <p class="lead text-white">Computer : 0</p>
    `;
}
