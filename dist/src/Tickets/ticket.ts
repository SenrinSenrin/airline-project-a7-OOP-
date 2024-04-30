import { Airport } from "../Airports/airport";

export enum Bookingtype {
    RETURNTICKET = "Returnticket",
    NORETURNTICKET = "No returnticket",
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
