/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/

/*code start
prompt user input
computer generates choice with math function amd saves result in variable
compare user and computer variables and determine game winner according to game logic
print result 
code end
*/

var userChoice = prompt("sten, sax and påse")

while (userChoice !== "sten" && userChoice !== "sax" && userChoice !== "påse") {
    userChoice = prompt("Ogiltigt val! Vänligen välj antingen sten, sax eller påse:");
}

var computerChoice = Math.round(Math.random() * 2)

if (computerChoice === 0 ){
    computerChoice = "sten"
} else if (computerChoice === 1){
    computerChoice = "sax"
}
else {
    computerChoice = 2
}

if(computerChoice === userChoice){
 alert("LIKA")
}
else if (userChoice == "sten" && computerChoice == "sax" || userChoice == "sax" && computerChoice == "påse" || userChoice == "påse" && computerChoice == "sten" ){
    alert("SPELAREN VINNER")
} else {
    alert("DATORN VINNER")
}