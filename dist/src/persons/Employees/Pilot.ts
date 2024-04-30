
import { Employee } from "./employee";
import { Genders } from "../person";
import { EmployeeRole } from "./employee";

export class Pilot extends Employee {
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number, department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender, salary, department);
        this.Flights = [];
    }
    getPilotDetails() {
        return `Name: ${this.FirstName + " " + this.LastName}\n Your age: ${this.Age}\n You sex: ${this.Gender}\n Your salary: ${this.Salary}`;
    }

    getFlightCountByTime(){
        let numberOfFlights = 0
        console.log(`Pilot name: ${this.FirstName + " " + this.LastName}`);
        for (let flight of this.Flights) {
            console.log(`Flight Id: ${flight.FlightId}\nFlight on date:\n  Depature time: ${flight.StartingTime}\n  Arrival time: ${flight.ReachingTime}`);
            numberOfFlights++;
        }
        console.log(`You have ${numberOfFlights} of flights`);
        
    }
}