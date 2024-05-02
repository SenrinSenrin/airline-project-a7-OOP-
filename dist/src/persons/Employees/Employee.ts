
import { Persons } from "../person";
import { Flight } from "../../Flight/flight";
import { Genders } from "../person";

export enum EmployeeRole {
    Manager = "Manager",
    Pilot = "Pilot",
    Copilot = "Copilot",
    Chef = "Chef",
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
    getFullName(): string {
        return this.FirstName + " " + this.LastName;
    }

    getEmployeeInfor(): string {
        return +
        "Name: "+this.FirstName + " " + this.LastName + "\n" +
        "Age: "+this.Age + "\n"+
        "Gender: "+this.Gender + "\n" +
        "Salary: "+this.Salary + "\n" +
        "Department: "+this.department + "\n" +
        "Flight number: "+this.Flights.length + "\n" +
        "Orther: "+this.Flights.map(f => f.FlightId).join("\n") + "\n" 
        ;
    }
}