import { Passengers } from "./passenger";
import { Flight } from "../../Flight/flight";

export class Baggage {
    BaggageId: number;
    passengerId: Passengers[];
    baggageWeight: string;

    constructor(BaggageId: number, bagWeight: string) {
        this.BaggageId = BaggageId;
        this.baggageWeight = bagWeight;

    }

    getPassengerId() {
        return this.passengerId;
    }

    public getBaggageDetails() {
        return {
            BaggageId: this.BaggageId,
            baggageWeight: this.baggageWeight
        };
    }

    public BaggageStatus() {
        return {
            BaggageId: this.BaggageId,
            baggageWeight: this.baggageWeight
        };
    }
}

