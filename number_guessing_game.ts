import inquirer from "inquirer";

async function numberGuess() {
  let numberGuessCheck: number = 5;

  while (numberGuessCheck <= 5 && numberGuessCheck > 0) {
    const randomNumberGenerate = Math.floor(Math.random() * 10);

    const answers: {
      numberGuess: number;
      message: string;
    } = await inquirer.prompt([
      {
        name: "numberGuess",
        message: "Write your Guess:",
      },
    ]);

    const { numberGuess } = answers;
    if (numberGuess == randomNumberGenerate) {
      console.log("\n");
      console.log("*******************************************************************");
      console.log("******* Congratulations your answer is correct! You Won...! *******");
      console.log("*******************************************************************");
      console.log("\n");
      process.exit();
    } else { 
      --numberGuessCheck;

      console.log("\n");
      console.log("***************************************************");
      console.log(`******* Your have ${numberGuessCheck} Chances left ! *******`);
      console.log("***************************************************");
      console.log("\n");

      if(numberGuessCheck == 0){
        console.log("********************************");
        console.log("******* Try Again Later! *******");
        console.log("********************************");
      }
    }
  }
}

export { numberGuess };
