// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…

import { Passengers } from "./Persons/Passenger/Passenger";
import { Trips } from "./Flight/Trip";
import { Booking } from "./Booking/Booking";
import { Tickets } from "./Tickets/ticket";
import { Flight } from "./Flight/Flight";
import { Routs } from "./Flight/Route";
import { DateTime } from "./Flight/Date";
import { Bookingtype } from "./Tickets/ticket";
import { AirplaneType } from "./Flight/Flight";
import { Genders } from "./Persons/Person";


// ====================OBJECT===========================
let passenger1 = new Passengers("Pas01", "Senrin", "Sim", 23, Genders.Male);
let trip1 = new Trips("Trip1PPBK");
let booking1 = new Booking(123, "001BPP")
let ticket1 = new Tickets("T001BK", Bookingtype.NORETURNTICKET);
let route1 = new Routs("PP", "BK")
let dateS1 = new Date(2024, 3, 27, 15, 30, 0);
let dateA1 = new Date(2024, 3, 27, 15, 30, 0);
let flight1 = new Flight("F00Boing", AirplaneType.Boeing737, dateS1, dateA1, route1)


// ====================FUNCTION===========================
trip1.addFlight(flight1);
trip1.addBooking(booking1);
booking1.addTrip(trip1);
booking1.addTicket(ticket1);
booking1.addPassenger(passenger1);
passenger1.addBooking(booking1);

console.log(passenger1);







