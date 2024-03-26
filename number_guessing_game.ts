import inquirer from "inquirer";

async function numberGuess() {
  let numberGuessCheck: boolean = false;

  while (!numberGuessCheck) {
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
      console.log("Congratulations your answer is correct! You Won...!");
      numberGuessCheck = true;
    } else {
      console.log("Your answer is wrong! Try Again");
    }
  }
}

export { numberGuess };