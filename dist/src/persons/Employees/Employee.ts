
import { Persons } from "../Person";
import { Flight } from "../../Flight/Flight";
import { Genders } from "../Person";

export enum EmployeeRole {
    Manager = "Manager",
    Pilot = "Pilot",
    Copilot = "Copilot",
    Chief = "Chief",
}

export class Employee extends Persons {
    protected Salary: number =0;
    department: EmployeeRole
    Flights: Flight[] = [];

    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number, department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender);
        this.Salary = salary;
    }
    public addFlight(flight: Flight) {
        this.Flights.push(flight);
    }
}