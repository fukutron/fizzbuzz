// fizzBuzz challenge!

//The player designated to go first says the number "1", and each player thenceforth counts one number in turn. However, any number divisible by three is replaced by the word fizz and any divisible by five by the word buzz. Numbers divisible by both become fizz buzz. A player who hesitates or makes a mistake is eliminated from the game.

// assigned a variable to start with 1; count up to 100; adds 1 each time
for ( var i = 1; i <= 100; i += 1) { 
  
  // The first if statement is i is divisible by 3 AND 5
if ( i % 3 === 0 && i % 5 === 0) { 
  document.write (' ' + 'fizzbuzz' + ' ');
} else if ( i % 3 === 0 ) {
  document.write (' ' + 'fizz' + ' ');
} else if ( i % 5 === 0 ) {
  document.write (' ' + 'buzz' + ' ');
} else {
  document.write (' ' + i + ' ');
}

} 

//question 1: Don't understand why divisible equation is _ % _ === 0 . Why does it strictly === 0? (had to look this up because Treehouse didn't teach it)
//question 2: The difference between ++ and +=. (Figured it out, ++ increases integer by only 1, += increase by your choice)