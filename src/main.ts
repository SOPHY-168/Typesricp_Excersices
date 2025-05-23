import { Register } from "./Register";
import { Login } from "./Login";
import { Form } from "./Form";

// Simulated database of registered users
const users: Register[] = [
  new Register("Alice", "Smith", 1111111111, "pass1", "student"),
  new Register("Bob", "Brown", 2222222222, "pass2", "teacher"),
];

// New user registration attempt
const newUser = new Register("Charlie", "Jones", 1111111111, "pass3", "student");

// Check if phone number already registered
const existingUserIndex = newUser.CheckPhone(users);
if (existingUserIndex !== -1) {
  console.log("Phone number already registered!");
} else {
  users.push(newUser);
  console.log("User registered successfully.");
}

// Attempt login with existing user credentials
const loginAttempt = new Login(1111111111, "pass1");

// Check login status
const loginResult = loginAttempt.check(users);
console.log(loginResult);

// If login is successful, submit a form
if (loginResult.startsWith("Login successful")) {
  const form = new Form("Sick leave", "11/May/2025", "12/May/2025");
  form.submitForm();
}
