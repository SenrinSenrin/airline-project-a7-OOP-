
import { Trips } from "../Flight/Trip";
import { Employee } from "../Persons/Employees/Employee";
import { AirplaneType } from "../Flight/Flight";
import { Bookingtype } from "../Tickets/ticket";


export class Airlines {
    Name: string
    Employees: Employee[] = [];
    Trips: Trips[] = [];
    Airplans: AirplaneType;

    constructor(name: string, Airplane: AirplaneType) {
        this.Name = name;
        this.Airplans = Airplane;
    }
    addEmployee(employee: Employee) {
        this.Employees.push(employee);
    }

    addTrip(trip: Trips) {
        this.Trips.push(trip);
    }

    getInforDetails(){
        let flightNumber = 0
        let passReturnNumber = 0
        for (let passengers of this.Trips) {
            // console.log(passengers);
            for (let flight of passengers.Flights) {
                if (flight){
                    flightNumber += 1;
                }
            }
            for (let passenger of passengers.Bookings) {
                for (let passReturn of passenger.Tickettype){
                    
                    if (passReturn.Tickettype == Bookingtype.RETURNTICKET){
                        passReturnNumber += 1;
                    }
                }
                
            }
            return (
                `From ${this.Name}has:\n
                Flight number: ${flightNumber}\n
                passenger number: ${passReturnNumber}
                `
            )
            
        }
    }
    getPassengers(){
        for (let passReturn of this.Trips){
            console.log(passReturn);
            
        }
    }
}