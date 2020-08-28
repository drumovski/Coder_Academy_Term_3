// Complete the function rps(player1, player2) . The inputs player1 and player2 will both be strings representing a move in the game rock, paper, scissors. The input could contain words with any case but will always be a valid string and option. Your function should return a string telling the user who the winner was or if it was a draw. 

// Rules of the game

// Rock beats Scissor
// Paper beats Rock
// Scissor beats Paper
// In the case that both players choose the same option it is a draw

// Examples

// rps('rock', 'paper') => 'The winner is player 2'
// rps('Sissors', 'paper') => 'The winner is player 1'
// rps('paper', 'Paper') => 'It's a draw'

// Note that capital letters shouldn't make a difference to the output.

const rps = (player1, player2) => {
    player1 = player1.toLowerCase();
    player2 = player2.toLowerCase();
p2 = 'The winner is player 2'
p1 = 'The winner is player 1'
draw = "It's a draw"
    
if (player1 == player2) {
    return draw;
}     
  console.log(`player 1 is ${player1}, player 2 is ${player2}`)   
switch(player1) {
    case "rock":
    if (player2 == "paper") 
    {return p2};
    break;
    case "scissors":
    if (player2 == "rock") return p2;
    break;
    case "paper":
    if (player2 == "scissors") return p2;
    break;
    default: 
    return "Your gobblky gook is not accepted here Good Sir!"
    }

return p1

}
console.log(rps("rock", "glue"))

// Dont't change this!
module.exports = rps;
