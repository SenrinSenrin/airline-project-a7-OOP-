
import { Persons } from "../person";
import { Flight } from "../../Flight/flight";
import { Genders } from "../person";

export enum EmployeeRole {
    Manager = "Manager",
    Pilot = "Pilot",
    Copilot = "Copilot",
    Chief = "Chief",
}

export class Employee extends Persons {
    protected Salary: number =0;
    protected department: EmployeeRole
    Flights: Flight[] = [];

    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number, department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender);
        this.Salary = salary;
        this.department = department;
    }
    public addFlight(flight: Flight) {
        this.Flights.push(flight);
    }

    getSalary(): number {
        return this.Salary;
    }
}