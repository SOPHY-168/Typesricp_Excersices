export class Form {
  constructor(
    public reason: string,
    public startDate: string,
    public endDate: string
  ) {}

  submitForm(): void {
    console.log("Permission Form Submitted:");
    console.log(`Reason: ${this.reason}`);
    console.log(`Start Date: ${this.startDate}`);
    console.log(`End Date: ${this.endDate}`);
  }
}
