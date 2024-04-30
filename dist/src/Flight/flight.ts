import { FlightNumber } from "./flightNumber";
import { Routs } from "./Route";
import { Gate } from "./Gate";

export enum FlightId {
    F001Boeing = 'F001Boeing',
    F002Boeing = 'F002Boeing',
    F003Boeing = 'F003Boeing',
    F004Boeing = 'F004Boeing',
    F005Boeing = 'F005Boeing',
    F006Boeing = 'F006Boeing',
}

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
    FlightId: FlightId;
    Gate: Gate;
    Airplane: AirplaneType;
    StartingTime: Date;
    ReachingTime: Date;
    Destination: Routs;

    constructor(FlightId: FlightId,gate:Gate, Airplane: AirplaneType, StartingTime: Date, ReachingTime: Date, routes: Routs) {
        this.FlightId = FlightId;
        this.Gate = gate;
        this.Airplane = Airplane;
        this.StartingTime = StartingTime;
        this.ReachingTime = ReachingTime;
        this.Destination = routes;
    }

    public FlightDetails(){}; //get flight details
}