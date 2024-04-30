import { Airlines } from "../Airline/ailine";
import { Flight } from "../Flight/flight";
import { Gate } from "../Flight/Gate";

export class Airport {
    name: string
    airlines: Airlines[] = [];
    flights: Flight[] = [];
    gates: Gate[] = [];

    constructor(name: string) {
        name = name.toLowerCase();
    }

    addAirline(airline: Airlines) {
        this.airlines.push(airline);
    }

    addFlight(flight: Flight) {
        this.flights.push(flight);
    }

    addGate(gate: Gate) {
        this.gates.push(gate);
    }
    
}
