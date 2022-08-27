const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(prompt("Enter a number (1 - 6): "));
    const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6

    //Validate input is number
    if (isNaN(userNumber)) {

    }

    //Get the logic 
    // If the user's number matches the random number, return 2 points
    // If the user's number is different than the random number by 1, return 1 point
    // Else return 0 points

    /*
    * Hint: need to resolve after checking 
    
        resolve({
            points: 1,
            randomNumber,
        });   
    */
  });
};

const continueGame = () => {

  // Using promise to get value => Promise((resolve))  
  // Get the user's choice from prompt prompt("Do you want to continue - type y/yes or n/no to decide ? ");
  //Checking the choice value and resolve true or false  
};

const handleGuess = async () => {
  try {
    const result = await enterNumber(); // Instead of the then method, we can get the result directly by just putting await before the promise

    console.log(
      `Dice: ${result.randomNumber}: you got ${result.points} points`
    );

    const isContinuing = await continueGame();
    //Continue based on user's choice
    
  } catch (error) {
    console.log(error);
  }
};

handleGuess(); // Run handleGuess function
