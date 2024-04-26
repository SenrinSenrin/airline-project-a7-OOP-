import { Passengers } from "../persons/passenger/passenger";

export class Baggage{
    private BaggageId: number
    private PassengerId: string
    private FlightId: string
    constructor(BaggageId:number, flightId: string){
        this.BaggageId = BaggageId
        this.FlightId = flightId
        this.PassengerId = ''
    }

    getPassengerId(passId){
        this.PassengerId = passId
    }
    public BaggageDetails(){}
    public BaggageStatus(){}

}