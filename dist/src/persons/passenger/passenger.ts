import { Persons } from "../person";
import { Baggage } from "./Baggage";
import { Booking } from "../../Booking/booking"

import { Genders } from "../person";
export class Passengers extends Persons{
    protected passengerId: string;
    protected Booking: Booking[] = [];
    Baggage: Baggage[] = [];
    constructor(passengerId: string, FirstName: string, LastName: string, Age: number, Gender: Genders){
        super(FirstName, LastName, Age, Gender)
        this.passengerId = passengerId;
    }
    
    addBooking(booking: Booking){
        this.Booking.push(booking)
    }
    addBaggage(baggage: Baggage){
        this.Baggage.push(baggage)
    }

    getPassengerFullDetails(){
        for (let inforOfPass of this.Booking){
            for (let trip of inforOfPass.Trip){
                for (let passInfor of trip.Bookings){
                    for (let passDetail of passInfor.Passenger){
                        console.log('Information about passenger: '+ passDetail.FirstName +' '+ passDetail.LastName + '\n'+
                            'Name: ' + passDetail.FirstName +' '+ passDetail.LastName +'\n'+
                            'Age: ' + passDetail.Age + '\n'+
                            'Gender: ' + passDetail.Gender  
                        );  
                    }
                    for (let passTrip of passInfor.Trip){
                        for (let tripPlace of passTrip.Flights){
                            console.log('Trip from: ' + tripPlace.Destination.Departure + ' to '+ tripPlace.Destination.Arrival + '\n'+
                                'Departure time: '+ tripPlace.StartingTime + '\n'+
                                'Arrival time: '+ tripPlace.ReachingTime + '\n'+
                                'Flight number: '+ tripPlace.FlightId
                            );
                            
                        }
                        
                    }
                    
                }
                
            }
            
        }
    } 

    getGate() {
        console.log('Passenger: ', this.FirstName+' '+this.LastName, 'You flight gate: ')
        for (let booking of this.Booking) {
            for (let trip of booking.Trip) {
                for (let flight of trip.Flights) {
                    console.log('Flight ID:', flight.FlightId, 'Gate:', flight.Gate);
                }
            }
        }
    }

    getPassDetails(): string {
        return +
        "Name: "+this.FirstName + " " + this.LastName + "\n" +
        "Age: "+this.Age + "\n"+
        "Gender: "+this.Gender + "\n" 
        ;
    }
}