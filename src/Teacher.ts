import { User } from "./User";

export class Teacher extends User {
  constructor(
    fname: string,
    lname: string,
    gender: string,
    public subject: string
  ) {
    super(fname, lname, gender);
  }
}
