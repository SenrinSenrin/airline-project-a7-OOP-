// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…
import { Airport } from "./Airports/airport";
import { Passengers } from "./persons/passenger/passenger";
import { Trips } from "./Flight/Trip";
import { Booking } from "./Booking/booking";
import { Tickets } from "./Tickets/ticket";
import { Flight } from "./Flight/flight";
import { Routs } from "./Flight/Route";
import { Genders } from "./persons/person";
import { Airlines } from "./Airline/ailine";
import { Pilot } from "./persons/Employees/Pilot";
import { Mananger } from "./persons/Employees/Mananger";
import { Chef } from "./persons/Employees/Chef";
import { Gate } from "./Flight/Gate";
import { Baggage } from "./persons/passenger/Baggage";
import { Layout } from "./Flight/Layout";
import { Seat,SeatType } from "./Flight/Seat";
import { Airplane } from "./Flight/Airplan";

// _____________________ENUMS_____________________________//
import { Bookingtype } from "./Tickets/ticket";
import { AirplaneType } from "./Flight/flight";
import { EmployeeRole } from "./persons/Employees/Employee";
import { FlightId } from "./Flight/flight";
import { mealTypes, Meals } from "./Meals/meal";




// ====================OBJECT===========================

// _______________________________CREATE-FLIGHT-DATE______________________________//
let dateS1 = new Date(2024, 3, 27, 15, 30, 0);
let dateA1 = new Date(2024, 3, 27, 40, 30, 0);

// __________________________________CREATE-AIRPORT_____________________________
let airport = new Airport("PP Airport");

// _______________________________CREATE-GATE______________________________//
let gate1 = new Gate(231);
let gate2 = new Gate(233);
let gate3 = new Gate(233);
let gate4 = new Gate(233);

// _____________________________CREATE-ROUTE-FOR-FLIGHT___________________________//
let route1 = new Routs("PP", "BK")
let route2 = new Routs("PP", "SP")
let route3 = new Routs("PP", "PL")
let route4 = new Routs("PP", "CN")

// ____________________________CREATE-PASSENGERS_______________________________//
let passenger1 = new Passengers("Pas01", "Senrin", "Sim", 23, Genders.Male);
let passenger2 = new Passengers("Pas02", "Radit", "Thy", 23, Genders.Male);
let passenger3 = new Passengers("Pas03", "Em", "Cha", 23, Genders.Male);
let passenger4 = new Passengers("Pas04", "Chany", "Chhun", 23, Genders.Female);

// ____________________________CREATE-BOOKINGS_______________________________//
let booking1 = new Booking(123, "001BPP");
let booking2 = new Booking(123, "003BKK");
let booking3 = new Booking(123, "003BPL");
let booking4 = new Booking(123, "003BCN");

// ____________________________CREATE-TRIPS_______________________________//
let trip1 = new Trips("Trip1PPBK");
let trip2 = new Trips("Trip2PPPL");
let trip3 = new Trips("Trip3PPSP");
let trip4 = new Trips("Trip4PPCN");

// ____________________________CREATE-FLIGHTS_______________________________//
let flight1 = new Flight(FlightId.F001Boeing, gate1, AirplaneType.Boeing737, dateS1, dateA1, route1)
let flight2 = new Flight(FlightId.F002Boeing, gate2, AirplaneType.Boeing747, dateS1, dateA1, route2)
let flight3 = new Flight(FlightId.F003Boeing, gate3, AirplaneType.Boeing767, dateS1, dateA1, route3)
let flight4 = new Flight(FlightId.F004Boeing, gate4, AirplaneType.Boeing777, dateS1, dateA1, route4)

// ____________________________CREATE-TICKETS_______________________________//
let ticket1 = new Tickets("T001", Bookingtype.NORETURNTICKET);
let ticket2 = new Tickets("T002", Bookingtype.RETURNTICKET);
let ticket3 = new Tickets("T003", Bookingtype.NORETURNTICKET);
let ticket4 = new Tickets("T004", Bookingtype.RETURNTICKET);

// ____________________________CREATE-BAGGAGE_______________________________//
let baggage1 = new Baggage(1,'20Kg')


// _______________________________CREATE-AIRLINES______________________________//
let airline1 = new Airlines("Cambodia Airline");

// _______________________________CREATE-EMPLOYEES______________________________//
let pilot1 = new Pilot("Dity", "Trav", 24, Genders.Male, 1243, EmployeeRole.Pilot);
let pilot2 = new Pilot("Senrin", "Sim", 24, Genders.Male, 1243, EmployeeRole.Pilot);
let mananger = new Mananger("Serin", "Sing", 23, Genders.Male, 1233, EmployeeRole.Manager);


