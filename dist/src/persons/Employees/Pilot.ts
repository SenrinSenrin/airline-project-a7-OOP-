
import { Employee } from "./employee";
import { Genders } from "../Person";

export class Pilot extends Employee {
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number) {
        super(FirstName, LastName, Age, Gender, salary);
        this.Flights = [];
    }
    getPilotDetails() {
        return `Name: ${this.FirstName + " " + this.LastName}\n Your age: ${this.Age}\n You sex: ${this.Gender}\n Your salary: ${this.Salary}`;
    }

}