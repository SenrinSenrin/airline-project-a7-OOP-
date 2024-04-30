
import { AirplaneType } from "./flight";
export class Airplane {
    airplanName: AirplaneType
    // layouts: Layout[]=[];
    constructor(airplanName: AirplaneType) {
        this.airplanName = airplanName;
    }
}