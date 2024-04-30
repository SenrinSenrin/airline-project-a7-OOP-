
import { AirplaneType } from "./Flight";
export class Airplane {
    airplanName: AirplaneType
    // layouts: Layout[]=[];
    constructor(airplanName: AirplaneType) {
        this.airplanName = airplanName;
    }
}