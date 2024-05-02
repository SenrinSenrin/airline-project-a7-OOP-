export enum SeatType {
    businessClass = 'businessClass',
    economyClass = ' economyClass',
}

export class Seat {
    seatNumber: number;
    seatType: SeatType;
    constructor(seatNumber: number, seatType: SeatType) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }
}