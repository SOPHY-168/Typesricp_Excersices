import { Register } from "./Register";
import { Login } from "./Login";
import { Student } from "./Student";
import { Form } from "./Form";

// Register a student
const reg = new Register("John", "Doe", 1234567890, "pass123", "student");
console.log("Registered:", reg);

// Login
const login = new Login(1234567890, "pass123");
console.log("Logged in:", login);

// Create student instance
const student = new Student("John", "Doe", "Male", "10A");
console.log("Student profile created:", student);

// Submit a form
const form = new Form("Sick leave", "2025-06-01", "2025-06-05");
form.submitForm();
