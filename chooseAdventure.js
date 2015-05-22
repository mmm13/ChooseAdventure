// Check if the user is ready to play!
confirm("Would you like to play a game? ")

age = prompt("what's your age");

if(age < 13)
{
    console.log("Sorry your are too young to play");
}
else 
{
    console.log("Play on !!");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.' ");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes" )
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else 
{
    if (userAnswer === "no")
    {
        console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    }
    else
    {
        console.log("Please enter yes or no ");
    }
}

feedback = prompt("Please rate the adventure 1 - 10 ");

if (feedback > 8 )
{
    console.log("Thanks you! We should race at the next concert!");
}
else 
{
    console.log("I'll keep practicing coding and racing.");
}