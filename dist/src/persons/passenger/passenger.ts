import { Persons } from "../Person";
import { Baggage } from "./Baggage";
import { Booking } from "../../Booking/Booking"

import { Genders } from "../Person";
export class Passengers extends Persons{
    Booking: Booking[] = [];
    Baggage: Baggage[] = [];
    constructor(passengerId: string, FirstName: string, LastName: string, Age: number, Gender: Genders){
        super(FirstName, LastName, Age, Gender)
    }

    addBooking(booking: Booking){
        this.Booking.push(booking)
    }
    addBaggage(baggage: Baggage){
        this.Baggage.push(baggage)
    }
    public PassengerDetails(){}
    public Checkin(){}
}