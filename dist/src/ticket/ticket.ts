export class Ticket{
    private ticketId: string;
    private price: number;
    private seatNumber: number;
    private flightId: string;
    private passengerId: string;

    constructor(ticketId: string, price: number, seatNumber: number, flightId: string, passengerId: string){
        this.ticketId = ticketId;
        this.price = price;
        this.seatNumber = seatNumber;
        this.flightId = flightId;
        this.passengerId = passengerId;
    }

}