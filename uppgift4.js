/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.
*/ 

//Tar ett slumpvalt värde mellan 0 och 10
// var nummer = Math.random();
// console.log(nummer);
// nummer = nummer * 10;
// console.log(nummer);
// nummer = Math.round(nummer);
// console.log(nummer);


/* FORTSÄTT MED EGEN KOD HÄR */


/*
PSEUDOKOD
1.Start the game.
2.Generate a random number between 0 and 10.
3.Ask the player for their first guess.
4.If the guess is correct, congratulate the player and end the game.
5.If the guess is wrong, tell the player whether the guess was too high or too low.
6.Ask the player for a second guess.
7.If the second guess is correct, congratulate the player.
8.If the second guess is wrong, tell the player that the game is over and reveal the correct number.
9.End the game. */

/*

let correctNumber = Math.round(Math.random() * 10);
let guess1 = parseInt(prompt("Guess a number between 0 and 10"));
if (guess1 === correctNumber) {
    alert("Congratulations, you guessed the correct number and won!");
} else {
    if (guess1 > correctNumber) {
        alert("Your guess is too high.");
    } else {
        alert("Your guess is too low.");
    }
    
    let guess2 = parseInt(prompt("Try again! Enter your second guess:"));
     if (guess2 === correctNumber) {
        alert("Congratulations, you guessed the correct number and won!");
    } else {
        alert("Sorry, you lost! The correct number was" + correctNumber + ".");
    }
}
*/


let correctNumber = Math.round(Math.random() * 10);

let attempts = 2;
    
while(attempts > 0){
    let guess = parseInt(prompt("guess a number between 1 and 10"))

    if(guess === correctNumber){
        alert("congratulations! You guess a correct number");
        break;
    }
    else if(guess > correctNumber){
        alert("the guess was too high");
    }
    else {
        alert("the guess was too low");
    }

    attempts--;
    if(attempts === 0){
        alert("Sorry, you lost. The correct number was " + correctNumber);
    }
}
