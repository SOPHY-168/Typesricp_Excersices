export class Register {
  constructor(
    public fname: string,
    public lname: string,
    public phone: number,
    public password: string,
    public role: string
  ) {}
  public CheckPhone(users:Register[]):number{
        return users.findIndex(u => u.phone === this.phone);
  }
}
