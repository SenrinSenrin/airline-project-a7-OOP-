
import { Persons } from "../Person";
import { Flight } from "../../Flight/Flight";
import { Genders } from "../Person";

export class Employee extends Persons {
    protected Salary: number =0;
    Flights: Flight[] = [];

    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number) {
        super(FirstName, LastName, Age, Gender);
        this.Salary = salary;
    }
    public addFlight(flight: Flight) {
        this.Flights.push(flight);
    }
}