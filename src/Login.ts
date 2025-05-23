import { Register } from "./Register";

export class Login {
  constructor(
    public phone: number,
    public password: string
  ) {}

  public check(users: Register[]): string {
    const user = users.find(u => u.phone === this.phone);

    if (!user) {
      return "Phone number not found!";
    }

    if (user.password !== this.password) {
      return "Incorrect password!";
    }

    return `Login successful. Welcome, ${user.fname} ${user.lname}!`;
  }
}
