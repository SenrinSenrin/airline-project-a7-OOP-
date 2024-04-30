import { Persons } from "../person";
import { Baggage } from "./Baggage";
import { Booking } from "../../Booking/Booking"

import { Genders } from "../person";
export class Passengers extends Persons{
    protected Booking: Booking[] = [];
    Baggage: Baggage[] = [];
    constructor(passengerId: string, FirstName: string, LastName: string, Age: number, Gender: Genders){
        super(FirstName, LastName, Age, Gender)
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
}