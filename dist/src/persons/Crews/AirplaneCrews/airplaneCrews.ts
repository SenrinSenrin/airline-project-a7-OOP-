import { Crews } from "../crews";

export class AirportCrews extends Crews {
    Destination: string;
    Department: string;

    constructor(CrewId: string, Name: string, Salary: number, Destination: string, Department: string) {
        super(CrewId, Name, Salary);
        this.Destination = Destination;
        this.Department = Department;
    }
    
}