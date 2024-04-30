// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…
import { Airport } from "./Airports/airport";
import { Passengers } from "./Persons/Passenger/passenger";
import { Trips } from "./Flight/Trip";
import { Booking } from "./Booking/booking";
import { Tickets } from "./Tickets/ticket";
import { Flight } from "./Flight/flight";
import { Routs } from "./Flight/Route";
import { Genders } from "./Persons/person";
import { Airlines } from "./Airline/ailine";
import { Pilot } from "./Persons/Employees/Pilot";
import { Mananger } from "./Persons/Employees/Mananger";
import { Gate } from "./Flight/Gate";

// _____________________ENUMS_____________________________//
import { Bookingtype } from "./Tickets/ticket";
import { AirplaneType } from "./Flight/flight";
import { EmployeeRole } from "./Persons/Employees/Employee";
import { FlightId } from "./Flight/flight";



// ====================OBJECT===========================

// _______________________________CREATE-FLIGHT-DATE______________________________//
let dateS1 = new Date(2024, 3, 27, 15, 30, 0);
let dateA1 = new Date(2024, 3, 27, 15, 30, 0);

// __________________________________CREATE-AIRPORT_____________________________
let airport = new Airport("PP Airport");

// _______________________________CREATE-GATE______________________________//
let gate1 = new Gate(231);

// _____________________________CREATE-ROUTE-FOR-FLIGHT___________________________//
let route1 = new Routs("PP", "BK")

// ____________________________CREATE-PASSENGERS_______________________________//
let passenger1 = new Passengers("Pas01", "Senrin", "Sim", 23, Genders.Male);

// ____________________________CREATE-BOOKINGS_______________________________//
let booking1 = new Booking(123, "001BPP");
let booking2 = new Booking(123, "003BKK");

// ____________________________CREATE-TRIPS_______________________________//
let trip1 = new Trips("Trip1PPBK");

// ____________________________CREATE-FLIGHTS_______________________________//
let flight1 = new Flight(FlightId.F001Boeing, gate1, AirplaneType.Boeing737, dateS1, dateA1, route1)

// ____________________________CREATE-TICKETS_______________________________//
let ticket1 = new Tickets("T001BK", Bookingtype.NORETURNTICKET);
let ticket2 = new Tickets("T001BJ", Bookingtype.RETURNTICKET);

// _______________________________CREATE-AIRLINES______________________________//
let airline1 = new Airlines("Cambodia Airline");

// _______________________________CREATE-EMPLOYEES______________________________//
let pilot1 = new Pilot("Dity", "Trav", 24, Genders.Male, 1243, EmployeeRole.Pilot);
let mananger = new Mananger("Serin", "Sing", 23, Genders.Male, 1233, EmployeeRole.Manager);

// ===============================CALL-FUNCTIONS===========================
// __________________________________TRIPS-METHOD_______________________________//
trip1.addFlight(flight1);
trip1.addBooking(booking1);

// __________________________________BOOKING-METHOD_______________________________//
booking1.addTrip(trip1);
booking1.addTicket(ticket1);
booking1.addPassenger(passenger1);

// __________________________________PASSENGER-METHOD_______________________________//
passenger1.addBooking(booking1);

// __________________________________AIRLINES-METHOD_______________________________//
airline1.addTrip(trip1);
airline1.addEmployee(pilot1);
airline1.addAirplane(AirplaneType.Boeing737);
airline1.addAirplane(AirplaneType.Boeing747);
airline1.addEmployee(mananger);

// __________________________________EMPLOYEES-METHOD_______________________________//
pilot1.addFlight(flight1);

// _____________________________________AIRPORT-METHOD_______________________________//
airport.addAirline(airline1);
airport.addFlight(flight1);
airport.addGate(gate1);

// USER STORY 1->
// =================1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)==============
// passenger1.getPassengerFullDetails();


/*USER STORY 2->
// =================2. As an airline manager, I want to know for a given flight, how many passengers have return 
// tickets.=============*/
console.log(airline1.getFlightNumPassReturn());
console.log(airline1);




/*USER STORY 3->
// =================3. As an airline pilot, I want to know, for a given date, how many flights I have to join==============*/
// pilot1.getFlightCountByTime();



/*USER STORY 4->
// =================4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to 
prepare.============*/


/*USER STORY 5->
=================5. As an airline manager, I want to find out how much salary I pay all my employees.============*/
// console.log(airline1.getTotalSalariesOfEmployees());


/*USER STORY 6->
===================6. As a passenger, I want to know which gate my plane is waiting at.
=================*/
// console.log(passenger1.getGate());














