import { Passengers } from "../passenger/passenger";
import { Ticket } from "../Ticket/ticket";

export class Booking {
  private bookingId: string;
  private Passenger: Passengers;
  private bookingDate: Date;
  private status: string;
  private Tickets: Ticket[]; // Change Ticket to Tickets

  constructor(bookingId: string, passenger: Passengers, bookingDate: Date, status: string) {
    this.bookingId = bookingId;
    this.Passenger = passenger;
    this.bookingDate = bookingDate;
    this.status = status;
    this.Tickets = []; // Initialize Tickets array with the provided ticket
  }

  public addTicket(ticket: Ticket): void {
    this.Tickets.push(ticket); // Add the provided ticket to the Tickets array
  }

  public getTickets(){
    return this.Tickets;
  }
  
  public getBookingDetails(){
    return{
      bookingId: this.bookingId,
      bookingDate: this.bookingDate,
      status: this.status,
      tickets: this.Tickets.map(ticket => ticket.getTicketDetail())
    }
  }

  public cacalculateTotalPrice(){
    let totalPrice = 0;
    for (let ticket of this.Tickets){
      totalPrice += ticket.getBooking().price;
    }
    return totalPrice;
  }

  public getPassenger(){
    if(this.Tickets.length > 0){
      return this.Tickets[0].Passenger;
    }else{
      return null;
    }
  }

  public getBookingDate(){
    return this.bookingDate;
  }

}
