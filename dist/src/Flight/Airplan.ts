import { Layout } from "./Layout";
import { AirplaneType, Flight } from "./flight";
export class Airplane {
    airplanName: string;
    flights: Flight[] = [];
    layouts: Layout[] = [];
    constructor(airplanName: string) {
        this.airplanName = airplanName;
    }
    addFlight(flight: Flight) {
        this.flights.push(flight)
    }

    addLayout(layouts: Layout) {
        this.layouts.push(layouts)
    }

    getFlight(){
        return this.flights;
    }

    getLayout(){
        this.layouts;
    }

}