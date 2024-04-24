import { Passengers } from "../person/person";

export class Baggage{
    private BaggageId: number
    private PassengerId: Passengers[]
    private FlightId: number
    constructor(BaggageId:number, flightId: number){
        this.BaggageId = BaggageId
        this.FlightId = flightId
    }
    public BaggageDetails(){}
    public BaggageStatus(){}

}