import { Passengers } from "./passenger";
import { Flight } from "../../Flight/flight";

export class Baggage{
    BaggageId: number;
    baggageWeight: string;

    constructor(BaggageId: number, bagWeight: string) {
        this.BaggageId = BaggageId;
        this.baggageWeight = bagWeight;
       
    }

    
    public getBaggageDetails() {
        return {
            BaggageId: this.BaggageId,
            baggageWeight: this.baggageWeight
        };
    }

    public BaggageStatus() {
        // Implement method to get baggage status
    }
}

