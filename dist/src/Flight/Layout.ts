import { Seat } from "./Seat";

export class Layout{
    seats: Seat[]=[];
    constructor(public numOfRow: number, public numOfCol: number){
        this.numOfRow = numOfRow,
        this.numOfCol = numOfRow
    }
    addSeat(seat: Seat){
        this.seats.push(seat);
    }
    getSeat(){
        return this.seats
    }
}