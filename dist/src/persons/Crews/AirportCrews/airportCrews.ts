import { Crews } from "../crews";

class AirportCrews extends Crews {
    private designation: string; // Property to represent the designation of airport crews

    constructor(designation: string, CrewId: string, Name: string, Salary: number) {
        super(CrewId, Name, Salary); // Call the constructor of the superclass (Crews)
        this.designation = designation;
    }

    // You can add more methods specific to AirportCrews if needed
}

// Example usage:
const airportCrew1 = new AirportCrews("Ground Staff", "sdlf", "sdlfa",123);
console.log(airportCrew1); // Output: Ground Staff
