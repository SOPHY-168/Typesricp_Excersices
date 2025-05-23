import { User } from "./User";

export class Student extends User {
  constructor(
    fname: string,
    lname: string,
    gender: string,
    public classes: string
  ) {
    super(fname, lname, gender);
  }
}
