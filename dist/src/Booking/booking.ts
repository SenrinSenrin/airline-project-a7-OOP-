import { Passengers } from "../Persons/Passenger/Passenger";
import { Trips } from "../Flight/Trip";
import { Tickets } from "../Tickets/ticket";


export class Booking {
  private Price: number;
  BookingId: string;
  Trip: Trips[] = [];
  Passenger: Passengers[] = [];
  Tickettype: Tickets[] = [];

  constructor(Price: number, BookingId: string) {
    this.Price = Price;
    this.BookingId = BookingId;
  }

  public getBookingDetails(){
    return{
      Price: this.Price,
      BookingId: this.BookingId,
      Trip: this.Trip,
      Passenger: this.Passenger,
      Tickettype: this.Tickettype
    }
  }

  addTicket(ticket: Tickets){
    this.Tickettype.push(ticket)
  }

  addTrip(trip: Trips){
    this.Trip.push(trip)
  }

  addPassenger(passenger: Passengers){
    this.Passenger.push(passenger)
  }
}
