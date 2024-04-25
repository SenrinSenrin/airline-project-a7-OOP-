import { flightNumber } from "../flightNumber/flightNumber";

export class Flight {
    private FlightId: string;
    private FlightNumber: flightNumber;
    private StartTime: Date;
    private ReachingTime: Date; //start time until arrive time
    private Destination: string;
    private Price: number;
    constructor(FlightId:string, FlightNumber:flightNumber, StartTime:Date,Destination:string, ReachingTime:Date,Price:number) {
        this.FlightId = FlightId;
        this.FlightNumber = FlightNumber;
        this.StartTime = StartTime;
        this.ReachingTime = ReachingTime;
        this.Destination = Destination;
        this.Price = Price;
        
    }
    public FlightDetails(){};
}