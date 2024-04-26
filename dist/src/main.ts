import { Airport } from "./Airports/airport";
import { Passengers } from "./persons/passenger/passenger";
import { Baggage } from "./baggage/baggage";
import { Ticket } from "./ticket/ticket";

let PPAirports = new Airport("PPAirports", "PP", "akdlsdkfl123");
let Ticket1 = new Ticket("TK11", "01PP",123, "123")
Ticket1.getDestination(PPAirports)
let Pass1Baggage = new Baggage(12, "123")
let Passenger1 = new Passengers("01PP","Senrin",22,Ticket1)
Pass1Baggage.getPassengerId(Passenger1.getPassId)
Passenger1.addBaggage(Pass1Baggage)

console.log(Passenger1)



