import { Airport } from "../Airports/airport";

export enum Bookingtype {
    RETURNTICKET,
    NORETURNTICKET,
}

export class Tickets {
    ticketId: string;
    Tickettype: Bookingtype
    constructor(ticketId: string, ticketType: Bookingtype) {
        this.ticketId = ticketId;
        this.Tickettype = ticketType;
        
    }


    public getTicketDetail(){
        return {
            ticketId: this.ticketId,
            Tickettype: this.Tickettype,
        }
    }
}