// _______________________________CREATE-CHEFS______________________________//
let chef1 = new Chef("Dit", "A7", 24, Genders.Male, 1243, EmployeeRole.Chef);

// _______________________________CREATE-MEALS______________________________//
let meal1 = new Meals("Soup",mealTypes.kosher);

// _______________________________CREATE-SEAT______________________________//
let seatNumber1 = new Seat(1,SeatType.businessClass);
let seatNumber2 = new Seat(2,SeatType.economyClass);
// _______________________________CREATE-lAYOUT______________________________//
let layouts = new Layout(12,12)
// _______________________________ADD-SEAT-LAYOUT______________________________//
layouts.addSeat(seatNumber1);
layouts.addSeat(seatNumber2);

// _______________________________CREATE AIRPLANE______________________________//

let airplanName = new Airplane('Cambodia Airline');

airplanName.addFlight(flight1);
airplanName.addLayout(layouts);

// ===============================CALL-FUNCTIONS===========================

// __________________________________TRIPS-METHOD_______________________________//
trip1.addFlight(flight1);
trip1.addFlight(flight2);
trip1.addBooking(booking1);
trip2.addFlight(flight2);
trip2.addBooking(booking2);
trip3.addFlight(flight3);

trip3.addBooking(booking3);
trip4.addFlight(flight4);
trip4.addBooking(booking4);


// __________________________________BOOKING-METHOD_______________________________//
booking1.addTrip(trip1);
booking1.addTicket(ticket1);
booking1.addPassenger(passenger1);
booking2.addTrip(trip2)
booking2.addTicket(ticket2)
booking2.addPassenger(passenger2)
booking3.addTrip(trip3)
booking3.addTicket(ticket3)
booking3.addPassenger(passenger3)
booking4.addTrip(trip4)
booking4.addTicket(ticket4)
booking4.addPassenger(passenger4)


// __________________________________PASSENGER-METHOD_______________________________//
passenger1.addBooking(booking1);
passenger2.addBooking(booking2);
passenger3.addBooking(booking3);
passenger4.addBooking(booking4);
booking1.addBaggage(baggage1);
booking1.addFlight(flight1)

// __________________________________PASSENGER-METHOD_______________________________//
passenger1.addBooking(booking1);
passenger1.addBaggage(baggage1);

// __________________________________AIRLINES-METHOD_______________________________//
airline1.addAirplane(AirplaneType.Boeing737);
airline1.addAirplane(AirplaneType.Boeing747);
airline1.addEmployee(mananger);
airline1.addEmployee(pilot1);
airline1.addEmployee(pilot2);
airline1.addTrip(trip1);
airline1.addTrip(trip2);
airline1.addTrip(trip3);
airline1.addTrip(trip4);

// __________________________________EMPLOYEES-METHOD_______________________________//
pilot1.addFlight(flight1);
pilot1.addFlight(flight2);
pilot2.addFlight(flight3)
pilot2.addFlight(flight4)

// __________________________________CHEFS-METHOD_______________________________//
// chef1.addFlight(flight1);
chef1.addMeals(meal1);

chef1.addFlight(flight1);
chef1.addFlight(flight2);
chef1.addFlight(flight3);
chef1.addFlight(flight4);


// USER STORY 1->
// =================1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)==============
passenger1.getPassengerFullDetails();
// passenger1.getPassengerFullDetails();
// passenger2.getPassengerFullDetails();
// passenger3.getPassengerFullDetails();
// passenger4.getPassengerFullDetails();


/*USER STORY 2->
// =================2. As an airline manager, I want to know for a given flight, how many passengers have return 
// tickets.=============*/

console.log(airline1.getFlightNumPassReturn());
console.log(airline1);
console.log(booking1)
console.log(layouts);
console.log(airplanName);


/*USER STORY 3->
// =================3. As an airline pilot, I want to know, for a given date, how many flights I have to join==============*/
pilot1.getFlightCountByTime();



/*USER STORY 4->
// =================4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to 
prepare.============

*/
// console.log(chef1.getDetailChef(chef1));
console.log(chef1);

// */
// console.log(chef1);



/*USER STORY 5->
=================5. As an airline manager, I want to find out how much salary I pay all my employees.============*/
console.log(airline1.getTotalSalariesOfEmployees());
// console.log(airline1.getTotalSalariesOfEmployees());
// console.log(airline1.airlineDetails());
// console.log(airline1.getEmployeeDetails());


/*USER STORY 6->
===================6. As a passenger, I want to know which gate my plane is waiting at.
=================*/
console.log(passenger1.getGate());
// console.log(passenger1.getGate());
// console.log(passenger1.getPassDetails()); //


















