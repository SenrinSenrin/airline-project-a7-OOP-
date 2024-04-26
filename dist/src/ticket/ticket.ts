import { Airport } from "../Airports/airport";
export class Ticket {
    private ticketId: string;
    private passengerId: string;
    private destination: Airport[];
    private price: number;
    private flightId: string;
    constructor(ticketId: string, passengerId: string, price: number, flightId: string){
        this.ticketId = ticketId;
        this.passengerId = passengerId;
        this.destination = [];
        this.price = price;
        this.flightId = flightId;
    }

    public getDestination(destination: Airport){
        this.destination.push(destination);
    }

    public getTicketDetail(){
        return {
            ticketId: this.ticketId,
            passengerId: this.passengerId,
            destination: this.destination,
            price: this.price,
            flightId: this.flightId,
        }
    }
    public getBooking(){
        return {
            ticketId: this.ticketId,
            passengerId: this.passengerId,
            destination: this.destination,
            price: this.price,
            flightId: this.flightId,
            status: "confirmed",
            bookingDate: new Date(),
        }
    }
    

}

// let PPAirports = new Airport("PPAirports", "PP", "akdlsdkfl123");
// let Ticket1 = new Ticket("TK11", "01PP",123, "123")
// Ticket.getDestination(PPAirports)