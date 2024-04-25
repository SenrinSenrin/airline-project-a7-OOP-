import { Airport } from "../Airports/airport";

export class Ticket {
    private ticketId: string;
    private passengerId: string;
    private destination: Airport[];
    private price: number;
    private flightId: string;
    Passenger: any;
    
    constructor(ticketId: string, passengerId: string, destination: Airport[], price: number, flightId: string){
        this.ticketId = ticketId;
        this.passengerId = passengerId;
        this.destination = destination;
        this.price = price;
        this.flightId = flightId;
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
