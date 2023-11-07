


var numYou = 0;
var numComputer = 0;
var numTie = 0;


//user picks rock
function Rock(){
    let random  =  Math.floor(Math.random() * 3);
    
    let yourChoice = document.getElementById('your choice');
    yourChoice.innerHTML = 'Your Pick: Rock';
    let computerChoice = document.getElementById('computer choice');
    let result = document.getElementById('result')

    let tie = document.getElementById('tie');
    let computer = document.getElementById('computer');
    let you = document.getElementById('you');




    
    //computer and user tie
    if (random === 0){
        computerChoice.innerHTML = 'Computer Picks: Rock';
        numTie++;
        tie.innerHTML = ` ${numTie}`;
        result.innerHTML = 'Tie!';
    }

    //Computer picks paper and Wins 
    else if (random === 1){
        computerChoice.innerHTML = 'Computer Picks: Paper';
        numComputer++;
        computer.innerHTML = ` ${numComputer}`;
        result.innerHTML = 'The Computer Wins!';
    }
    //computer picks scissors and loses
    else if (random === 2){
        computerChoice.innerHTML = 'Computer Picks: Scissors';
        numYou++;
        you.innerHTML = ` ${numYou}`;
        result.innerHTML = 'You Win!';
    }
}


//User picks paper
function Paper(){
    let random  =  Math.floor(Math.random() * 3);
    let yourChoice = document.getElementById('your choice');
    yourChoice.innerHTML = 'Your Pick: Paper';
    let computerChoice = document.getElementById('computer choice');
    let result = document.getElementById('result')

    let tie = document.getElementById('tie');
    let computer = document.getElementById('computer');
    let you = document.getElementById('you');

    //computer picks rock and loses
    if (random === 0){
        computerChoice.innerHTML = 'Computer Picks: Rock';
        numYou++;
        you.innerHTML = ` ${numYou}`;
        result.innerHTML = 'You Win!';
    }

    // //Computer and user tie 
    else if (random === 1){
        computerChoice.innerHTML = 'Computer Picks: Paper';
        numTie++;
        tie.innerHTML = ` ${numTie}`;
        result.innerHTML = 'Tie!';
    }
    // //computer picks scissors and Wins
    else if (random === 2){
        computerChoice.innerHTML = 'Computer Picks: Scisscors';
        numComputer++;
        computer.innerHTML = ` ${numComputer}`;
        result.innerHTML = 'The Computer Wins!';
    }
}



// User picks scissors
function Scissors(){
    let random = Math.floor(Math.random()*3);
    let yourChoice = document.getElementById('your choice');
    yourChoice.innerHTML = 'Your Pick: Scissors';
    let computerChoice = document.getElementById('computer choice');
    let result = document.getElementById('result')

    let tie = document.getElementById('tie');
    let computer = document.getElementById('computer');
    let you = document.getElementById('you');
    //Computer picks rocks and wins
    if (random === 0){
        computerChoice.innerHTML = `Computer Picks: Rock`;
        numComputer++;
        computer.innerHTML = ` ${numComputer}`;
        result.innerHTML = 'The Computer wins!';
    }
    //computer picks paper and user loses
    else if(random === 1){
        computerChoice.innerHTML = `Computer Picks: Paper`;
        numYou++;
        you.innerHTML = ` ${numYou}`;
        result.innerHTML = 'You Win!';
    }
    // computer picks scissors and ties
    else if(random === 2){
        computerChoice.innerHTML = `Computer Picks: Scissors`;
        numTie++;
        tie.innerHTML = ` ${numTie}`;
        result.innerHTML = 'Tie!';
    }
}


