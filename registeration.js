import inquirer from "inquirer";
import { getExistingUsers, addNewUser } from "./existingusers.js";
import { login } from "./login.js";
async function registerUser() {
    let userCheck = false;
    while (!userCheck) {
        const newUser = await inquirer.prompt([
            {
                name: "username",
                message: "Enter your Username:",
            },
            {
                name: "name",
                message: "Enter your Full Name:",
            },
            {
                name: "gender",
                message: "Enter your Gender:",
            },
            {
                name: "password",
                message: "Enter your Password:",
            },
        ]);
        const existingUserCheck = getExistingUsers().find((user) => user.username === newUser.username);
        if (existingUserCheck) {
            console.log("\n");
            console.log("************************************");
            console.log("******* User Already Exists! *******");
            console.log("************************************");
            console.log("\n");
        }
        else {
            addNewUser(newUser);
            userCheck = true;
            console.log("\n");
            console.log("*********************************************");
            console.log("******* Account Created SuccessFully! *******");
            console.log("*********************************************");
            console.log("\n");
            await login();
        }
    }
}
export { registerUser };
