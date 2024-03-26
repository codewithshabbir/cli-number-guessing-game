let existingUsers = [
    {
        username: "shabbir786",
        name: "Muhammad Shabbir",
        gender: "Male",
        password: "Shabbir123",
    },
    {
        username: "Khadim786",
        name: "Khadim Hussain",
        gender: "Male",
        password: "khadim123",
    },
    {
        username: "maryam786",
        name: "maryam Fatima",
        gender: "Female",
        password: "maryam123",
    },
];
function getExistingUsers() {
    return existingUsers;
}
function addNewUser(newUser) {
    existingUsers.push(newUser);
}
export { getExistingUsers, addNewUser };
