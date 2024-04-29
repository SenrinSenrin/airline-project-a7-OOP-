// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…

import { Passengers } from "./Persons/Passenger/Passenger";
import { Trips } from "./Flight/Trip";
import { Booking } from "./Booking/Booking";
import { Tickets } from "./Tickets/ticket";
import { Flight } from "./Flight/Flight";
import { Routs } from "./Flight/Route";
import { Bookingtype } from "./Tickets/ticket";
import { AirplaneType } from "./Flight/Flight";
import { Genders } from "./Persons/Person";

import { Airlines } from "./Airline/ailine";

import { Employee } from "./Persons/Employees/Employee";

import { Pilot } from "./Persons/Employees/Pilot";
import { Mananger } from "./Persons/Employees/Mananger";
import { EmployeeRole } from "./Persons/Employees/Employee";


// ====================OBJECT===========================
let passenger1 = new Passengers("Pas01", "Senrin", "Sim", 23, Genders.Male);
let trip1 = new Trips("Trip1PPBK");
let booking1 = new Booking(123, "001BPP")
let ticket1 = new Tickets("T001BK", Bookingtype.RETURNTICKET);
let route1 = new Routs("PP", "BK")
let dateS1 = new Date(2024, 3, 27, 15, 30, 0);
let dateA1 = new Date(2024, 3, 27, 15, 30, 0);
let flight1 = new Flight("F00Boing", AirplaneType.Boeing737, dateS1, dateA1, route1)

let airline1 = new Airlines("Cambodia Airline")

let pilot1 = new Pilot("Dity", "Trav", 24, Genders.Male, 1243, EmployeeRole.Pilot)

let mananger = new Mananger("Serin", "Sing", 23, Genders.Male, 1233, EmployeeRole.Manager)

// ====================FUNCTION===========================
trip1.addFlight(flight1);
trip1.addBooking(booking1);
booking1.addTrip(trip1);
booking1.addTicket(ticket1);
booking1.addPassenger(passenger1);
passenger1.addBooking(booking1);

airline1.addTrip(trip1);
airline1.addEmployee(pilot1);
airline1.addAirplane(AirplaneType.Boeing737);
airline1.addAirplane(AirplaneType.Boeing747);
airline1.addEmployee(mananger);
pilot1.addFlight(flight1);






















// console.log(pilot1.getFlightCountByTime());
// console.log(passenger1.getPassengerFullDetails());
console.log(airline1.getTotalSalariesOfEmployees());

// console.log(airline1.getInforDetails());













