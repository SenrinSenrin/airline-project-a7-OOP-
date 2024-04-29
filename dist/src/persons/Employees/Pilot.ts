
import { Employee } from "./Employee";
import { Genders } from "../Person";
import { EmployeeRole } from "./Employee";

export class Pilot extends Employee {
    constructor(FirstName: string, LastName: string, Age: number, Gender: Genders, salary: number, department: EmployeeRole) {
        super(FirstName, LastName, Age, Gender, salary, department);
        this.Flights = [];
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