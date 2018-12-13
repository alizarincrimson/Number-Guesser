# Number-Guesser


## Assignment

The assignment for this project was to apply what we've learned in JavaScript within the context of a number guessing game. The basic expectations were to create fields to set minimum and maximum ranges that generated a random number and allow two players to try to guess the random number. Once those players have guessed, scorecards at the bottom of the section report the players' names, guesses, and feedback on their guess ("That's too high," "That's too low," or "BOOM" if the guess was correct). If one of the players guesses correctly, a new card appears on the right-hand side of the section announcing the winner of that round. There are also buttons to "reset" (start a new game) or "clear" (guess again, against the same random number). 

## Accomplishments

It felt like a real win for us to just accomplish the basic expectations of the assignment: generating and grabbing new numbers within a set range; grabbing names and guesses for each player; and passing those names, guesses, and feedback into the bottom section. This meant writing event listener functions, manipulating the DOM, and passing global variables into functions and reassigning them when those variables needed to change. Even though we didn't finish styling our code in CSS, we were pleased to see how much more quickly we could code our CSS (much faster than either of us could for previous projects) and think it was the right decision to focus on our JavaScript first. 

## Challenges

Our greatest challenge was with disabling and enabling the buttons that update the range, submit guesses, and reset/clear the game. They each work as desired for the first game (albeit through some pretty hacky JavaScript), but once one game has been played, the disabled state persists. We haven't figured out how to toggle back and forth between states.

We also suspect we did something kind of funky early on in the project that in some instances kept us from incorporating global variables into various functions. In some cases we can use them; in others, we've had to use query selectors instead, which makes for some ungangly code and perhaps introduced some of the challenges we faced with the button states. 

We were happy to be able to generate the new card when a player guesses the correct number, but again struggled to pass in  variables that had been assigned elsewhere in our code. (The winner card will say which challenger won the game, but it doesn't say their name or score.) Next steps would be continuing developing the winner cards functionality, implementing animation, and adding responsive styling (in retrospect, we should have had responsive styling in mind before we wrote our HTML).

## Take-Aways

Going into this project, neither of us felt like we knew what the hell we were doing and really just dove right in. In the future, we'd both want to make a better roadmap from the start and not be afraid to retrace our steps. Our initial wireframe helped us style pretty quickly, but we kind of confused ourselves with our initial naming conventions in the HTML. It would have been better to start assigning classes and IDs *after* we had a better understanding of our functions. 

Now we know more about what we didn't know. The project is far from perfect, but we learned *a ton*, so counting it as a win. 
