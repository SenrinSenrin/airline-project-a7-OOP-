import { Baggage } from "../../baggage/baggage";
import {Ticket} from "../../ticket/ticket";
export class Passengers{
    private passengerId: string;
    private name: string;
    private age: number;
    private ticketId: Ticket;
    Baggage: Baggage[];
    constructor(passengerId: string,name: string,age: number,ticketId: Ticket){
        this.passengerId = passengerId;
        this.name = name;
        this.age=age;
        this.ticketId=ticketId;
        this.Baggage = [];
    }

    getPassId(){
        return this.passengerId;
    }

    addBaggage(baggage: Baggage){
        this.Baggage.push(baggage)
    }
    public PassengerDetails(){}
    public Checkin(){}
}