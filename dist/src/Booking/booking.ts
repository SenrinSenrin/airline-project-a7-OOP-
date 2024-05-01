import { Passengers } from "../persons/passenger/passenger";
import { Trips } from "../Flight/Trip";
import { Tickets } from "../Tickets/ticket";
import { Baggage } from "../Persons/Passenger/Baggage";
import { Flight } from "../Flight/flight";


export class Booking {
  private Price: number;
  BookingId: string;
  Trip: Trips[] = [];
  Passenger: Passengers[] = [];
  Tickettype: Tickets[] = [];
  Baggage: Baggage[] = [];
  FlightId: Flight[] = [];

  constructor(Price: number, BookingId: string) {
    this.Price = Price;
    this.BookingId = BookingId;
  }

  public getBookingDetails() {
    return {
      Price: this.Price,
      BookingId: this.BookingId,
      Trip: this.Trip,
      Passenger: this.Passenger,
      Tickettype: this.Tickettype,
      Baggage: this.Baggage,
      FlightId: this.FlightId
    }
  }

  addTicket(ticket: Tickets) {
    this.Tickettype.push(ticket)
  }

  addTrip(trip: Trips) {
    this.Trip.push(trip)
  }

  addPassenger(passenger: Passengers) {
    this.Passenger.push(passenger)
  }
  addBaggage(baggage: Baggage) {
    this.Baggage.push(baggage)
  }

  addFlight(flight: Flight) {
    this.FlightId.push(flight)
  }

}
