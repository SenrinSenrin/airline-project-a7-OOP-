import { FlightNumber } from "./FlightNumber";
import { DateTime } from "./Date";
import { Routs } from "./Route";

export enum AirplaneType {
    Boeing737,
    Boeing747,
    Boeing767,
    Boeing777,
    Boeing787,
    Boeing797,
    Boeing800,
    Boeing807,
    Boeing817,
    Boeing827,
} 

export class Flight {
    FlightId: string;
    FlightNumber: FlightNumber[] = [];
    Airplane: AirplaneType;
    StartingTime: Date;
    ReachingTime: Date;
    Destination: Routs;

    constructor(FlightId: string, Airplane: AirplaneType, StartingTime: Date, ReachingTime: Date, routes: Routs) {
        this.FlightId = FlightId;
        this.Airplane = Airplane;
        this.StartingTime = StartingTime;
        this.ReachingTime = ReachingTime;
        this.Destination = routes;
    }

    addFlightNumber(AlineCode: string, FlightCode: string){
        this.FlightNumber.push(new FlightNumber(AlineCode, FlightCode));
    }
    public FlightDetails(){}; //get flight details
}