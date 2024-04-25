import { Flight } from "../Flight/flight";
import { flightNumber } from "../flightNumber/flightNumber";

class BoardingPass {
    private FlightId:Flight;
    private FlightNumber:flightNumber;
    private ArrivalTime:Date;
    private DepartureTime:Date;
    private Destination: string;

    constructor(FlightID:Flight,FlightNumber:flightNumber, ArrivalTime:Date, DepartureTime:Date, Destination:string) {
        this.FlightId = FlightID;
        this.FlightNumber = FlightNumber;
        this.ArrivalTime = ArrivalTime;
        this.DepartureTime = DepartureTime;
        this.Destination = Destination;
        
    }
    public BoardingPassDetails(){};
    public FlightDetails(){};
}