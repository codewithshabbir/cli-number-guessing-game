import inquirer from "inquirer";
import { getExistingUsers } from "./existingusers.js";
import { numberGuess } from "./number_guessing_game.js";

async function login() {
  let loginCheck: boolean = false;

  while (!loginCheck) {
    const loginUser: {
      username: string;
      password: string;
    } = await inquirer.prompt([
      {
        name: "username",
        message: "Enter your Username:",
      },
      {
        name: "password",
        message: "Enter your Password:",
      },
    ]);

    const { username, password } = loginUser;

    if (getExistingUsers().find((user) => user.username === username && user.password === password )) {
      console.log("\n");
      console.log("****************************************");
      console.log("******* User Login Successfully! *******");
      console.log("****************************************");
      console.log("\n");
      loginCheck = true;
      await numberGuess();
    } else {
      console.log("\n");
      console.log("***************************************************");
      console.log("******* Username and Password doesn't match *******");
      console.log("***************************************************");
      console.log("\n");
    }
  }
}

export { login };