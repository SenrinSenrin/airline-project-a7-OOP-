import { Flight } from "./flight";

export class Gate {
    gateNumber: number;
    toFlight: Flight;
    constructor(gateNumber: number, toFlight: Flight) {
        this.gateNumber = gateNumber;
        this.toFlight = toFlight;
    }

}
