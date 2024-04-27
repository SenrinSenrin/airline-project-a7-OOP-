
import { Booking } from "../Booking/Booking";
import { Flight } from "./Flight";

export class Trips {
    TripId: string;
    Flights: Flight[] = [];
    Bookings: Booking[] = [];

    constructor(tripId: string) {
        this.TripId = tripId;
    }

    addFlight(flight: Flight): void {
        this.Flights.push(flight);
    }

    addBooking(bookings: Booking): void {
        this.Bookings.push(bookings);
    }
}
