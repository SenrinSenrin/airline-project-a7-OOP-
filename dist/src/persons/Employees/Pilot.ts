
import { Employee } from "./employee";
import { Genders } from "../Person";

export class Pilot extends Employee {
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number) {
        super(FirstName, LastName, Age, Gender, salary);
        this.Flights = [];
    }

}